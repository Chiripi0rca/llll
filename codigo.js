//funcion para redigir a la pagina de inicio de sesion
function RedigirInicioDeSesion(){
    window.location.href ="Login.html";
}
//Funcion para Iniciar sesion
  //declaramos variables
     const User = "ri0npl4y";
     const Password = "12345";
     function InicioDeSesion(){
         const username = document.getElementById("user").value;
         const passwordUser = document.getElementById("password").value;
         const errorMsg = document.getElementById('error-msg');
      if(username === User && passwordUser == Password){
        //si es igual se le rederige a la pagina principal
        errorMsg.textContent = "";//borramos mensaje de error
        alert("inicio de sesion existoso. redirigiendo a la pagina mas vergas");
        window.location.href = "Principal.html";
      }
      else {
        errorMsg.textContent = "Nombre de usuario o contraseña incorrectos.";
      }
}
