window.addEventListener("load", () => {

    let tituloGato = document.querySelector("#h2tituloGato")
    /* capturo los checkbox */
    /* de categorias */
    let accesorios = document.querySelector("#accesorios")
    let comida = document.querySelector("#comida")
    let higiene = document.querySelector("#higiene")
    let juguetes = document.querySelector("#juguetes")
    /* de precios */
    let diez = document.querySelector("#diez")
    let veinte = document.querySelector("#veinte")
    let treinta = document.querySelector("#treinta")
    let cuarenta = document.querySelector("#cuarenta")
    
    /* capturo los divs */
    /* de categorias */
    let contenedorComida = document.querySelector(".lista_flexbox_desktop---comida")
    let contenedorAccesorio = document.querySelector(".lista_flexbox_desktop---accesorio")
    let contenedorHigiene = document.querySelector(".lista_flexbox_desktop---higiene")
    let contenedorJuguete = document.querySelector(".lista_flexbox_desktop---juguete")
    /* de precios */
    let de0a10 = document.querySelector(".lista_flexbox_desktop---de0a10")
    let de10a20 = document.querySelector(".lista_flexbox_desktop---de10a20")
    let de20a30 = document.querySelector(".lista_flexbox_desktop---de20a30")
    let de30aX = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* otros */
    let btnver = document.querySelector(".div-btnver")
    let contenedorInvisible = document.querySelector(".lista_flexbox_desktop---invisible")
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")
    
    comida.addEventListener("click", () => {

        if(comida.checked){

            contenedorVisible.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloGato.innerText = "Comida Gato"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
        }

        if(comida.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloGato.innerText = "Comida Gato"

        } else {

            contenedorComida.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }


    })

    accesorios.addEventListener("click", () => {

        if(accesorios.checked){

            contenedorVisible.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloGato.innerText = "Accesorios Gato"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }

        if(accesorios.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloGato.innerText = "Accesorios Gato"

        } else {

            contenedorAccesorio.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }
        
    })

    higiene.addEventListener("click", () => {

        if(higiene.checked){

            contenedorVisible.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloGato.innerText = "Higiene Gato"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }

        if(higiene.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloGato.innerText = "Higiene Gato"

        } else {

            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }
    })

    juguetes.addEventListener("click", () => {

        if(juguetes.checked){

            contenedorVisible.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloGato.innerText = "Juguetes Gato"

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }

        if(juguetes.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloGato.innerText = "Juguetes Gato"

        } else {

            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
            tituloGato.innerText = "Productos Gato"
        }
    })

    diez.addEventListener("click", () => {

        if(diez.checked){

            contenedorVisible.style.display = "none"
            de0a10.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            de0a10.style.display = "none"
        }

        if(diez.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            de0a10.style.display = "flex"

        } else {

            de0a10.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }
    })

    veinte.addEventListener("click", () => {

        if(veinte.checked){

            contenedorVisible.style.display = "none"
            de10a20.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            de10a20.style.display = "none"
        }

        if(veinte.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            de10a20.style.display = "flex"

        } else {

            de10a20.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }
    })

    treinta.addEventListener("click", () => {

        if(treinta.checked){

            contenedorVisible.style.display = "none"
            de20a30.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            de20a30.style.display = "none"
        }

        if(treinta.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            de20a30.style.display = "flex"

        } else {

            de20a30.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }
    })

    cuarenta.addEventListener("click", () => {

        if(cuarenta.checked){

            contenedorVisible.style.display = "none"
            de30aX.style.display = "flex"

        } else {

            contenedorVisible.style.display = "flex"
            de30aX.style.display = "none"
        }

        if(cuarenta.checked && contenedorInvisible){

            contenedorInvisible.style.display = "none"
            de30aX.style.display = "flex"

        } else {

            de30aX.style.display = "none"
            contenedorVisible.style.display = "flex"
            contenedorInvisible.style.display = "flex"
            btnver.style.display = "none"
        }
    })
    
})