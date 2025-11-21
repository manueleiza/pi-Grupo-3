let  elEmailDelUsuario = localStorage.getItem('elEmailDelUsuario');

let lista = document.querySelector('.listaHeader');
let saludo = document.querySelector('.saludo');



if ( elEmailDelUsuario){

    saludo.innerText = `Bienvenido: ${elEmailDelUsuario}`;
    
    lista.innerHTML =
     ` <li><a href="./login.html" id="logout">Logout</a></li>`;

        let logout = document.querySelector('#logout');
        logout.addEventListener('click', function(){
            localStorage.removeItem('elEmailDelUsuario');
        })

    }else{
      saludo.innerText = '';
      lista.innerHTML = ` 
      <li><a href="./login.html"> Login </a></li>
      <li>|</li>
      <li><a href="./register.html">Registro</a></li>`;
}








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
             <a href="./category.html?category=${categorias[i]}">
               ${categorias[i].name}
             </a>
           </li>
        `;

     }

  }) .catch(function (error) {
        console.error('Error:', error);
    });
