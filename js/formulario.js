const contacto = document.getElementById('contacto');
const inputs = document.querySelectorAll('#contacto input');

const expresiones = { // Expresiones RegEx para validar
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, también con acentos y espacios
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // formato de email
    telefono: /^\d{7,14}$/ // 7 a 14 números
}

const campos = { // Objeto con estados de los campos del formulario
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: true
}

// Funciones para validar el contenido de los inputs

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {  // Verificar que cumpla la expresión RegEx
        document.querySelector(`#div_${campo} .error`).classList.remove('error-activo');
        campos[campo] = true;
    } else {
        document.querySelector(`#div_${campo} .error`).classList.add('error-activo');
        campos[campo] = false;
    }
}

const validacionTexto = (input, campo) => {
    if (input.value != "") {  // Verificar que no se encuentre vacío el contenido
        campos[campo] = true;
    } else {
        campos[campo] = false;
    }
}

const validarFormulario = (evento) => {
    switch (evento.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, evento.target, 'nombre');
            break;
        case "email":
            validarCampo(expresiones.email, evento.target, 'email');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, evento.target, 'telefono');
            break;
        case "asunto":
            validacionTexto(evento.target, 'asunto');
            break;
    }
}




inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); // Valida al presionar una tecla
    input.addEventListener('blur', validarFormulario);  // Valida al salir del elemento
});

contacto.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Previene que se actualice la URL al enviar el formulario

    // Mensajes finales de éxito o error en el formulario verificando todos los campos
    if (campos.nombre && campos.email && campos.telefono && campos.asunto && campos.mensaje) {
        contacto.reset();
        document.getElementById('contacto_error').classList.remove('contacto_error-activo');
        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
        }, 5000);
    } else {
        document.getElementById('contacto_error').classList.add('contacto_error-activo');
        setTimeout(() => {
            document.getElementById('contacto_error').classList.remove('contacto_error-activo');
        }, 5000);
    }
});
