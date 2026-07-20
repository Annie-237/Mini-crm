using System.ComponentModel.DataAnnotations.Schema;

namespace MiniCrm.Api.Models
{
    public class Facture
    {
        public int Id { get; set; }
        public int ProjetId { get; set; }
        public Projet? Projet { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal Montant { get; set; }
        public string Statut { get; set; } = "Impayée";
        public DateTime DateEmission { get; set; } = DateTime.Now;
        public DateTime? DateEcheance { get; set; }
    }
}