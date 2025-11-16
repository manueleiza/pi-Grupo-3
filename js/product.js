let quearySearch = new URLSearchParams(location.search);
let productoElegido = quearySearch.get("detalles");
let descripcionProducto = document.querySelector(".descripcion_producto");
let seccion_comentarios = document.querySelector(".seccion_comentarios");


console.log(productoElegido)



const urlProducto = 'https://dummyjson.com/products';

fetch(urlProducto)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (objeto) {
        console.log(objeto)

        let listadoProductos = objeto.products;
        let articulosProducto = '';
        let comentario = '';

        for (let i = 0; i < listadoProductos.length; i++) {

            let review = listadoProductos[i].reviews;

            // producto
            if (listadoProductos[i].title == productoElegido) {

                articulosProducto = `

                    <article class="article_producto">
                    <img id="imgProduct" src="${listadoProductos[i].images[0]}" alt="imagen de ${listadoProductos[i].title}">
                    </article>

                    <article class="article_producto">
                        <h3>${listadoProductos[i].title}</h3>
                        <div class = "divProducto"  >
                            <p class="precio"><span class="precio_anterior">$${listadoProductos[i].price + 2}</span class="precio"> $${listadoProductos[i].price} </p>
                        </div>

                        <div class = "divProducto">
                            <p class="resumen_producto">${listadoProductos[i].description}</p>
                        </div>

                        <div >
                            <p class="stock"> Stock: ${listadoProductos[i].stock} unidades</p>
                        </div>

                        <div class ="divTags">
                            <ul class="tags"> 

                            <li class="tagIndividual"></li>
                            <li class="tagIndividual"></li>
                            <li class="tagIndividual"></li>


                            </ul>                       
                            
                        </div>
                    </article>
                    `
                descripcionProducto.innerHTML = articulosProducto;

                let productoTags = listadoProductos[i].tags;
                console.log(productoTags)

                let todosLosTags = document.querySelector(".tags");
                let tagIndividual = document.querySelectorAll(".tagIndividual");

                console.log(tagIndividual)

            //tags 

               if (productoTags.length == 1){

                    todosLosTags.innerHTML = `<li class="tagIndividual">${productoTags[0]}</li>`

               }
                else if (productoTags.length == 2){

                    todosLosTags.innerHTML = `<li class="tagIndividual">${productoTags[0]}</li>
                                            <li class="tagIndividual">-${productoTags[1]}</li>`

               }
                else{

                    todosLosTags.innerHTML = `<li class="tagIndividual">${productoTags[0]}</li>
                                            <li class="tagIndividual">-${productoTags[1]}</li>
                                            <li class="tagIndividual">-${productoTags[2]}</li>`


               }






                for (let r = 0; r < review.length; r++) {
                    let rating = review[r].rating;
                    let comentarioReview = review[r].comment;
                    let fecha = review[r].date;
                    let nombre = review[r].reviewerName;

                    if (rating == 1) {
                        comentario += `
                            <article class="comentarios">
                                <h3 class="nobre_fecha">${nombre}</h3>
                                <h3 class="fecha">${fecha}</h3>
                                <h4 class="puntuacion">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">1/5
                                </h4>
                                <p>${comentarioReview}</p>
                            </article>
                        `
                    }
                    else if (rating == 2) {
                        comentario += `
                            <article class="comentarios">
                                <h3 class="nobre_fecha">${nombre}</h3>
                                <h3 class="fecha">${fecha}</h3>
                                <h4 class="puntuacion">
                                <img src="./img/estrella-amarilla.png" alt="estrella">
                                <img src="./img/estrella-amarilla.png" alt="estrella">
                                <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">2/5
                                </h4>
                                <p>${comentarioReview}</p>
                            </article>
                        `
                    }
                    else if (rating == 3) {
                        comentario += `
                            <article class="comentarios">
                                <h3 class="nobre_fecha">${nombre}</h3>
                                <h3 class="fecha">${fecha}</h3>
                                <h4 class="puntuacion">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">3/5
                                </h4>
                                <p>${comentarioReview}</p>
                            </article>
                        `
                    }
                    else if (rating == 4) {
                        comentario += `
                            <article class="comentarios">
                                <h3 class="nobre_fecha">${nombre}</h3>
                                <h3 class="fecha">${fecha}</h3>
                                <h4 class="puntuacion">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-gris.png" alt="estrella">4/5
                                </h4>
                                <p>${comentarioReview}</p>
                            </article>
                        `
                    }
                    else {
                        comentario += `
                            <article class="comentarios">
                                <h3 class="nobre_fecha">${nombre}</h3>
                                <h3 class="fecha">${fecha}</h3>
                                <h4 class="puntuacion">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    <img src="./img/estrella-amarilla.png" alt="estrella">
                                    5/5
                                </h4>
                                <p>${comentarioReview}</p>
                            </article>
                        `
                    }


                }


                descripcionProducto.innerHTML += comentario;
            }










        }





    }) 
    .catch(function (error) {
        console.error('Error:', error);
    });


