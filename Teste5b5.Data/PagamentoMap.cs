using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace Teste5b5.Entities
{
    public class PagamentoMap : EntityTypeConfiguration<Pagamento>
    {
        public PagamentoMap()
        {
            ToTable("Pagamentos");
            HasKey(x => x.Id);
            Property(x => x.Nome).HasColumnName("NOME");
            Property(x => x.Data).HasColumnName("DATAHORA");
            Property(x => x.Valor).HasColumnName("VALOR");
        }
    }
}