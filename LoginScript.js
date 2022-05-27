function validar()
{
    var User = document.getElementById("User").value ;
    var Password = document.getElementById("Password").value ;

    if(User=="admin" && Password=="admin")
    {
        alert("Iniciando Sesion");
        SitioPrincipal();
        
        return false;
    }
    
    else

    {
        alert("Usuario o Contraseña incorrecta.");
    }
}

function SitioPrincipal()
{   
    window.location.href = "Menu.html"; 
}