let emailAlmacenado = localStorage.getItem('emailUser');

let lista = document.querySelector('.listaHeader');
let saludo = document.querySelector('.saludo');



if (emailAlmacenado){

    saludo.innerText = `Bienvenido: ${emailAlmacenado}`;
    
    lista.innerHTML =
     ` <li><a href="#">${emailAlmacenado}</a></li>
        <li>|</li>
        <li><a href="./login.html" id="logout">Logout</a></li>`;

        let logout = document.querySelector('#logout');
        logout.addEventListener('click', function(){
            localStorage.removeItem('emailUser');
        })

    }else{
 // alert("No se guardaron bien los datos");



}








