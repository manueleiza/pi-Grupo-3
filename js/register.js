let resgistro = document.querySelector(".resgistro form");
let gmail = document.querySelector(".gmail");
let contraUno = document.querySelector(".contra1");
let contraDos = document.querySelector(".contra2");
let aceptarTem = document.querySelector(".terminos");
let acepto = false;
let error = document.querySelector(".alert")



let acept = "Se deben aceptar los terminos y condiciones.";
let incompletoEmail = "El campo Email esta vacio";
let incompletoContra = "El campo Contraseña esta vacio";
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

    error.style.display = "block";

    if (gmail.value == "") {
        error.innerText = incompletoEmail
        return;
    }
    else if (contraUno.value == "") {
        error.innerText = incompletoContra
        return;
    }
    else if (contraUno.value.length < 6) {
        error.innerText = large
;
        return;
    }
    else if (contraUno.value != contraDos.value) {
        error.innerText = iguales
        return;
    }
    else if (acepto == false) {
        error.innerText = acept;
        return;
    }
    else {
        this.submit();
    }
});


