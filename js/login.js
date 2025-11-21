let formulario = document.querySelector('#login_form');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.querySelector('#email');
    let contrasenia = document.querySelector('#contrasenia');

    if (email.value == "") {
        alert('El campo del email es obligatorio')
    } else if (contrasenia.value == "") {
        alert('El campo de la contraseña es obligatorio')
    } else if (contrasenia.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    } else {
        localStorage.setItem('elEmailDelUsuario', email.value)

        this.submit()
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


