window.addEventListener("load", () => {

    //capturo los elementos
    let form = document.querySelector('#formulario');
    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordrepeat = document.querySelector('#passwordrepeat');
    let btnSubmit = document.querySelector('#btnSubmit');

    //capturo los elementos de error
    let errorNombre = document.querySelector('.errorNombre');
    let errorApellido = document.querySelector('.errorApellido');
    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');
    let errorPasswordrepeat = document.querySelector('.errorPasswordrepeat');

    btnSubmit.addEventListener('click', (event) => {

        event.preventDefault();
        
        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (nombre.value.length < 1) {
            errores.nombre = 'Este campo debe estar completo'
        } else if (nombre.value.length < 2) {
            errores.nombre = 'El nombre debe tener al menos 2 caracteres'
        }
        if (apellido.value.length < 1) {
            errores.apellido = 'Este campo debe estar completo'
        } else if (apellido.value.length < 2) {
            errores.apellido = 'El nombre debe tener al menos 2 caracteres'
        }
        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo'
        } else if (!reg.test(email.value)) {
            errores.email = 'El email introducido no es válido'
        }
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo'
        } else if (password.value.length < 8) {
            errores.password = 'La cantraseña debe tener al menos 8 caracteres'
        }
        if (passwordrepeat.value.length < 1) {
            errores.passwordrepeat = 'Este campo debe estar completo'
        } else if (passwordrepeat.value != password.value) {
            errores.passwordrepeat = 'Las contraseñas no coinciden'
        }
        if (Object.keys(errores).length >= 1) {
            
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
            errorPasswordrepeat.innerText = (errores.passwordrepeat) ? errores.passwordrepeat : '';

        } else {
            form.submit();
        }
    });
});

