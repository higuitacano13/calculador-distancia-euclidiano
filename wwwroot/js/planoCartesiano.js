const contexto = document.querySelector('#planoCartesiano');

function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}


var puntoA = { x: 0, y: 4 };
var puntoB = { x: 4, y: 7 };
var distanciaAB = calcularDistancia(puntoA.x, puntoA.y, puntoB.x, puntoB.y);

var datos = {
    labels: ["A", "B"],
    datasets: [{
        label: 'Resultado Distancia ' + distanciaAB + ' | ',
        data: [puntoA, puntoB],
        backgroundColor: "#B60505",
        borderColor: "#B60505",
        borderWidth: 2,
        pointBorderWidth: 4
    }]
};

var configuracionesGrafico = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        },
        y: {
            min: 0
        }
    },
    pluggins: {
        titile: {
            display: true,
            text: 'Puntos en el Plano Cartesiano'
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
                    borderColor: 'red',
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
                        enbaled: true
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
                    var label = context.datasets.label || '';

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

var miGrafico = new Chart(contexto, {
    type: 'line',
    data: datos,
    options: configuracionesGrafico
});