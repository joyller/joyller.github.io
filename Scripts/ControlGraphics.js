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
    data.addColumn('number', 'Ventas de figurines');
    data.addColumn('number', 'Ventas de videojuegos');
    
    for (var i = 0; i < 20; i++) {
      console.log(x);}
    
    data.addRows([
      [new Date(2020, 3), 700, 50],
      [new Date(2020, 4), 430, 70],
      [new Date(2020, 5), 250, 20],
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
    var chart = new google.charts.Line(document.getElementById('tabla1'));
    chart.draw(data, options);
}
