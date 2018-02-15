using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Teste5b5.Data;
using Teste5b5.Entities;

namespace Teste5b5.Business
{
    public class PagamentoBusiness
    {
        public void Cadastrar(Pagamento novoPagamento)
        {
            var data = new PagamentoData();
            data.Cadastrar(novoPagamento);
        }

        public IEnumerable<Pagamento> Listar()
        {
            var data = new PagamentoData();
            return data.Listar();
        }

        /// <summary>
        /// Método para somar o valor de todos os pagamentos referentes a data do filtro
        /// </summary>
        /// <param name="filtroData"></param>
        /// <returns>Valor total dos pgamentos do dia</returns>
        public decimal ValorPorData(DateTime filtroData)
        {
            var data = new PagamentoData();
            var listaDePagamentos = data.Listar().Where(x => x.Data == filtroData);
            decimal total = 0;

            foreach (var pagamento in listaDePagamentos)
            {
                total += pagamento.Valor;
            }
            return total;
        }
    }
}