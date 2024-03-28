window.addEventListener("load", () => {

    let accesorios = document.querySelector("#accesorios")
    let comida = document.querySelector("#comida")
    let higiene = document.querySelector("#higiene")
    let juguetes = document.querySelector("#juguetes")

    let contenedorInvisible = document.querySelector(".lista_flexbox_desktop---invisible")
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")
    let contenedorComida = document.querySelector(".lista_flexbox_desktop---comida")
    let contenedorAccesorio = document.querySelector(".lista_flexbox_desktop---accesorio")
    let contenedorHigiene = document.querySelector(".lista_flexbox_desktop---higiene")
    let contenedorJuguete = document.querySelector(".lista_flexbox_desktop---juguete")
    let btnver = document.querySelector(".div-btnver")
    
    comida.addEventListener("click", () => {

        if(comida.checked){

            contenedorVisible.style.display = "none"
            contenedorComida.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
        }

        if(comida.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorComida.style.display = "flex"

        } else {

            contenedorComida.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }


    })

    accesorios.addEventListener("click", () => {

        if(accesorios.checked){

            contenedorVisible.style.display = "none"
            contenedorAccesorio.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
        }

        if(accesorios.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorAccesorio.style.display = "flex"

        } else {

            contenedorAccesorio.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }
        
    })

    higiene.addEventListener("click", () => {

        if(higiene.checked){

            contenedorVisible.style.display = "none"
            contenedorHigiene.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
        }

        if(higiene.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorHigiene.style.display = "flex"

        } else {

            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
        }
    })

    juguetes.addEventListener("click", () => {

        if(juguetes.checked){

            contenedorVisible.style.display = "none"
            contenedorJuguete.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
        }

        if(juguetes.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorJuguete.style.display = "flex"

        } else {

            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
        }
    })

    
})

 /* contenedor.style.opacity = 1 */
        /* contenedor.style.display = "flex"
        boton.style.display = "none" */