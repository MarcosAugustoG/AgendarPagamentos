using System;
using System.Web.Mvc;
using Teste5b5.Business;
using Teste5b5.Entities;


namespace Teste5b5.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Deletar(int id)
        {
            try
            {
                var negocio = new PagamentoBusiness();
                negocio.Deletar(id);
                return Json("Ok");
            }
            catch (Exception ex)
            {
                return Json(new { erro = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

        #region Métodos de listagem
        [HttpGet]
        public ActionResult Listar()
        {

            var negocio = new PagamentoBusiness();
            var lista = negocio.Listar();
            return View(lista);
        }

        [HttpPost]
       public JsonResult BuscarValorPor(DateTime filtroData)
        {
            var negocio = new PagamentoBusiness();
            var pagamentos = negocio.ValorPorData(filtroData);
            return Json(String.Format("{0:C}", pagamentos));
        }
        #endregion

        #region Método de cadastro
        [HttpPost]
        public ActionResult NovoPagamento(Pagamento novoPagamento)
        {
            try
            {
                var negocio = new PagamentoBusiness();
                negocio.Cadastrar(novoPagamento);
                return Json("Ok");
            }
            catch (Exception ex)
            {
                return Json(new { erro = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        [HttpGet]
        public ActionResult BuscarDadosGrafico()
        {
            try
            {
                var negocio = new PagamentoBusiness();
                var lista = negocio.BuscarDadosGrafico();
                return View("Listar",lista);
            }
            catch (Exception ex)
            {
                return Json(new { erro = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}