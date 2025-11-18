
let formulario = document.querySelector('#login_form');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert('Estamos viendo si funciona');

    let email = document.querySelector('#email');
    let contrasenia = document.querySelector('#contrasenia');

    if (email.value == "") {
        alert('El campo del email es obligatorio')
    } else if (contrasenia.value == "") {
        alert('El campo de la contraseña es obligatorio')
    } else if (contrasenia.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    } else {
        localStorage.setItem('emailUser', email.value)
        let emailGuardado = localStorage.getItem('emailUser');
        console.log('Email:', emailGuardado);

        this.submit()
    }
});

