const cep = document.getElementById('form-cep');
const formSubmit = document.getElementById('form-submit'); 
const endereco = document.getElementById('form-endereco');
const bairro = document.getElementById('form-bairro');
const cidade = document.getElementById('form-cidade');
const uf = document.getElementById('form-uf');

async function consultaCep(cep) {

    try {
        const cepAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const cepAPIconvertida = await cepAPI.json();
        console.log(cepAPIconvertida);
    } catch{}
}

formSubmit.addEventListener('click', (event) => {
    event.preventDefault();
})

cep.addEventListener('focusout', () => {
    consultaCep(cep.value);
})
