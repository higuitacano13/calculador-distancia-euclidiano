const contexto = document.querySelector('#planoCartesiano');

let puntoInicialX = 0;
let puntoInicialY = 0;
let puntoFinalX = 0;
let puntoFinalY = 0;

function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

function capturarDatosGrafica(id) {
    let fila = document.getElementById('fila-' + id);
    let puntoInicialX = parseFloat(fila.cells[0].innerText);
    let puntoInicialY = parseFloat(fila.cells[1].innerText);
    let puntoFinalX = parseFloat(fila.cells[2].innerText);
    let puntoFinalY = parseFloat(fila.cells[3].innerText);

    let puntoA = { x: puntoInicialX, y: puntoInicialY };
    let puntoB = { x: puntoFinalX, y: puntoFinalY };
    let distanciaAB = calcularDistancia(puntoA.x, puntoA.y, puntoB.x, puntoB.y);

    actualizarGrafica(puntoA, puntoB, distanciaAB);
}

function actualizarGrafica(puntoA, puntoB, distanciaAB) {
    let datos = {
        labels: ["A", "B"],
        datasets: [{
            label: 'Resultado Distancia ' + distanciaAB.toFixed(3) + ' | ',
            data: [puntoA, puntoB],
            backgroundColor: "#B60505",
            borderColor: "#B60505",
            borderWidth: 2,
            pointBorderWidth: 4
        }]
    };
    let configuracionesGrafico = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                min: 0
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Coordenadas en Plano Cartesiano'
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: puntoA.x,
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'A',
                            enabled: true
                        }
                    },
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: puntoB.x,
                        borderColor: 'blue',
                        borderWidth: 2,
                        label: {
                            content: 'B',
                            enabled: true,
                        }
                    },
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y',
                        value: puntoA.y,
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'A',
                            enabled: true
                        }
                    },
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y',
                        value: puntoB.y,
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            content: 'B',
                            enabled: true
                        }
                    },
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x',
                        value: (puntoA.x + puntoB.x) / 2,
                        borderColor: 'green',
                        borderWidth: 2,
                        label: {
                            content: 'Distancia: ' + distanciaAB.toFixed(2),
                            enabled: true
                        }
                    }
                ]
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';

                        if (context.parsed.x !== null && context.parsed.y !== null) {
                            label += ' (' + context.parsed.x + ', ' + context.parsed.y + ') ';
                        }

                        return label;
                    }
                }
            },
            legend: {
                labels: {
                    fontSize: 20
                }
            }
        }
    };

    // Eliminar la gráfica existente antes de crear una nueva
    if (window.miGrafico) {
        window.miGrafico.destroy();
    }

    window.miGrafico = new Chart(contexto, {
        type: 'line',
        data: datos,
        options: configuracionesGrafico
    });
}

// Llamar a la función capturarDatosGrafica con valores predeterminados
actualizarGrafica({ x: puntoInicialX, y: puntoInicialY }, { x: puntoFinalX, y: puntoFinalY },
calcularDistancia(puntoInicialX, puntoInicialY, puntoFinalX, puntoFinalY));
