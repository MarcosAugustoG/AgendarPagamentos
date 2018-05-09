using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Teste5b5.Entities;

namespace Teste5b5.Data
{
    public class PagamentoData
    {
        public void Cadastrar(Pagamento novoPagamento)
        {
            using (var ctx = new PagamentoContext())
            {
                ctx.Pagamentos.Add(novoPagamento);
                ctx.SaveChanges();
            }
        }



        public IEnumerable<Pagamento> BuscarDadosGrafico()
        {
            using (var ctx = new PagamentoContext())
            {
                return ctx.Pagamentos.OrderBy(x => x.Nome).ToList();
            }
        }

        public void Deletar(int id)
        {
            using (var ctx = new PagamentoContext())
            {

                var pagSelecionado = ctx.Pagamentos.Where(x => x.Id == id).FirstOrDefault();
                ctx.Pagamentos.Remove(pagSelecionado as Pagamento);
                ctx.SaveChanges();
            }
        }

        public IEnumerable<Pagamento> Listar()
        {
            using (var ctx = new PagamentoContext())
            {
                return ctx.Pagamentos.OrderBy(x => x.Nome).ToList();
            }
        }
    }
}