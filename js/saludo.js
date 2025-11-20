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
  alert("No se guardaron bien los datos");



}








