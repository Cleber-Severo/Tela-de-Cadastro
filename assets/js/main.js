

const form = document.getElementById('form');
const usuarioNome = document.getElementById('form-nome');
const usuarioSobreNome = document.getElementById('form-sobreNome');
const usuarioNumero = document.getElementById('form-numero');
const modalTexto = document.getElementById('modal-texto-container');

const cep = document.getElementById('form-cep');
const formSubmit = document.getElementById('form-submit'); 
const cidade = document.getElementById('form-cidade');
const bairro = document.getElementById('form-bairro');
const endereco = document.getElementById('form-endereco');
const uf = document.getElementById('form-uf');
const ruaNumero = document.getElementById('form-numero');




async function consultaCep(cepConsulta) {
    const cepAviso = document.getElementById('erro-msg');
    cepAviso.innerHTML = ''
    cep.classList.remove('erro');
        
    try {
        const cepAPI = await fetch(`https://viacep.com.br/ws/${cepConsulta}/json/`);
        const cepAPIconvertida = await cepAPI.json();
        console.log(cepAPIconvertida);

        if (cepAPIconvertida.erro){
            cepAviso.innerHTML = `<span class="erro-txt">CEP Não Existe</span>`;
            cep.classList.add('erro');
            return;
        }


        endereco.value = cepAPIconvertida.logradouro;
        bairro.value = cepAPIconvertida.bairro;
        cidade.value = cepAPIconvertida.localidade;
        uf.value = cepAPIconvertida.uf;
        
    } catch(erro){
        const cep = document.getElementById('form-cep');
       
        if(cep.value !== '') {
            cep.classList.add('erro');
            cepAviso.innerHTML = `<span class="erro-txt">CEP deve ser composto por 8 numeros</span>`;
            console.log('cep invalido');
        }
        
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
     
    if(!usuarioNome.value || !usuarioSobreNome.value|| !usuarioNumero.value || !cep.value || !cidade.value || !bairro.value || !endereco.value || !uf.value || !ruaNumero.value) {
        alert('preencha todos os campos');
        return;
    }

    formSubmit.dataset.toggle = "modal" 
    formSubmit.dataset.target = "#staticBackdrop" 
   
    modalTexto.innerHTML = `Obrigado <b>${usuarioNome.value} ${usuarioSobreNome.value}</b>, por completar seus dados!`;

})

cep.addEventListener('focusout', () => {
    consultaCep(cep.value);
    ruaNumero.focus();
})
