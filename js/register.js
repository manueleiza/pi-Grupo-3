let resgistro = document.querySelector(".resgistro form");
let gmail = document.querySelector(".gmail");
let contra1 = document.querySelector(".contra1");
let contra2 = document.querySelector(".contra2");
let aceptarTem = document.querySelector(".terminos");
let acepto = false;

let Acept = "Se deben aceptar los terminos y condiciones.";
let Incompleto = "Este campo esta vacio";
let large = "La contraseña debe tener al menos 6 caracteres";
let Iguales = "Las contraseñas no coinciden";

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
        alert(Incompleto);
        return;
    }
    else if (contra1.value == "") {
        alert(Incompleto);
        return;
    }
    else if (contra1.value.length < 6) {
        alert(large);
        return;
    }
    else if (contra1.value != contra2.value) {
        alert(Iguales);
        return;
    }
    else if (acepto == false) {
        alert(Acept);
        return;
    }
    else {
        this.submit();
    }
});


fetch("https://dummyjson.com/products/categories")
  .then(function(respuesta){
     return respuesta.json(); 
    }
)
  .then(function(categorias){

     let lista = document.querySelector(".lista_nav");


     for(let i = 0; i < categorias.length; i++){
        lista.innerHTML += `
           <li>
             <a href="./category.html?category=${categorias[i].slug}">
               ${categorias[i].name}
             </a>
           </li>
        `;

     }

  }) .catch(function (error) {
        console.error('Error:', error);
    });



