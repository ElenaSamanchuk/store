let email = document.querySelector('.email');
let password = document.querySelector('.password');
let control = document.querySelector('.control');
let generate = document.querySelector('.generate');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (email.value.length == '') {
        alert('Введите логин');
    } else if (password.value.length < 7 || password.value.length > 15) {
        alert('Введите пароль от 7 до 15 символов');
    } else if (!(/[A-Z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в верхнем регистре');
    } else if (!(/[a-z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в нижнем регистре');
    } else if (!(/[0-9]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну цифру');
    } else if (!(/[!"£$%^&*()]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы один спецсимвол');
    } else if ((/[^!"£$%^&*()A-Z-a-z-0-9]/.test(password.value))) {
        alert('Пароль содержит недопустимые символы');
    } else {
        localStorage.clear();
        localStorage.setItem(email.value, password.value);
        if (email.value != localStorage.key(0)) {
            alert('Пользователь не найден');
            console.log(localStorage.key(0));
        } else if (password.value != localStorage.getItem(email.value)) {
            alert('Неверный пароль');
            console.log(localStorage.getItem(email.value));
        } else {
            window.location.href = 'index.html';
        } 
    }
});

control.addEventListener('click', () => {
    if (password.getAttribute('type') == 'password') {
        control.classList.add('view');
        password.setAttribute('type', 'text');
    } else {
        control.classList.remove('view');
        password.setAttribute('type', 'password');
    }
});

generate.addEventListener('click', () => {
    let chars = 'QWERTYUIOPqwertyuiop123456890!"£$%^&*()';
    let password_length = 10;
    let pass = '';
    for (let i=0; i<password_length; i++) {
        let randNumber = Math.floor(Math.random()*chars.length);
        pass += chars.slice(randNumber, randNumber+1);
    }
    password.value = pass;
    console.log(pass);
});
