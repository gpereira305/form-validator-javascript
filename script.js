const form = document.querySelector('#form');
const passwordEl = document.querySelector('#password');
const passwordEl2 = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

let isValid = false;
let passwordMatch = false;

function validateFrom() {

     //  Uso da constraint API
     isValid = form.checkValidity();
     //  Menssagem de erro estilizada
     if (!isValid) {
          message.textContent = '*Por favor, preencha os campos vazios!';
          message.style.color = '#fc0303';
          console.log(isValid);
          return;
     }

     //  Checa se as senhas coincidem
     if (passwordEl.value === passwordEl2.value) {
          passwordMatch = true;
          passwordEl.style.borderColor = '#30d602';
          passwordEl2.style.borderColor = '#30d602';
     } else {
          passwordMatch = false;
          message.textContent = '*Senha Incorreta!';
          message.style.color = '#fc0303';
          passwordEl.style.borderColor = '#fc0303';
          passwordEl2.style.borderColor = '#fc0303';
          return;
     }

     //  Apenas se as senhas válidas combinam
     if (isValid && passwordMatch) {
          message.textContent = 'Registrado com Sucesso!';
          message.style.color = '#30d602';
     }
}

function storeData() {
     const user = {
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          website: form.website.value,
          password: form.password.value,
     };

     console.log(user);
}

function processFormData(e) {
     e.preventDefault();
     //  Validação
     validateFrom();
     //  Envia os dados válidos
     if (isValid && passwordMatch) {
          storeData();
     }
}

//Event Listeners
form.addEventListener('submit', processFormData);
