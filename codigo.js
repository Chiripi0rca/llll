
//funcion para redigir a la pagina de inicio de sesion
function RedigirInicioDeSesion(){
  window.location.href ="Login.html";
}
//funcion para cuando le piquen al titulo ri0nflix los regrese a la pagian inicial
function RedigirPaginaInicial(){
window.locaation.href ="index.html";
}

//funcion para recordar el usuario en la pagina inicial
function guardarEmail() {
  const email = document.getElementById("email-input").value;
  localStorage.setItem("userEmail", email); // Guarda el email en Local Storage
  if (email.trim() === "") {
    alert("Por favor, ingresa tu email antes de continuar.");
} else {
    localStorage.setItem("userEmail", email); // Guarda el email en Local Storage
    window.location.href = "signup.html"; // Redirige a la página de registro
}
}


// Al cargar la página de registro, recupera el nombre de usuario desde Local Storage
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  const userInput = document.getElementById("user");
  if (user && userInput) {
      userInput.value = user; // Muestra el nombre de usuario en el campo
  }
});

// Función para registrar un usuario
function registrarUsuario() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  if (username && password) {
        // Guarda el usuario y la contraseña por separado
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Cuenta creada con éxito");
        
        // Redirige a la página de inicio de sesión
        window.location.href = "Login.html";
  } else {
      alert("Por favor, completa todos los campos");
  }
}

// Función para iniciar sesión
function iniciarSesion() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
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

