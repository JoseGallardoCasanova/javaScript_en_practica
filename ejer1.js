let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    limpiarErrores();
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;
    let resultado = validar(nombre, asunto, mensaje);
    if (resultado == true) {
        exito();
    };
});


function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje Enviado con Todo el Exito del Mundo! ";
};


function validar(nombre, asunto, mensaje) {
    let validado = true;
    let valNombre = /[a-zA-Z]/gim;
    if (valNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El Nombre es Requerido!"
        validado = false;
    }

    let valAsunto = /[a-zA-Z]/gim;
    if (valAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El Asunto es Requerido!"
        validado = false;
    };
    let valMensaje = /[a-zA-Z]/gim;
    if (valMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El Mensaje es Requerido!"
        validado = false;
    };
    return validado;
};