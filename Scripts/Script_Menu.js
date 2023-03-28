/*var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

console.log("hola");
console.log(almmenu);

function crearMenu(){
  
}*/

(function () {

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

var buildUL = function (parent, items) {
    $.each(items, function () {
        if (this.label) {
            // create LI element and append it to the parent element.
            var li = $("<li>" + this.label + "</li>");
            li.appendTo(parent);
            // if there are sub items, call the buildUL function.
            if (this.items && this.items.length > 0) {
                var ul = $("<ul></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }
        }
    });
}
var ul = $("<ul></ul>");
ul.appendTo("#jqxMenu");
buildUL(ul, source);

$("#jqxMenu").jqxMenu({ width: '600', height: '30px'});
