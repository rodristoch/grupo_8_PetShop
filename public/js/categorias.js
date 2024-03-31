window.addEventListener("load", () => {

    /* capturo los checkbox */
    /* de precios */
    let diez = document.querySelector("#diez")
    let veinte = document.querySelector("#veinte")
    let treinta = document.querySelector("#treinta")
    let cuarenta = document.querySelector("#cuarenta")
    
    /* capturo los divs */
    /* de precios */
    let de0a10 = document.querySelector(".lista_flexbox_desktop---de0a10")
    let de10a20 = document.querySelector(".lista_flexbox_desktop---de10a20")
    let de20a30 = document.querySelector(".lista_flexbox_desktop---de20a30")
    let de30aX = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* otros */
    let btnver = document.querySelector(".div-btnver")
    let contenedorInvisible = document.querySelector(".lista_flexbox_desktop---invisible")
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")

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