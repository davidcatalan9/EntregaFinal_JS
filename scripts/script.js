
let mensajesError1 = [];

let usuarios = usuariosMock.map((d) => {
    return new Usuario(d.nombre, d.apellido, d.email, d.canReloj, d.totalReloj, d.usuario, d.clave);
});




const validarDatos = (nombre, apellido, canReloj, email, usuario, clave) => {
    let mensajesError = [];
    if (nombre.length == 0) { mensajesError.push(" nombre Incompleto") }
    if (apellido.length == 0) { mensajesError.push(" apellido Incompleto") }
    if (canReloj <= 0) { mensajesError.push(" Cantidad relojes Incompleto") }
    if (usuario.length == 0) { mensajesError.push(" usuario Incompleto") }
    if (clave.length == 0) { mensajesError.push(" clave Incompleto") }

    if (email.length == 0) {
        mensajesError.push(" email incompleto")
    } else if (!email.includes("@") && !email.includes(".")) { mensajesError.push("email invalido") }
    mensajesError1 = mensajesError;
    return mensajesError;
};


const grabaUsuario = (nombre = "", apellido = "", canReloj = 0, totalReloj = 0, email = "", usuario = "", clave = ""
) => {
    const erroresDatos = validarDatos(nombre, apellido, canReloj, email, usuario, clave);
    if (erroresDatos.length !== 0) {
        console.table(erroresDatos);
        return false;
    }

    if (!isExisteUsuario(usuarios, usuario, email)) {
        let unUsuario = new
            Usuario(nombre, apellido, canReloj, totalReloj, email, usuario, clave);
        usuariosMock.push(unUsuario);
        console.table(usuariosMock);
        return true;
    } else {
        alert("El usuario: " + usuario + " ya existe");
        return false;
    }

};



const isExisteUsuario = (usuarios = [], identif = "", identif2 = "") => {
    if (!usuarios.some((unUsuario) => unUsuario.usuario === identif) &&
        !usuarios.some((unUsuario) => unUsuario.email === identif2)) {
        return false;
    }
    return true;
};




function listausuario(usuarios) {
    let TextoShow = "";
    console.log(usuarios)
    usuarios.forEach((element) => {
        TextoShow += ("\n" + "Nombre: " + element.nombre + " " + element.apellido + "Usuario: " + element.usuario + "\n")
    });

    return TextoShow;
};







let salir = false;/* 

let nombre = "";
let apellido = "";
let canReloj = 0;
let totalReloj = 0;
let email = "";
let usuario = "";
let clave = "";


while (!salir) {


    nombre = prompt("Ingrese su Nombre: ").trim();
    apellido = prompt("Ingrese su Apellido").trim();
    canReloj = parseInt(prompt("Ingrese Cantidad de Relojes:"));
    totalReloj = canReloj * 1000;
    email = prompt("Ingrese su email:").trim();
    usuario = prompt("Ingrese su nombre de usuario:").trim();
    clave = prompt("Ingrese su clave:");

    if (grabaUsuario(nombre, apellido, canReloj, totalReloj, email, usuario, clave)) {
        alert("Bienvenido: " + listausuario(usuarios))
    }
    else {

        alert("Estos Campos tienen errores: \n \n" + mensajesError1.join("\n"))
    }


    let terminar = prompt("Desea Terminar (s/n): ");

    if (terminar.trim().toUpperCase() === "S") {
        salir = true;
    } else {
        nombre = "";
        apellido = "";

    }

};
 */







