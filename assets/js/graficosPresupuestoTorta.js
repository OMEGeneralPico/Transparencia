function generarchart(etiquetas, data2, ctx) {

  return new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: 'doughnut',
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Ejecucion ',
        data: data2,
        backgroundColor: [
          'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(145, 145, 20, 0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgb(166, 166, 25)'
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
              return  Math.round((value*5))/10 + '%';
            },
            color: 'black',
            font: {
               
             
              family: 'Raleway'
            }
          },
        
        title: {
          display: true,
          text: 'Ejecucion por unidad (%)',

          align: 'start',
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
}




function isScrolledIntoView(elem) {


  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  if ($(elem).offset()) {

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  } else {
    return false
  }

}

var charts = {}
var inView = false;
var presupuestos = null;

$.getJSON("assets/json/PRESUPUESTO.json", function (dataorig) {
  presupuestos = dataorig;
})


function animarPresupuestos() {
  for (var i = 0; i < Object.keys(presupuestos).length - 1; i++) {
    var idElement = "Presupuesto" + i;
    if (isScrolledIntoView('#' + idElement)) {
      if (charts[idElement]) { continue }
      charts[idElement] = true;
      var element = Object.keys(presupuestos)[i]
      var ctx = document.getElementById(idElement);
      var etiquetas = Object.keys(presupuestos[element])
      var data2 = etiquetas.map(key => presupuestos[element][key]);
      if (inView) { return; }
      inView = true;
      var Presupuesto2 = generarchart(etiquetas, data2, ctx)
    } else {
      inView = false;
    }
  }
}

$(window).scroll(function () {

  animarPresupuestos();

});

$(window).load(function () {


  animarPresupuestos();

});