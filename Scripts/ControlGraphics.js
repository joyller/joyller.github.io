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

    fetchData();
    // Create the data table.
    var tablareal = new google.visualization.DataTable();
    tablareal.addColumn('string', 'Producto');
    tablareal.addColumn('number', 'ventas');
    
    for (var x = 0; x < 19; x++) {
        tablareal.addRows([datapoint.Reporte[0].tipoProducto.producto[x],datapoint.Reporte[0].tipoProducto.ventas[x]]);
    }

    var prueba = new google.visualization.DataTable();
    prueba.addColumn('string', 'Topping');
    prueba.addColumn('number', 'Slices');
    prueba.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);


    // Set chart options
    var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('tabla1'));
    chart.draw(data, options);
}