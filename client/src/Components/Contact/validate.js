export function validate(input) {
    let error = {}
    let regEx_Email = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    if (!input.name) {
        error.name = "Por favor ingrese su nombre.";
    }
    else if (!/(?=^.{5,100}$)/i.test(input.name)) { //Min 5 max 100
        error.name = "El nombre debe contener como minimo 5 caracteres.";
        if (!/^[A-Z ]+$/i.test(input.name)) { // Y validamos que de esos 5 caracteres, no sean numeros, simbolos..
            error.name = 'No se aceptan números, símbolos o caracteres especiales.';
        }
    }
    else if (!/^[A-Z ]+$/i.test(input.name)) { //No acepta Simbolos
        error.name = 'No se aceptan números, símbolos o caracteres especiales.';
    }


    if (!input.email) {
        error.email = "Por favor ingrese su email.";
    }
    else if (!regEx_Email.test(input.email)) {
        error.email = "Email ingresado, no valido.";
    }

    if (!input.affair) {
        error.affair = "Por favor ingrese un asunto.";
    }
    else if (!/(?=^.{5,100}$)/i.test(input.affair)) { //Min 5 max 100
        error.affair = "Su asunto debe contener como minimo 5 caracteres.";
    }

    if (!input.message) {
        error.message = "Por favor ingrese un mensaje";
    }
    else if (!/(?=^.{15,255}$)/i.test(input.message)) { //Min 15 max 100
        error.message = "El mensaje es muy corto";
    }


    return error;
}