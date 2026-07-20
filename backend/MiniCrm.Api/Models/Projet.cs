namespace MiniCrm.Api.Models
{
    public class Projet
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client? Client { get; set; }

        public string Titre { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string Statut { get; set; } = "En cours";
        public DateTime DateDebut { get; set; } = DateTime.Now;
        public DateTime? DateFin { get; set; }

        public List<Facture> Factures { get; set; } = new();
    }
}