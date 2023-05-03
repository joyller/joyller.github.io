async function fetchData() {
    const url = 'https://joyller.github.io/datafile/Ventas.json';
    const response = await fetch(url);

    const datapoint = await response.json();

    console.log(datapoint);
    return datapoint;
};

fetchData().then(datapoint => {
    const ListProducto = datapoint.map(
        function (index) {
            return index.producto;
        })

    const ListMes = datapoint.map(
        function (index) {
            return index.Mes;
        })

    const ListVentas = datapoint.map(
        function (index) {
            return index.ventas;
        })

    const ListAnio = datapoint.map(
        function (index) {
            return index.anio;
        })

    console.log(ListProducto);
    console.log(ListMes);
    console.log(ListVentas);
    console.log(ListAnio);
});

google.charts.load('current', { 'packages': ['line', 'corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      
    var chartDiv = document.getElementById('tabla1');
    
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Mes');
    data.addColumn('number', 'Ventas de videojuegos');
    data.addColumn('number', 'Ventas de figurines');
	data.addColumn('number', 'Ventas de snacks');
	data.addColumn('number', 'Ventas de Cartas');
	
    data.addRows([
      [new Date(2020, 3), 70, 50,89,153],
      [new Date(2020, 4), 43, 27,55,208],
      [new Date(2020, 5), 50, 20,78,120],
      [new Date(2020, 6), 64, 43,53,180],
      [new Date(2020, 7), 89, 70,143,355],

    ]);

    // Set chart options
          var options = {
        chart: {
          title: 'Tienda de juegos Alleux Reporte de Ventas por cantidadaño 2020-2021'
        },
        width: 800,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {axis: 'Ventas'},
	1: {axis: 'Ganancias'}
	},
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Ventas: {label: 'Cantidad de ventas'},
		Ganancias: {label: 'Ganancias en multiplos de 100$ pesos'}
          }
        }
      };
      
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Line(document.getElementById('tabla1'));
    chart.draw(data, options);
}
