// @ts-ignore
const miFormulario = document.getElementById('loginForm');
// @ts-ignore
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // @ts-ignore
    let userName = document.getElementById('nombreUsuario').value;
    // @ts-ignore
    let password = document.getElementById('contrasenia').value;

    if (!validarFormulario(userName, password)) {
        return false;
    }

    // @ts-ignore
    const unUsuario = getUser(usuarios, userName);
    if (!unUsuario) {
        // @ts-ignore
        showErrorMessages(errorMessage, message = 'Datos incorrectos !!!');
        return false;
    }

    if (!unUsuario.isPassword(password)) {
        // @ts-ignore
        showErrorMessages(errorMessage, message = 'Informacion Incorrecta !!!');
        return false;
    }

    unUsuario.isLogged = true;
    // @ts-ignore
    registrarLogin(unUsuario);
    // @ts-ignore
    showSuccessfulMessage(successfulMessage, message = 'Inicio de sesion exitoso.');
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
});

// @ts-ignore
const validarFormulario = (userName, password) => {

    if (userName.length == 0) {
        // @ts-ignore
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }

    if (password.length == 0) {
        // @ts-ignore
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }

    return true;
}


