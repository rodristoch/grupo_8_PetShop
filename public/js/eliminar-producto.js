window.addEventListener("load", () => {

    let botonEliminar = document.querySelector(".boton_eliminar")
    botonEliminar.addEventListener("click", (event) => {

       let pregunta = confirm("¿Querés eliminar el producto?")
       if(pregunta == false){

        event.preventDefault()

       }
    })
})