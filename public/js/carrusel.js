window.addEventListener("load", () => {

    let grande = document.querySelector(".grande")
    let punto = document.querySelectorAll(".punto")

    //recorro todos los puntos
    punto.forEach((cadaPunto, i) => {

        //le pongo un evento a cada punto
        cadaPunto.addEventListener("click", () => {

            //posicion del punto
            let posicion = i;

            //por cuanto tiene q moverse la imagen
            let operacion = posicion * -50

            //muevo el div grande
            grande.style.transform = "translateX(" + operacion + "%)"

            //recorro todos los puntos
            punto.forEach((cadaPunto, i) => {

                //le saco la clase activo a todos los puntos
                cadaPunto.classList.remove("activo")
            })
            //le pongo la clase activo al punto q haya hecho click
            cadaPunto.classList.add("activo")
        })
    })
})

