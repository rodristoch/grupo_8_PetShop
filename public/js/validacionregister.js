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

        if (nombre.value.length < 1) {
            errores.nombre = 'Este campo debe estar completo'
        }
        if (apellido.value.length < 1) {
            errores.apellido = 'Este campo debe estar completo'
        }
        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo'
        }
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo'
        }
        if (passwordrepeat.value.length < 1) {
            errores.passwordrepeat = 'Este campo debe estar completo'
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

