document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();//Evitar que el formulario se envíe automáticamente al servidor.

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    //Simulación básica de Login
    if(usuario === 'admin' && pass === '12345'){
        window.location.href = '../private/dashboard.html';
    }
    else{
        document.getElementById('mensajeLogin').textContent = "Usuario o contraseña incorrectos"
    }
});