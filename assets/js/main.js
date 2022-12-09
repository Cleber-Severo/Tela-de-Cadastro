const cep = document.getElementById('form-cep');
const formSubmit = document.getElementById('form-submit'); 
const cidade = document.getElementById('form-cidade');
const bairro = document.getElementById('form-bairro');
const endereco = document.getElementById('form-endereco');
const uf = document.getElementById('form-uf');
const ruaNumero = document.getElementById('form-numero');

async function consultaCep(cep) {

    try {
        const cepAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const cepAPIconvertida = await cepAPI.json();
        console.log(cepAPIconvertida);


        endereco.value = cepAPIconvertida.logradouro;
        bairro.value = cepAPIconvertida.bairro;
        cidade.value = cepAPIconvertida.localidade;
        uf.value = cepAPIconvertida.uf;
        

    } catch{}
}

formSubmit.addEventListener('click', (event) => {
    event.preventDefault();
})

cep.addEventListener('focusout', () => {
    consultaCep(cep.value);
    ruaNumero.focus();
})
