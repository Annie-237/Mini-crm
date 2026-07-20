using Microsoft.EntityFrameworkCore;
using MiniCrm.Api.Models;

namespace MiniCrm.Api.Data
{
    public class MiniCrmDbContext : DbContext
    {
        public MiniCrmDbContext(DbContextOptions<MiniCrmDbContext> options) : base(options)
        {
        }

        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Projet> Projets { get; set; }
        public DbSet<Facture> Factures { get; set; }
    }
}