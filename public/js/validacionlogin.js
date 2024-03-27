/* window.addEventListener("load", () => {

    //capturo elementos

    let form = document.querySelector('#formulario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let btnSubmit = document.querySelector('#btnSubmit');


    // capturo errores 

    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');


    btnSubmit.addEventListener('click', (event) => {

        event.preventDefault();

        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

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
        if (Object.keys(errores).length >= 1) {
            
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
        } else {
            form.submit();
        }
    });
}); */

window.addEventListener("load", () => {

    //capturo elementos
    let form = document.querySelector('#formulario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo';
        } else if (!reg.test(email.value)) {
            errores.email = 'El email introducido no es válido';
        }
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo';
        } else if (password.value.length < 8) {
            errores.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        errorEmail.innerText = errores.email || '';
        errorPassword.innerText = errores.password || '';

        if (Object.keys(errores).length === 0) {
            form.submit();
        }
    });
});
