﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace calculador_distancia_euclidiano.Models;

public partial class PlanoCartesiano
{
    public int Id { get; set; }

    public int PuntoInicialX { get; set; }

    public int PuntoInicialY { get; set; }

    public int PuntoFinalX { get; set; }

    public int PuntoFinalY { get; set; }

    public double? Distancia { get; set; }

    public DateTime FechaCalculo { get; set; }
}