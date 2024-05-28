using calculador_distancia_euclidiano.Models;

namespace calculador_distancia_euclidiano.Helper
{
    public class Helper
    {
        public static double CalcularDistanciaEuclidiana(PlanoCartesiano coordenadas)
        {
            double result = Math.Sqrt(Math.Pow(coordenadas.PuntoFinalX - coordenadas.PuntoInicialX, 2) + Math.Pow(coordenadas.PuntoFinalY - coordenadas.PuntoInicialY, 2));
            return result;
        }
    }
}
