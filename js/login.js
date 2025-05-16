document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();//Evitar que el formulario se envíe automáticamente al servidor.

    const usuario = document.getElementById('user').value;
    const pass = document.getElementById('password').value;

    //Simulación básica de Login
    if(user === 'admin' && password === '12345'){
        window.location.href = '../private/dashboard.html';
    }
    else{
        document.getElementById('mensajeLogin').textContent = "Usuario o contraseña incorrectos"
    }
});