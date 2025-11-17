
let formulario = document.querySelector ('#login_formulario');

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    alert('Estamos viendo si funciona');

    let email = document.querySelector ('#email').value;
    let contrasenia = document.querySelector ('#contrasenia').value;

    if (email.value == ""){
        alert('El campo del email es obligatorio')
    } else {
        this.submit()
    }

     if (contrasenia.value == ""){
        alert('El campo de la contraseña es obligatorio')
    } else {
        this.submit()
    }

    if (contrasenia.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
       } else {
        this.submit()
    }


localStorage.setItem('userEmail', email)

let emailUsuario = localStorage.getItem('userEmail');
console.log(emailUsuario);



// ME FALTA AGREGAR Y QUE VUELVA A LA PAGINA DE INICIO SI ES QUE ES VALIDO. 

});