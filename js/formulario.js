const contacto = document.getElementById('contacto');
const inputs = document.querySelectorAll('#contacto input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, también con acentos y espacios
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 números
}

const campos = {
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: true
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

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#div_${campo} .error`).classList.remove('error-activo');
        campos[campo] = true;
    } else {
        document.querySelector(`#div_${campo} .error`).classList.add('error-activo');
        campos[campo] = false;
    }
}

const validacionTexto = (input, campo) => {
    if (input.value != "") {
        campos[campo] = true;
    } else {
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

contacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

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
