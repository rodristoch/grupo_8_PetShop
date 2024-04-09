window.addEventListener('load', () => {

    //capturo los elementos
    let form        = document.getElementById ('formulario');
    let name        = document.getElementById ('nombre_producto');
    let price       = document.getElementById ('precio_producto');
    let brand       = document.getElementById ('marca_id');
    let pet         = document.getElementById ('tipo_mascota_id')
    let category    = document.getElementById ('categoria_id');
    let discount    = document.getElementById ('decuento_id');
    let description = document.getElementById ('descripcion');
    let image       = document.getElementById ('imagen');

    let button = document.getElementById ('sumbit');


    //capturo los elementos de error
    let nombreProductoError = document.getElementById ('nombre_producto_error');
    let precioError         = document.getElementById ('precio_error');
    let marcaError          = document.getElementById ('marca_error');
    let petError            = document.getElementById ('pet_error');
    let categoriaError      = document.getElementById ('categoria_error');
    let descuentoError      = document.getElementById ('descuento_error');
    let descripcionError    = document.getElementById ('desripcion_error');
    let imagenError         = document.getElementById ('imagen_error')

    button.addEventListener('click', (event) => {

        event.preventDefault();
        
        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //Validaciones de nombre
        if (name.value.length < 1 ) {
            errores.name = 'Este campo debe estar completo'
        } else if (!/^[a-zA-Z]+$/.test(name.value)) {
            errores.name = 'El nombre solo puede contener letras';
        }
        else if(name.value.length < 4) {
            errores.name = 'El nombre debe tener al menos 4 caracteres'
        }

        //validaciones de precio 
        if (price.value.length < 1) {
            errores.price = 'Este campo debe estar completo';
        } else if (!/^\d+(\.\d+)?$/.test(price.value)) {
            errores.price = 'El precio debe ser un número';
        } else if (parseFloat(price.value) <= 12) {
            errores.price = 'El precio debe ser mayor que 12';
        }


        //validaciones marca
         const id_brand = parseInt(brand.value)
        if (id_brand == -1){
            errores.brand = 'Selecciona una marca';
             }

        // Validación mascota
        const id_pet = parseInt(pet.value)
        if (id_pet == -1) {
            errores.pet = 'Selecciona una mascota'
        }

        //Validación categoria
        const id_category = parseInt(category.value)
        if(id_category == -1) {
            errores.category = 'Selecciona una categoria'
        }

        // validación descuento
        const id_discount = parseInt(discount.value)
        if (id_discount == -1) {
            errores.discount = "Selecciona una opción de descuento"
        }


         //validación descripción
         if (description.value.length <1) {
            errores.description = 'Este campo debe estar completo'
         } else if (description.value. length <10) {
            errores.description =  'Ingresa una descrición'
         }

         // Validación de imagen
         if (image.files.length < 1) {
            errores.image = 'Tienes que subir una imagen';
        } else if (!/\.(jpg|jpeg|png|gif)$/.test(image.files[0].name)) {
            errores.image = 'Solo se admiten imágenes JPG, JPEG, PNG y GIF';
        }

        


        if(Object.keys(errores).length >=1) {

            nombreProductoError.innerText = (errores.name) ? errores.name : '' ;
            precioError.innerText         = (errores.price) ? errores.price : '' ;
            marcaError.innerText          = (errores.brand) ? errores.brand : '' ;
            descripcionError.innerText    = (errores.description) ? errores.description : ''; 
            imagenError.innerText         = (errores.image) ? errores.image : ''; 
            petError.innerText            = (errores.pet) ? errores.pet : '';
            categoriaError.innerText      = (errores.category) ? errores.category : '';
            descuentoError.innerText      = (errores.discount) ? errores.discount : '';
       
        } else {
            form.submit();
        }

    })
})