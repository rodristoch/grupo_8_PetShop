window.addEventListener("load", () => {

    //capturo los elementos (inputs)
    let form = document.querySelector('#formulario');
    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordrepeat = document.querySelector('#passwordrepeat');
    let terminos = document.querySelector('#terminos');
    let btnSubmit = document.querySelector('#btnSubmit');

    //capturo los elementos de error (smalls dentro de los divs)
    let errorNombre = document.querySelector('.errorNombre');
    let errorApellido = document.querySelector('.errorApellido');
    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');
    let errorPasswordrepeat = document.querySelector('.errorPasswordrepeat');
    let errorTerminos = document.querySelector('.errorTerminos');

    btnSubmit.addEventListener('click', (event) => {

        event.preventDefault();
        
        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //Validaciones de nombre
        if (nombre.value.length < 1) {
            errores.nombre = 'Este campo debe estar completo'
        } else if (nombre.value.length < 2) {
            errores.nombre = 'El nombre debe tener al menos 2 caracteres'
        }
        
        //Validaciones de apellido
        if (apellido.value.length < 1) {
            errores.apellido = 'Este campo debe estar completo'
        } else if (apellido.value.length < 2) {
            errores.apellido = 'El apellido debe tener al menos 2 caracteres'
        } 

        //Validaciones de email
        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo'
        } else if (!reg.test(email.value)) {
            errores.email = 'El email introducido no es válido'
        }

        //Validaciones de password
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo'
        } else if (password.value.length < 8) {
            errores.password = 'La cantraseña debe tener al menos 8 caracteres'
        }

        //Validaciones de repeat password
        if (passwordrepeat.value.length < 1) {
            errores.passwordrepeat = 'Este campo debe estar completo'
        } else if (passwordrepeat.value != password.value) {
            errores.passwordrepeat = 'Las contraseñas no coinciden'
        }

        //Validacion del checkox de terminos y condiciones (debe estar checkeado)
        if (!terminos.checked) {
            errores.terminos = 'Debes aceptar los términos y condiciones'
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {

            errores.nombre ? nombre.classList.add("input_error-front") : nombre.classList.add("input_good-front")  
            errores.apellido ? apellido.classList.add("input_error-front") : apellido.classList.add("input_good-front")  
            errores.email ? email.classList.add("input_error-front") : email.classList.add("input_good-front")  
            errores.password ? password.classList.add("input_error-front") : password.classList.add("input_good-front")  
            errores.passwordrepeat ? passwordrepeat.classList.add("input_error-front") : passwordrepeat.classList.add("input_good-front")  
            errores.terminos ? "" : terminos.classList.add(".terminos") 
            
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
            errorPasswordrepeat.innerText = (errores.passwordrepeat) ? errores.passwordrepeat : '';
            errorTerminos.innerText = (errores.terminos) ? errores.terminos : '';

        } else {
            form.submit();
        }
    });
});

