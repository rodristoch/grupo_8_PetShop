window.addEventListener("load", () => {

    let boton = document.querySelector("#btnver")

    let contenedor = document.querySelector(".lista_flexbox_desktop---invisible")
    
    boton.addEventListener("click", () => {

        /* contenedor.style.opacity = 1 */
        contenedor.style.display = "flex"
        boton.style.display = "none"

    })

    
})