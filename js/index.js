const urlProductos = 'https://dummyjson.com/products';
let masVendidos = document.querySelector(".mas_vendidos");
let cajaRecomendados = document.querySelector('.caja_recomendados');

let producto = ``;



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


fetch(urlProductos)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data)
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].category == "groceries") {
                producto = `
                <article class="articulo_producto">

                    <img src = "${productos[i].images[0]}"></img>
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p>$${productos[i].price}</p>
                    <a href="./product.html?detalles=${productos[i].title}">Ver Detalles</a>
                </article>


            `;

                masVendidos.innerHTML += producto;
            }
        }

        for (let i = 0; i < productos.length; i++) {

            let imagen = productos[i].images[0];

            if ((productos[i].category == 'beauty') || (productos[i].category == 'fragrances')){
                producto = `
                <article class="articulo_producto">

                    <img src = "${imagen}"></img>
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p>$${productos[i].price}</p>
                    <a href="./product.html?detalles=${productos[i].title}">Ver Detalles</a>
                </article>


            `;

                cajaRecomendados.innerHTML += producto;
            }
        }
    })  
    .catch(function (error) {
        console.error('Error:', error);
    });