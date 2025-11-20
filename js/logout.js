let logout = document.querySelector('#logout');

if (logout){
    
    logout.addEventListener('click', function(e){
        e.preventDefault();


        localStorage.removeItem('elEmailDelUsuario');
        /// ALGUNO SABE COMO RECARCAR LA PAGINA PARA QUE SE ACUALICE?

    })
}