let formulario = document.querySelector('#login_form');
let error = document.querySelector(".alert")

let errorEmail = "El campo del email es obligatorio";
let errorContra = "El campo de la contraseña es obligatorio";
let large = "La contraseña debe tener al menos 6 caracteres";


formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector('#email');
    let contrasenia = document.querySelector('#contrasenia');


    error.style.display = "block";

    if (email.value == "") {
        error.innerText = errorEmail
    } else if (contrasenia.value == "") {
        error.innerText = errorContra
    } else if (contrasenia.value.length < 6) {
        error.innerText = large
    } else {
        localStorage.setItem('elEmailDelUsuario', email.value)

        this.submit()
    }
});



