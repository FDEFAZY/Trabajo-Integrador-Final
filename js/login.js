
let administrador = {
    userAdmin: 'useradmin@gmail.com',
    passAdmin: '12345'
}

console.log(administrador);
console.log(administrador.userAdmin);
console.log(administrador.passAdmin);

const loginAdmin = () =>{

let userAdmin = 'useradmin@gmail.com';
let passAdmin = '12345';

let userEmail = document.getElementById('emailLogin').value;
let userPassword = document.getElementById('passwordLogin').value;

console.log(userAdmin, passAdmin );
console.log(userEmail, userPassword);

if (userAdmin == userEmail && passAdmin == userPassword) {
    alert('Bienvenido admin');
    window.location.href = "http://127.0.0.1:5500/index.html";
} else{
    alert('user o pass incorrectos')
    window.location.href = 'http://127.0.0.1:5500/pages/error.html';
}

}


