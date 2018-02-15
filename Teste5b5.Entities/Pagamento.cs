using System;

namespace Teste5b5.Entities
{
    public class Pagamento
    {
        public int? Id { get; set; }
        public string Nome { get; set; }
        public DateTime Data { get; set; }
        public decimal Valor { get; set; }
    }
}
