(function(){
    var button = document.querySelector("button");
    var contdiv = document.getElementById("pagweb");

    button.addEventListener("click", cargarpagweb,true);

    function cargarpagweb(e) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.status == 200){
                contdiv.innerHTML = xhr.responseText;
            }
        }
        xhr.open("get", "index.html", true);
        xhr.send();
    }
})();