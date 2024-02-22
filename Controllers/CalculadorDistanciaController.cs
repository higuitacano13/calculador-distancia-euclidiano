using calculador_distancia_euclidiano.Models;
using Microsoft.AspNetCore.Mvc;

namespace calculador_distancia_euclidiano.Controllers
{
    public class CalculadorDistanciaController : Controller
    {
        private readonly Context _contex;

        public CalculadorDistanciaController(Context context)
        {
            _contex = context;
        }
        public IActionResult Index()
        {
            List<PlanoCartesiano> coordenadas = _contex.PlanoCartesianos.ToList();
            return View(coordenadas);
        }

        public IActionResult CreateAndEditView(int id)
        {
            PlanoCartesiano coordenadas = new PlanoCartesiano();
            if (id != 0) coordenadas = _contex.PlanoCartesianos.Find(id);
            return View(coordenadas);
        }

        public IActionResult Calcular(PlanoCartesiano coordenadas)
        {
            try
            {
                coordenadas.FechaCalculo = DateTime.Now;
                coordenadas.Distancia = Helper.Helper.CalcularDistanciaEuclidiana(coordenadas);

                if (coordenadas.Id == 0)
                {
                    _contex.PlanoCartesianos.Add(coordenadas);
                }
                else
                {
                    _contex.PlanoCartesianos.Update(coordenadas);
                }
                _contex.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception($"Se ha generado un error al guardar el registro en BD -> {ex.Message}");
            }
            return RedirectToAction("Index", "CalculadorDistancia");
        }

        [HttpGet]
        public IActionResult CreateViewDelete(int id)
        {
            PlanoCartesiano coordenadaEnBD = _contex.PlanoCartesianos.Where(x => x.Id == id).FirstOrDefault();
            return View(coordenadaEnBD);
        }

        [HttpPost]
        public IActionResult EliminarCoordenada(PlanoCartesiano coordenada)
        {
            _contex.PlanoCartesianos.Remove(coordenada);
            _contex.SaveChanges();
            return RedirectToAction("Index", "CalculadorDistancia");
        }

    }
}
