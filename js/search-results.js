let quearySearch = new URLSearchParams(location.search);
let producto_buscado = quearySearch.get("buscador")
let mas_vendidos = document.querySelector(".contenedor-busqueda");
let subtitulo = document.querySelector(".subtitulo_main h2");

fetch(`https://dummyjson.com/products/search?q=${producto_buscado}`)
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (listaProductos) {
        if(producto_buscado.length >=3){
            let productos = listaProductos.products;
            mas_vendidos.innerHTML = ``

            let nuevo_subtitulo = `${producto_buscado}`;
            subtitulo.innerText += " " + `${nuevo_subtitulo}`;


            if (productos.length > 0) {



                for (let i = 0; i < productos.length; i++) {

                    let producto = `
                        <article class="articulo_producto">
                            <img src="${productos[i].images[0]}"></img>
                            <h3>${productos[i].title}</h3>
                            <p>${productos[i].description}</p>
                            <p>$${productos[i].price}</p>
                            <a href="./product.html?detalles=${productos[i].title}">Ver Detalles</a>
                        </article>`;


                    mas_vendidos.innerHTML += producto;
                }

        } else {
            subtitulo.style.display = 'none'
            mas_vendidos.innerHTML = `<h1>No hay resultados para el término: ${producto_buscado}</h1>`
        }
        }
        else{
            mas_vendidos.style.display ="none";
            alert("minimo 3 caracteres")
        }
        
    });

