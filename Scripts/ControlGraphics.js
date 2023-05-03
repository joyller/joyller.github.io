async function fetchData() {
    const url = 'https://joyller.github.io/datafile/Ventas.json';
    const response = await fetch(url);

    const datapoint = await response.json();

    console.log(datapoint);
    return datapoint;
};

fetchData().then(datapoint => {
    const ListProducto = datapoint.Reporte[0].tipoProducto.map(
        function (index) {
            return index.producto;
        })

    const ListMes = datapoint.Reporte[0].tipoProducto.map(
        function (index) {
            return index.Mes;
        })

    const ListVentas = datapoint.Reporte[0].tipoProducto.map(
        function (index) {
            return index.ventas;
        })

    const ListAnio = datapoint.Reporte[0].tipoProducto.map(
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
    data.addColumn('string', 'Producto');
    data.addColumn('number', 'Ventas');
    data.addRows([
      [new Date(2020, 3), 'Videojuego', 700],
      [new Date(2020, 3), 'Figurin',    50],
      [new Date(2020, 4), 'Videojuego', 430],
      [new Date(2020, 4), 'Figurin',    70],
      [new Date(2020, 5), 'Videojuego', 250],
      [new Date(2020, 5), 'Figurin',    2],
    ]);

    // Set chart options
          var options = {
        chart: {
          title: 'Ventas del año 2020-2021'
        },
        width: 900,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {axis: 'Ventas'}
        },
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Ventas: {label: 'Ventas (dolares)'}
          }
        }
      };
      
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Line(document.getElementById(chartDiv));
    chart.draw(data, options);
}
