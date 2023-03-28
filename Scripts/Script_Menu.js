/*var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

console.log("hola");
console.log(almmenu);

function crearMenu(){
  
}*/

var data = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["text"];
        var parentid = item["parentid"];
        var id = item["id"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, item: item };
            source[id] = items[id];
        }
    }
    return source;
}
var source = builddata();

//---- 

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

//---
  
$("#jqxMenu").jqxMenu({ width: '600', height: '30px'});
