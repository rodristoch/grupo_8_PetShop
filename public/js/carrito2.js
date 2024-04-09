
function vaciarCarrito() {

    let numeroCarrito = document.querySelector(".numerito-carrito")
    let contenedor = document.querySelector(".contenedor-producto")
    let numeroCarritoMobile = document.querySelector(".numerito-carrito-mobile")

   /*  alert("Estas seguro que queres vaciar el carrito") */
    localStorage.removeItem("carrito")
    numeroCarrito.innerText = productosEnElCarrito()
    numeroCarritoMobile.innerText = productosEnElCarrito()
    contenedor.innerHTML = "No hay productos en el carrito"

}

function calcularTotal(products) {
    return products.reduce(
        (acum, producto) => {acum + producto.precio}, 0)
}

let contenedor = document.querySelector(".contenedor-producto")
let contenedorSubtotal = document.querySelector(".subtotal")
let contenedorTotal = document.querySelector(".total")


let products = []  /* aca pusheo los prod agregados al carrito */

if(localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito)
    console.log(carrito)
    carrito.forEach(index => {
        fetch(`/api/productos/${index.id}`)
        .then(res => res.json())
        .then(productos => {  

            contenedor.innerHTML +=  

                "<div class=" + "contenedor1" + ">" +
                    "<div class=" + "contenedor-img" + ">" +
                        "<img src=" + `http://localhost:3100/img/productos/${productos.data.imagen}` + " class=" + "imagen" + ">" +
                    "</div>" +
                    "<div class=" + "texto" + ">" +
                        "<div class=" + "titulo-cantidad" + ">" +
                            "<h2 class=" + "titulo-nombre-producto" + ">" + productos.data.nombre + 
                        "</div>" +
                        "<div class=" + "precio-normal2" + ">" +
                        "<p class=" + "precio-normal2" + ">" + productos.data.descripcion + "</p>" +
                        "</div>" +
                        "<div class=" + "div-botones" + ">" +
                            "<button" + " class=" + "boton-eliminar" + " onclick=" + "removeItem()" +">" + "Eliminar" + "</button>" + 
                            "<button class=" + "botton-comprar" + ">" + "Comprar ahora" + "</button>" +
                        "</div>" +
                        (productos.data.descuentos[0].id == 2 ?
                        "<div class=" + "arriba" + ">" +
                            "<p class=" + "precio-normal2" + ">" + "Precio regular:" + "</p>" +
                            "<p class=" + "precio-tachado-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                        "<div class=" + "abajo" + ">" +
                            "<p class=" + "precio-oferta" + ">" + "Precio en oferta!!" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + Number((productos.data.precio*0.8).toFixed(2)) + "</p>" +
                            "<p class=" + "descuento-precio" + ">" + "20% OFF" + "</p>" +
                        "</div>" :
                        "<div class=" + "precio-regular" + ">" +
                            "<p class=" + "precio-normal" + ">" + "Precio:" + "</p>" +
                            "<p class=" + "precio-detalle" + ">" + "$" + productos.data.precio + "</p>" +
                        "</div>" +
                    "</div>") +
                "</div>";

                products.push(
                    {nombre: productos.data.nombre,
                    descripcion: productos.data.descripcion,
                    color: productos.data.color,
                    precio: Number(productos.data.precio),
                    imagen: productos.data.imagen,
                    tipo_mascota_id: productos.data.tipo_mascota_id,
                    marca_id: productos.data.marca_id,
                    descuentos: productos.data.descuentos[0]
                })
        })
        .then(() => {

            console.log(products)
            document.querySelector(".subtotal").innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)
            /* products[0].precio */
            document.querySelector(".total").innerText = "$ " + products.reduce((acum, product) => {return acum += product.precio}, 0)

            

        })
    });
} else {

    contenedor.innerHTML = "No hay productos en el carrito"
    contenedorSubtotal.innerText = "$ 0"
    contenedorTotal.innerText = "$ 0"
}







