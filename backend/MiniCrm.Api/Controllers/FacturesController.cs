using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniCrm.Api.Data;
using MiniCrm.Api.Models;

namespace MiniCrm.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FacturesController : ControllerBase
    {
        private readonly MiniCrmDbContext _context;

        public FacturesController(MiniCrmDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Facture>>> GetFactures()
        {
            return await _context.Factures.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Facture>> GetFacture(int id)
        {
            var facture = await _context.Factures.FindAsync(id);
            if (facture == null) return NotFound();
            return facture;
        }

        [HttpPost]
        public async Task<ActionResult<Facture>> CreateFacture(Facture facture)
        {
            _context.Factures.Add(facture);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFacture), new { id = facture.Id }, facture);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFacture(int id, Facture facture)
        {
            if (id != facture.Id) return BadRequest();
            _context.Entry(facture).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFacture(int id)
        {
            var facture = await _context.Factures.FindAsync(id);
            if (facture == null) return NotFound();
            _context.Factures.Remove(facture);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}