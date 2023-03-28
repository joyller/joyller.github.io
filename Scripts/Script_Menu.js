/*var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

console.log("hola");
console.log(almmenu);

function crearMenu(){
  
}*/

$(function () {

    var data = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());
    var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
        $("<a>", {
            href: '#' + itemData.link,
            html: itemData.name
        }));
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    
    var $menu = $("#menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();
});
