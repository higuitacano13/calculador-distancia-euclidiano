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
    }
}
