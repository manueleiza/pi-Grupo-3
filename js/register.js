let resgistro = document.querySelector(".resgistro form");
let gmail = document.querySelector(".gmail");
let contraUno = document.querySelector(".contra1");
let contraDos = document.querySelector(".contra2");
let aceptarTem = document.querySelector(".terminos");
let acepto = false;

let acept = "Se deben aceptar los terminos y condiciones.";
let incompleto = "Este campo esta vacio";
let large = "La contraseña debe tener al menos 6 caracteres";
let iguales = "Las contraseñas no coinciden";

aceptarTem.addEventListener("click", function () {
    if (acepto === false) {
        acepto = true;
    } else {
        acepto = false;
    }
});

resgistro.addEventListener("submit", function (event) {
    event.preventDefault();

    if (gmail.value == "") {
        alert(incompleto);
        return;
    }
    else if (contraUno.value == "") {
        alert(incompleto);
        return;
    }
    else if (contraUno.value.length < 6) {
        alert(large);
        return;
    }
    else if (contraUno.value != contraDos.value) {
        alert(iguales);
        return;
    }
    else if (acepto == false) {
        alert(acept);
        return;
    }
    else {
        this.submit();
    }
});


