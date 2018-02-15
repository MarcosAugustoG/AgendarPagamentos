using System.Data.Entity;
using System.Diagnostics;
using Teste5b5.Entities;

namespace Teste5b5.Data
{
    public class PagamentoContext : DbContext
    {
        public DbSet<Pagamento> Pagamentos { get; set; }

        public PagamentoContext() : base("Teste")
        {
            Database.Log = sql => Debug.WriteLine(sql);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.AddFromAssembly(typeof(PagamentoContext).Assembly);            
        }
    }
}