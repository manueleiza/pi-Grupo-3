const urlProductos = 'https://dummyjson.com/products';
let masVendidos = document.querySelector(".mas_vendidos");
let cajaRecomendados = document.querySelector('.caja_recomendados');

let producto = ``;


fetch(urlProductos)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data)
        let info = data.products;

        for (let i = 0; i < info.length; i++) {
            if (info[i].category == "groceries") {
                producto = `
                <article class="articulo_producto">

                    <img src = '${info[i].images}'></img>
                    <h3>${info[i].title}</h3>
                    <p>${info[i].description}</p>
                    <p>$${info[i].price}</p>
                    <a href="./product.html">Ver Detalles</a>
                </article>


            `;

                masVendidos.innerHTML += producto;
            }
        }

        for (let i = 0; i < info.length; i++) {

            if ((info[i].category == 'beauty') || (info[i].category == 'fragrances')){
                producto = `
                <article class="articulo_producto">

                    <img src = '${info[i].images}'></img>
                    <h3>${info[i].title}</h3>
                    <p>${info[i].description}</p>
                    <p>$${info[i].price}</p>
                    <a href="./product.html">Ver Detalles</a>
                </article>


            `;

            console.log(producto);

            cajaRecomendados.innerHTML += producto;
            }
        }
    })  
    .catch(function (error) {
        console.error('Error:', error);
    });





