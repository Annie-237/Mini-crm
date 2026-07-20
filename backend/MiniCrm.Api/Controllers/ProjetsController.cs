using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniCrm.Api.Data;
using MiniCrm.Api.Models;

namespace MiniCrm.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetsController : ControllerBase
    {
        private readonly MiniCrmDbContext _context;

        public ProjetsController(MiniCrmDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Projet>>> GetProjets()
        {
            return await _context.Projets.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Projet>> GetProjet(int id)
        {
            var projet = await _context.Projets.FindAsync(id);
            if (projet == null) return NotFound();
            return projet;
        }

        [HttpPost]
        public async Task<ActionResult<Projet>> CreateProjet(Projet projet)
        {
            _context.Projets.Add(projet);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProjet), new { id = projet.Id }, projet);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProjet(int id, Projet projet)
        {
            if (id != projet.Id) return BadRequest();
            _context.Entry(projet).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjet(int id)
        {
            var projet = await _context.Projets.FindAsync(id);
            if (projet == null) return NotFound();
            _context.Projets.Remove(projet);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}