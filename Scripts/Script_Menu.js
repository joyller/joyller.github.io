$(document).ready(function () {

    // Top (header) list item.
    let li = $('<li/>').appendTo('#menu1');

    $('<a />')
        .text('Menu del restaurant')
        .attr('href', '#')
        .appendTo(li);     // add the header (<ul>).

    // Create sub ul.
    let sub_ul = $('<ul/>').appendTo(li);

    let arrData = [];
    $.getJSON('https://joyller.github.io/jsonmenu/birds.json', function (data) {
        let typeOfBirds = [];

        $.each(data, function (index, value) {
            typeOfBirds.push(value.Type);
            arrData = data;
        });

        // Remove duplicates from the array, because we want unique types.
        typeOfBirds = Array.from(new Set(typeOfBirds));

        $.each(typeOfBirds, function (index, value) {
            // Create and add sub list items.
            let sub_li = $('<li/>').appendTo(sub_ul);
            $('<a />')
                .text(value + ' + ')
                .attr('href', '#')
                .appendTo(sub_li);

            $.each(arrData, function (i, v) {
                if (v.Type === value) {
                    // Create sub ul.
                    let sub_sub_ul = $('<ul/>').appendTo(sub_li);
                    let sub_sub_li = $('<li/>').appendTo(sub_sub_ul);
                    $('<a />')
                        .text(v.Name)
                        .attr('href', '#')
                        .appendTo(sub_sub_li);
                }
            });
        });


    });
});
