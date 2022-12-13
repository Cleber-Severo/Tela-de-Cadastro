

const form = document.getElementById('form');
const usuarioNome = document.getElementById('form-nome');
const usuarioSobreNome = document.getElementById('form-sobreNome');

const cep = document.getElementById('form-cep');
const formSubmit = document.getElementById('form-submit'); 
const cidade = document.getElementById('form-cidade');
const bairro = document.getElementById('form-bairro');
const endereco = document.getElementById('form-endereco');
const uf = document.getElementById('form-uf');
const ruaNumero = document.getElementById('form-numero');

const modalTexto = document.getElementById('modal-texto-container')



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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    modalTexto.innerHTML = `Obrigado <b>${usuarioNome.value} ${usuarioSobreNome.value}</b>, por completar seus dados!`;
    console.log(modalTexto.innerHTML)

})

cep.addEventListener('focusout', () => {
    consultaCep(cep.value);
    ruaNumero.focus();
})
