const miFormulario = document.getElementById('registerForm');
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = document.getElementById('nombreUsuario').value.trim().toLowerCase();
    let password = document.getElementById('contraseniaUsuario').value.trim();
    let repeatPassword = document.getElementById('repetirContrasenia').value.trim();

    if (registrarUsuario(userName, password, repeatPassword)) {
        miFormulario.reset();
        showSuccessfulMessage(successfulMessage, message = 'Usuario registrado correctamente.');
        setTimeout(() => {
            window.location.href = './login.html';
        }, 1200);
    }
});


const USERNAME_MIN_CHARACTERS = 6;
const PASSWORD_MIN_CHARACTERS = 4;

const validarFormulario = (userName = '', password = '', repeatPassword = '') => {
    if (userName.length === 0) {
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }
    if (password.length === 0) {
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }
    if (repeatPassword.length === 0) {
        showErrorMessages(errorMessage, message = 'Debes completar todos los campos.');
        return false;
    }

    if (userName.length < USERNAME_MIN_CHARACTERS) {
        showErrorMessages(errorMessage, message = `Debes ingresar al menos ${USERNAME_MIN_CHARACTERS} caracteres en el username.`);
        return false;
    }
    if (password.length < PASSWORD_MIN_CHARACTERS) {
        showErrorMessages(errorMessage, message = `Debes ingresar al menos ${PASSWORD_MIN_CHARACTERS} caracteres en la contraseña.`);
        return false;
    }

    if (password !== repeatPassword) {
        showErrorMessages(errorMessage, message = 'Las contraseñas no coinciden.');
        return false;
    }

    return true;
}

const registrarUsuario = (userName, password, repeatPassword) => {
    const tieneErrores = validarFormulario(userName, password, repeatPassword);

    if (!tieneErrores) {
        return false;
    }

    if (isUserExist(usuarios, userName)) {
        showErrorMessages(errorMessage, message = 'El nombre de usuario ingresado ya existe.');
        return false;
    }

    let unUsuario = new User(userName, password);
    usuarios.push(unUsuario);
    refreshStorageList(usuarios);
    return true;
}



