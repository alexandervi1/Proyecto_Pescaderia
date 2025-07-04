document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos la referencia a tu botón "Iniciar Sesión"
    let btnLogin = document.getElementById("open-login-modal");

    // Obtenemos la referencia a tu modal de login
    let loginModal = document.getElementById("login-modal");

    // Verificamos que ambos elementos existan antes de intentar usarlos
    if (btnLogin && loginModal) {
        // Añadimos un "escuchador de eventos" al botón
        // Cuando se haga clic en 'btnLogin', la función anónima se ejecutará
        btnLogin.addEventListener("click", function() {
            // Hacemos el modal visible cambiando sus estilos CSS
            loginModal.style.opacity = "1";        // Lo hace completamente opaco
            loginModal.style.visibility = "visible"; // Lo hace visible
        });
    } else {
        // Si por alguna razón no se encuentran los elementos, mostramos un error en la consola
        console.error("Error: Asegúrate de que el botón con ID 'open-login-modal' y el modal con ID 'login-modal' existan en tu HTML.");
    }
});