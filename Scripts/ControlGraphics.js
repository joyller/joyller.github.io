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

google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Producto');
    data.addColumn('number', 'Ventas');
    data.addColumn('string', 'Mes');
    data.addRows([
      ['Videojuego', 700, "Marzo"],
      ['Figurin', 50, "Marzo"],
      ['Videojuego', 430, "Abril"],
      ['Figurin', 70, "Abril"],
      ['Videojuego', 250, "Mayo"],
      ['Figurin', 2, "Mayo"],
    ]);

    // Set chart options
    var options = {'title':'Ventas de mercancia de tienda de videojuegos',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('tabla1'));
    chart.draw(data, options);
}
