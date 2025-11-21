let queryString = location.search;
let query = new URLSearchParams(queryString);
let category = query.get("category");
let product = document.querySelector(".categorias");

let URL = `https://dummyjson.com/products/category/${category}`;

fetch(URL)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);

        let listaProductos = data.products;

        for (let i = 0; i < listaProductos.length; i++) {
            let producto = listaProductos[i];

            product.innerHTML += `
                <article class="articulo_categoria">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>$${producto.price}</p>
                    <p>${producto.description}</p>
                    <a href="./product.html?detalles=${producto.title}">Ver Detalles</a>
                </article>
            `;
        }
    })
    .catch(function (error) {
        console.log(error);
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
