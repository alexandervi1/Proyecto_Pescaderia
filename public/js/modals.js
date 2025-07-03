// JavaScript para manejar los modales
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modales cargados correctamente');
    
    // Elementos de los botones
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');
    
    // Elementos de los modales
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    
    // Elementos de cierre
    const closeLoginModal = document.getElementById('close-login-modal');
    const closeRegisterModal = document.getElementById('close-register-modal');
    
    // Verificar que los elementos existen
    if (!loginButton || !registerButton || !loginModal || !registerModal) {
        console.error('Error: No se encontraron todos los elementos necesarios para los modales');
        return;
    }
    
    // Funciones para abrir los modales
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Abriendo modal de login');
        loginModal.style.display = 'block';
    });

    registerButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Abriendo modal de registro');
        registerModal.style.display = 'block';
    });

    // Funciones para cerrar los modales
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', function() {
            console.log('Cerrando modal de login');
            loginModal.style.display = 'none';
        });
    }

    if (closeRegisterModal) {
        closeRegisterModal.addEventListener('click', function() {
            console.log('Cerrando modal de registro');
            registerModal.style.display = 'none';
        });
    }

    // Cambiar del modal de login al de registro
    const showRegisterLink = document.getElementById('show-register');
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Cambiando de login a registro');
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
    }

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            console.log('Cerrando modal de login por clic fuera');
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            console.log('Cerrando modal de registro por clic fuera');
            registerModal.style.display = 'none';
        }
    });

    // Manejar el envío del formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            console.log('Datos de login:', { email, password });
            
            if (!email || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }

            // Aquí puedes agregar la lógica para enviar los datos al servidor
            alert('Funcionalidad de login en desarrollo');
            
            // Opcional: cerrar el modal después del envío
            // loginModal.style.display = 'none';
        });
    }

    // Manejar el envío del formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('register-nombre').value;
            const apellido = document.getElementById('register-apellido').value;
            const cedula = document.getElementById('register-cedula').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            console.log('Datos de registro:', { nombre, apellido, cedula, email, password });

            // Validaciones
            if (!nombre || !apellido || !cedula || !email || !password || !confirmPassword) {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            // Aquí puedes agregar la lógica para enviar los datos al servidor
            alert('Funcionalidad de registro en desarrollo');
            
            // Opcional: cerrar el modal después del envío
            // registerModal.style.display = 'none';
        });
    }
});
