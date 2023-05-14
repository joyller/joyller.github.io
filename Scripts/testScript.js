function ajax(){
    const http = new XMLHttpRequest();
    const url = 'https://joyller.github.io';

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }

    http.open("GET", url);
    http.send();
}

document.getElementById("llevar").addEventListener("click", function(){
    ajax();
});