function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
}


window.addEventListener("load", () => {

    let boton = document.querySelectorAll(".boton-comprar")
    let boton2 = document.querySelectorAll(".boton_agregar") /* el boton en detalle.ejs */
    let boton3 = document.querySelectorAll(".boton_comprar") /* el boton en detalle.ejs */
    let numeroCarrito = document.querySelector(".numerito-carrito")
    let numeroCarritoMobile = document.querySelector(".numerito-carrito-mobile")
    

    numeroCarrito.innerText = productosEnElCarrito()
    numeroCarritoMobile.innerText = productosEnElCarrito()

    boton.forEach((bot) => {
        bot.addEventListener("click", (e) => {

            /* me muestra en la consola del nav el id del producto al cual aprete el boton de comprar */
            /* console.log(e.target.dataset.id) */

            if(localStorage.carrito) {  /* si hay carrito en localStorge */

                let carrito = JSON.parse(localStorage.carrito)
                /* console.log(carrito) */

                /* con findIndex devuelve el indice del array del carrito donde 0 si el prod esta en el carrito y -1 si no está */
                let index = carrito.findIndex((prod) => {return prod.id == e.target.dataset.id})
                /* console.log(index) */

                /* si mi producto esta en el carrito le sumo 1 */
                /* sino, lo agrego con push */
                if(index == 0) { /* si el indice es distinto a -1 (quiere decir q el prod está en el carrito) */
                    carrito[index].cantidad++  /* carrito en el indice 0 le suma 1 a la cantidad (al prod q está en el carrito) */
                } else {
                    carrito.push({id: e.target.dataset.id, cantidad: 1}) /* y si el prod no está en el carrito, le agrego al carrito el prod con cantidad 1 */
                }

                localStorage.setItem("carrito", JSON.stringify(carrito))  /* actualizo el carrito en localStorage */
                

            } else {   /* si NO hay carrito en localStorge */

                localStorage.setItem("carrito", JSON.stringify([{id: e.target.dataset.id, cantidad: 1}]))
            }

            alert("Has agregado el producto al carrito")

            numeroCarrito.innerText = productosEnElCarrito()
            numeroCarritoMobile.innerText = productosEnElCarrito()

        })
    })

    boton2.forEach((bot) => {
        bot.addEventListener("click", (e) => {

            /* me muestra en la consola del nav el id del producto al cual aprete el boton de comprar */
            /* console.log(e.target.dataset.id) */

            if(localStorage.carrito) {  /* si hay carrito en localStorge */

                let carrito = JSON.parse(localStorage.carrito)
                /* console.log(carrito) */

                /* con findIndex devuelve el indice del array del carrito donde 0 si el prod esta en el carrito y -1 si no está */
                let index = carrito.findIndex((prod) => {return prod.id == e.target.dataset.id})
                /* console.log(index) */

                /* si mi producto esta en el carrito le sumo 1 */
                /* sino, lo agrego con push */
                if(index == 0) { /* si el indice es distinto a -1 (quiere decir q el prod está en el carrito) */
                    carrito[index].cantidad++  /* carrito en el indice 0 le suma 1 a la cantidad (al prod q está en el carrito) */
                } else {
                    carrito.push({id: e.target.dataset.id, cantidad: 1}) /* y si el prod no está en el carrito, le agrego al carrito el prod con cantidad 1 */
                }

                localStorage.setItem("carrito", JSON.stringify(carrito))  /* actualizo el carrito en localStorage */
                

            } else {   /* si NO hay carrito en localStorge */

                localStorage.setItem("carrito", JSON.stringify([{id: e.target.dataset.id, cantidad: 1}]))
            }

            alert("Has agregado el producto al carrito")

            numeroCarrito.innerText = productosEnElCarrito()
            numeroCarritoMobile.innerText = productosEnElCarrito()

        })
    })

    boton3.forEach((bot) => {
        bot.addEventListener("click", (e) => {

            /* me muestra en la consola del nav el id del producto al cual aprete el boton de comprar */
            /* console.log(e.target.dataset.id) */

            if(localStorage.carrito) {  /* si hay carrito en localStorge */

                let carrito = JSON.parse(localStorage.carrito)
                /* console.log(carrito) */

                /* con findIndex devuelve el indice del array del carrito donde 0 si el prod esta en el carrito y -1 si no está */
                let index = carrito.findIndex((prod) => {return prod.id == e.target.dataset.id})
                /* console.log(index) */

                /* si mi producto esta en el carrito le sumo 1 */
                /* sino, lo agrego con push */
                if(index == 0) { /* si el indice es distinto a -1 (quiere decir q el prod está en el carrito) */
                    carrito[index].cantidad++  /* carrito en el indice 0 le suma 1 a la cantidad (al prod q está en el carrito) */
                } else {
                    carrito.push({id: e.target.dataset.id, cantidad: 1}) /* y si el prod no está en el carrito, le agrego al carrito el prod con cantidad 1 */
                }

                localStorage.setItem("carrito", JSON.stringify(carrito))  /* actualizo el carrito en localStorage */
                

            } else {   /* si NO hay carrito en localStorge */

                localStorage.setItem("carrito", JSON.stringify([{id: e.target.dataset.id, cantidad: 1}]))
            }

            numeroCarrito.innerText = productosEnElCarrito()
            numeroCarritoMobile.innerText = productosEnElCarrito()

            res.redirect("/users/carrito2")

        })
    })

})

    
