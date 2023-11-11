const miFormulario = document.getElementById('loginForm');
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = document.getElementById('nombreUsuario').value;
    let password = document.getElementById('contrasenia').value;

    if (!validarFormulario(userName, password)) {
        return false;
    }

    const unUsuario = getUser(usuarios, userName);
    if (!unUsuario) {
        showErrorMessages(errorMessage, message = 'Datos incorrectos !!!');
        return false;
    }

    if (!unUsuario.isPassword(password)) {
        showErrorMessages(errorMessage, message = 'Informacion Incorrecta !!!');
        return false;
    }

    unUsuario.isLogged = true;
    registrarLogin(unUsuario);
    showSuccessfulMessage(successfulMessage, message = 'Inicio de sesion exitoso.');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
});

const validarFormulario = (userName, password) => {

    if (userName.length == 0) {
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }

    if (password.length == 0) {
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }

    return true;
}


