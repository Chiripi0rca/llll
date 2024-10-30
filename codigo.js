
//funcion para redigir a la pagina de inicio de sesion
function RedigirInicioDeSesion(){
  window.location.href ="Login.html";
}
//funcion para cuando le piquen al titulo ri0nflix los regrese a la pagian inicial
function RedigirPaginaInicial(){
window.locaation.href ="index.html";
}

// Función para recordar el email en la página inicial
function guardarEmail() {
    const email = document.getElementById("email-input").value; // Captura el email del input
    if (email.trim() === "") {
        alert("Por favor, ingresa tu email antes de continuar."); // Mensaje de alerta si está vacío
    } else {
        localStorage.setItem("userEmail", email); // Guarda el email en Local Storage
        window.location.href = "signup.html"; // Redirige a la página de registro
    }
}

// Al cargar la página de registro, recupera el email desde Local Storage
document.addEventListener("DOMContentLoaded", () => {
    const userEmail = localStorage.getItem("userEmail"); // Obtiene el email guardado
    const emailInput = document.getElementById("email-input"); // Captura el input por ID
    if (userEmail && emailInput) {
        emailInput.value = userEmail; // Muestra el email en el campo de entrada
    }
});

// Función para registrar un usuario
function registrarUsuario() {
  const username = document.getElementById("user-sign").value;
  const password = document.getElementById("password-sign").value;

  if (username && password) {
        // Guarda el usuario y la contraseña por separado
        localStorage.setItem("user-sign", username);
        localStorage.setItem("password-sign", password);

        alert("Cuenta creada con éxito");
        
        // Redirige a la página de inicio de sesión
        window.location.href = "Login.html";
  } else {
      alert("Por favor, completa todos los campos");
  }
}

// Función para iniciar sesión
function iniciarSesion() {
  const username = document.getElementById("user-login").value;
  const password = document.getElementById("password-login").value;
  const errorMsg = document.getElementById("error-msg");

  const storedPassword = localStorage.getItem(username); // Recupera la contraseña

  if (storedPassword === password) {
      errorMsg.textContent = ""; // Limpia el mensaje de error
      alert("inicio de sesion existoso. redirigiendo a la pagina mas vergas");
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

