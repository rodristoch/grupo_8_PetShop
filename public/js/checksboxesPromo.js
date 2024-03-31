window.addEventListener("load", () => {

    /* capturo los checkbox */
    /* de categorias */
    let promo1 = document.querySelector("#promo1")
    let promo2 = document.querySelector("#promo2")
    
    /* capturo los divs */
    /* de categorias */
    let contenedorPromoPerro = document.querySelector(".lista_flexbox_desktop---contenedorPromoPerro")
    let contenedorPromoGato = document.querySelector(".lista_flexbox_desktop---contenedorPromoGato")
    
    /* otros */
    let titulosPerro = document.querySelector("#tit-promoPerro")
    let titulosPerro2 = document.querySelector("#tit-promoPerro2")
    let titulosGato = document.querySelector("#tit-promoGato")
    let titulosGato2 = document.querySelector("#tit-promoGato2")
    
    promo1.addEventListener("click", () => {

        if(promo1.checked){

            contenedorPromoPerro.style.display = "flex"
            contenedorPromoGato.style.display = "none"
            titulosGato.style.display = "none"
            titulosGato2.style.display = "none"
            
        } else {

            contenedorPromoPerro.style.display = "flex"
            contenedorPromoGato.style.display = "flex"
            titulosGato.style.display = "block"
            titulosGato2.style.display = "block"
        }
    })

    promo2.addEventListener("click", () => {

        if(promo2.checked){

            contenedorPromoGato.style.display = "flex"
            contenedorPromoPerro.style.display = "none"
            titulosPerro.style.display = "none"
            titulosPerro2.style.display = "none"

        } else {

            contenedorPromoGato.style.display = "flex"
            contenedorPromoPerro.style.display = "flex"
            titulosPerro.style.display = "block"
            titulosPerro2.style.display = "block"
        }
    })
})

