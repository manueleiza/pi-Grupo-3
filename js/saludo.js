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








