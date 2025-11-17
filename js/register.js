let resgistro = document.querySelector(".resgistro form");
let gmail = document.querySelector(".gmail");
let contra1 = document.querySelector(".contra1");
let contra2 = document.querySelector(".contra2");
let terminos = document.querySelector(".terminos");
let menIncompleto = "Este campo esta vacio"
let menlarge = "La contraseña debe tener al menos 6 caracteres"
let menIguales = "Las contraseñas no coinciden" 

resgistro.addEventListener("submit", function(event){
    event.preventDefault();
    if (gmail.value == ""){
        alert(menIncompleto);
        return;
    }
    if (contra1.value == ""){
        alert(menIncompleto);
        return;
    }
    if (contra1.value.length < 6){
        alert(menlarge);
        return;
    }
    if (contra1.value != contra2.value){
        alert(menIguales);
        return;
    }
    else{
        this.submit();
    }

})


