window.addEventListener("load", () => {

    /* capturo los checkbox */
    /* de marcas */
    let Eukanuba = document.querySelector("#Eukanuba")
    let ProPlan = document.querySelector("#ProPlan")
    let RoyalCanin = document.querySelector("#RoyalCanin")
    let Cancat = document.querySelector("#Cancat")
    let Catit = document.querySelector("#Catit")
    
    /* capturo los divs */
    /* de marcas */
    let contenedorEukanuba = document.querySelector(".lista_flexbox_desktop---eukanuba")
    let contenedorProPlan = document.querySelector(".lista_flexbox_desktop---proplan")
    let contenedorRoyal = document.querySelector(".lista_flexbox_desktop---royal")
    let contenedorCancat = document.querySelector(".lista_flexbox_desktop---cancat")
    let contenedorCatit = document.querySelector(".lista_flexbox_desktop---catit")
    
    /* otros */
    let titulosEukanuba = document.querySelector("#tit-eukanuba")
    let titulosEukanuba2 = document.querySelector("#tit-eukanuba2")

    let titulosProPlan = document.querySelector("#tit-proplan")
    let titulosProPlan2 = document.querySelector("#tit-proplan2")

    let titulosRoyal = document.querySelector("#tit-royal")
    let titulosRoyal2 = document.querySelector("#tit-royal2")

    let titulosCatit = document.querySelector("#tit-catit")
    let titulosCatit2 = document.querySelector("#tit-catit2")

    let titulosCancat = document.querySelector("#tit-cancat")
    let titulosCancat2 = document.querySelector("#tit-cancat2")
    
    
    Eukanuba.addEventListener("click", () => {

        if(Eukanuba.checked){

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorCatit.style.display = "none"

            titulosProPlan.style.display = "none"
            titulosProPlan2.style.display = "none"

            titulosRoyal.style.display = "none"
            titulosRoyal2.style.display = "none"

            titulosCatit.style.display = "none"
            titulosCatit2.style.display = "none"

            titulosCancat.style.display = "none"
            titulosCancat2.style.display = "none"
            
        } else {

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "flex"

            titulosProPlan.style.display = "block"
            titulosProPlan2.style.display = "block"

            titulosRoyal.style.display = "block"
            titulosRoyal2.style.display = "block"

            titulosCatit.style.display = "block"
            titulosCatit2.style.display = "block"

            titulosCancat.style.display = "block"
            titulosCancat2.style.display = "block"
        }
    })

    ProPlan.addEventListener("click", () => {

        if(ProPlan.checked){

            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorCatit.style.display = "none"

            titulosEukanuba.style.display = "none"
            titulosEukanuba2.style.display = "none"

            titulosRoyal.style.display = "none"
            titulosRoyal2.style.display = "none"

            titulosCatit.style.display = "none"
            titulosCatit2.style.display = "none"

            titulosCancat.style.display = "none"
            titulosCancat2.style.display = "none"
            
        } else {

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "flex"

            titulosEukanuba.style.display = "block"
            titulosEukanuba2.style.display = "block"

            titulosRoyal.style.display = "block"
            titulosRoyal2.style.display = "block"

            titulosCatit.style.display = "block"
            titulosCatit2.style.display = "block"

            titulosCancat.style.display = "block"
            titulosCancat2.style.display = "block"
        }
    })

    RoyalCanin.addEventListener("click", () => {

        if(RoyalCanin.checked){

            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "none"
            contenedorCatit.style.display = "none"

            titulosEukanuba.style.display = "none"
            titulosEukanuba2.style.display = "none"

            titulosProPlan.style.display = "none"
            titulosProPlan2.style.display = "none"

            titulosCatit.style.display = "none"
            titulosCatit2.style.display = "none"

            titulosCancat.style.display = "none"
            titulosCancat2.style.display = "none"
            
        } else {

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "flex"

            titulosEukanuba.style.display = "block"
            titulosEukanuba2.style.display = "block"

            titulosProPlan.style.display = "block"
            titulosProPlan2.style.display = "block"

            titulosCatit.style.display = "block"
            titulosCatit2.style.display = "block"

            titulosCancat.style.display = "block"
            titulosCancat2.style.display = "block"
        }
    })

    Cancat.addEventListener("click", () => {

        if(Cancat.checked){

            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "none"

            titulosEukanuba.style.display = "none"
            titulosEukanuba2.style.display = "none"

            titulosProPlan.style.display = "none"
            titulosProPlan2.style.display = "none"

            titulosRoyal.style.display = "none"
            titulosRoyal2.style.display = "none"

            titulosCatit.style.display = "none"
            titulosCatit2.style.display = "none"
            
        } else {

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "flex"

            titulosEukanuba.style.display = "block"
            titulosEukanuba2.style.display = "block"

            titulosProPlan.style.display = "block"
            titulosProPlan2.style.display = "block"

            titulosRoyal.style.display = "block"
            titulosRoyal2.style.display = "block"

            titulosCatit.style.display = "block"
            titulosCatit2.style.display = "block"
        }
    })

    Catit.addEventListener("click", () => {

        if(Catit.checked){

            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorCatit.style.display = "flex"

            titulosEukanuba.style.display = "none"
            titulosEukanuba2.style.display = "none"

            titulosProPlan.style.display = "none"
            titulosProPlan2.style.display = "none"

            titulosRoyal.style.display = "none"
            titulosRoyal2.style.display = "none"

            titulosCancat.style.display = "none"
            titulosCancat2.style.display = "none"
            
        } else {

            contenedorEukanuba.style.display = "flex"
            contenedorProPlan.style.display = "flex"
            contenedorRoyal.style.display = "flex"
            contenedorCancat.style.display = "flex"
            contenedorCatit.style.display = "flex"

            titulosEukanuba.style.display = "block"
            titulosEukanuba2.style.display = "block"

            titulosProPlan.style.display = "block"
            titulosProPlan2.style.display = "block"

            titulosRoyal.style.display = "block"
            titulosRoyal2.style.display = "block"

            titulosCancat.style.display = "block"
            titulosCancat2.style.display = "block"
        }
    })
})