//Municipalidad chart porcentaje por sexo
const ctx = document.getElementById('municipalidad_sexo').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Femenino', 'Masculino',],
        datasets: [{
            label: '# of Votes',
            data: [47, 53],
            backgroundColor: [
              'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)'
        ],
        borderColor: [
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Personal por género (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });

  
    
const ctx2 = document.getElementById('municipalidad_nivel_educativo').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Primario','Secundario', 'Terciario', 'Universitario',],
        datasets: [{
            label: '# of Votes',
            data: [418, 358,34,124],
            backgroundColor: [
              'rgba(71, 123, 168, 0.2)',
              'rgba(105, 190, 190, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',

          'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(235, 235, 225,0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
      'rgba(215, 90, 218, 1)',
      'rgba(240, 150, 145, 1)',
      'rgba(55, 55, 55,1)',

      'rgba(35, 145, 200, 1)',
      'rgba(153, 070, 135, 1)',
      'rgba(190, 135, 180, 1)',
      'rgba(235, 235, 225,1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Personal por nivel educativo (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });

const ctx3 = document.getElementById('municipalidad_rango_etario').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['menos de 30 años','30 a 55 años', 'más de 55 años',],
        datasets: [{
            label: '# of Votes',
            data: [54,693,187],
            backgroundColor: [
              'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          'rgba(35, 145, 200, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)',
          
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)',
          
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Personal por rango etario (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
             
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });  const seba = document.getElementById('graficodePresupuesto').getContext('2d');

    const presupuestoTotal = new Chart(seba, {
      type: 'bar', // Puedes cambiar el tipo de gráfico si lo deseas
    data: {
        labels: [
          "Consejo Deliberante",
            "Intendencia",
            "Gobierno",
            "Gestion Urbana",
            "Ambiente",
            "Des. Social",
            "Economia",
            "No Programaticas",
            "Organismos Descentralizados"
        ],
        datasets: [
        
            {
                label: 'Ejecutado',
                data: [
                    1346720057.17,
                    5706822769.13,
                    2691622515.74,
                    8028998956.21,
                    4019910156.57,
                    2745799911.82,
                    8183967241.93,
                    881059915.03

                ],
                backgroundColor: 'rgb(7, 181, 143)',
            borderColor: 'rgba(1, 163, 128, 1)',
            borderWidth: 1,
            barPercentage: 1.0, // Aumentar el ancho de las barras
            categoryPercentage: 1.0, // Aumentar el ancho de las categorías
            stack: 'presupuesto'
            },    {
              label: 'Presupuesto',
              data: [
                  1399271307.74,
                  5893263284.98,
                  2771489217.39,
                  8783778816.92,
                  4162189809.80,
                  2861037049.18,  8322630674.68,
                  918060689.80
              ],
              backgroundColor: 'rgb(255, 0, 0,1)',
            borderColor: 'rgb(105, 5, 5)',
            borderWidth: 1,
            barPercentage: 1.0, // Aumentar el ancho de las barras
            categoryPercentage: 1.0, // Aumentar el ancho de las categorías
            stack: 'presupuesto'
          }
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
          y: {
              beginAtZero: true,
              stacked: false
          },
          x: {
              stacked: false
          }
      },
      layout: {
          padding: {
            
          }
      },
      plugins: {title: {
        align: 'center',
        display: true,
        text: 'Ejecución por Areas',
        font: {
          family: 'Titillium Web',
          size: 20,
        },
        padding: {
         
        },
      },
          datalabels: {formatter: (val) => (`${val}%`)},
          tooltip: {
              callbacks: {
                  label: function(tooltipItem) {
                      return tooltipItem.dataset.label + ': $' + tooltipItem.raw.toLocaleString();
                  }
              }
          }
      }
  }
});

const tipodeGasto = document.getElementById('presupuestoTotalTipo').getContext('2d');

const presupuestoTotalTipo = new Chart(tipodeGasto, {
  type: 'bar', // Puedes cambiar el tipo de gráfico si lo deseas
data: {
    labels: [
        "Personal",
        "Bienes de Consumo",
        "No Personales",
        "Transf. Sociales",
        "Bienes de Capital",
        "Trabajo Publico",
        "Prestamos",
     
    ],
    datasets: [
    
        {
            label: 'Ejecutado',
            data: [
              15270543818.85 ,
              1732864914.47 ,
              4532800568.53 ,
              1830585842.62 ,
              778770537.77 ,
              1472498421.22 ,
              61775639.59 
              

            ],
            backgroundColor: 'rgb(7, 181, 143)',
            borderColor: 'rgba(1, 163, 128, 1)',
            borderWidth: 1,
            barPercentage: 1.0, // Aumentar el ancho de las barras
            categoryPercentage: 1.0, // Aumentar el ancho de las categorías
            stack: 'presupuesto'
        },    {
          label: 'Presupuesto',
          data: [
             15456767926.82,
              2091645218.56 ,
              5524960458.05 ,
              1870879542.23 ,
               804382592.15 ,
               1545017469.26 ,   70589841.19 
             
          ],
          backgroundColor: 'rgb(255, 0, 0,1)',
          borderColor: 'rgb(105, 5, 5)',
        borderWidth: 1,
        barPercentage: 1.0, // Aumentar el ancho de las barras
        categoryPercentage: 1.0, // Aumentar el ancho de las categorías
        stack: 'presupuesto'
      }
    ]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
      y: {
          beginAtZero: true,
          stacked: false
      },
      x: {
          stacked: false
      }
  },
  layout: {
     
  },
  plugins: { title: {
    align: 'center',
    display: true,
    text: 'Ejecución por Rubro',
    font: {
      family: 'Titillium Web',
      size: 20,
    },
   
  },
      datalabels: {formatter: (val) => (`${val}%`)},
      tooltip: {
          callbacks: {
              label: function(tooltipItem) {
                  return tooltipItem.dataset.label + ': $' + tooltipItem.raw.toLocaleString();
              }
          }
      }
  }
}
});