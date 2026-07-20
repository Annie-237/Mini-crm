namespace MiniCrm.Api.Models
{
    public class Client
    {
        public int Id { get; set; }
        public int UtilisateurId { get; set; }
        public Utilisateur? Utilisateur { get; set; }

        public string Nom { get; set; } = string.Empty;
        public string Courriel { get; set; } = string.Empty;
        public string? Telephone { get; set; }
        public string? Entreprise { get; set; }
        public DateTime DateCreation { get; set; } = DateTime.Now;

        public List<Projet> Projets { get; set; } = new();
    }
}