namespace MiniCrm.Api.Models
{
    public class Utilisateur
    {
        public int Id { get; set; }
        public string Nom { get; set; } = string.Empty;
        public string Courriel { get; set; } = string.Empty;
        public string MotDePasseHash { get; set; } = string.Empty;
        public DateTime DateCreation { get; set; } = DateTime.Now;

        public List<Client> Clients { get; set; } = new();
    }
}