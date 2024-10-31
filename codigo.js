
//funcion para redigir a la pagina de inicio de sesion
function RedigirInicioDeSesion(){
  window.location.href ="Login.html";
}
//funcion para cuando le piquen al titulo ri0nflix los regrese a la pagian inicial
function RedigirPaginaInicial(){
window.locaation.href ="index.html";
}

// Función para guardar usuario y redirigir
function guardarUsuario() {
    const user = document.getElementById("email-input").value; // Captura el email del input
    console.log("Usuario ingresado:", user); // Muestra el usuario ingresado en la consola
    if (user.trim() === "") {
        alert("Por favor, ingresa tu usuario antes de continuar."); // Mensaje de alerta si está vacío
    } else {
        localStorage.setItem("user", user); // Guarda el usuario en Local Storage
        console.log("Usuario guardado en Local Storage"); // Mensaje de confirmación
        window.location.href = "signup.html"; // Redirige a la página de registro
    }
}


// Al cargar la página de registro, recupera el nombre de usuario desde Local Storage
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    const signupUserInput = document.getElementById("signup-user");
    if (user && signupUserInput) {
        signupUserInput.value = user; // Muestra el usuario en el campo de entrada
    }
});
// Función para registrar un usuario
function registrarUsuario() {
    const username = document.getElementById("signup-user").value;
    const password = document.getElementById("signup-password").value;

    if (username && password) {
        // Guarda el usuario y la contraseña por separado
        localStorage.setItem(username, password); // Asegúrate de usar el username como clave
        alert("Cuenta creada con éxito");
        window.location.href = "Login.html";
    } else {
        alert("Por favor, completa todos los campos");
    }
}

// Función para iniciar sesión
function iniciarSesion() {
    const username = document.getElementById("login-user").value;
    const password = document.getElementById("login-password").value;
    const errorMsg = document.getElementById("error-msg");

    const storedPassword = localStorage.getItem(username); // Recupera la contraseña

    if (storedPassword && storedPassword === password) {
        errorMsg.textContent = ""; // Limpia el mensaje de error
        alert("Inicio de sesión exitoso. Redirigiendo a la página mas perrona.");
        window.location.href = "Principal.html";
    } else {
        errorMsg.textContent = "Nombre de usuario o contraseña incorrectos";
    }
}
//funcion para cuando le piquen al boton de suscribirse los reegrese a la pagina princiapl donde dice comenzar
   document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#email") {
        const emailInput = document.getElementById("email-input");
        if (emailInput) {
            emailInput.scrollIntoView({ behavior: "smooth", block: "center" });
            emailInput.focus(); // Coloca el cursor en el campo de correo
        }
    }
});


    //bloque para las preguntas frecuentes
    document.querySelectorAll('.faq-question').forEach((button) => {
      button.addEventListener('click', () => {
          const answer = button.nextElementSibling;
 
          // Toggle answer visibility
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              // Close any other open answers
              document.querySelectorAll('.faq-answer').forEach((ans) => ans.style.display = 'none');
              answer.style.display = 'block';
          }
 
          // Toggle active state
          document.querySelectorAll('.faq-question').forEach((btn) => btn.classList.remove('active'));
          button.classList.toggle('active');
      });
  });

