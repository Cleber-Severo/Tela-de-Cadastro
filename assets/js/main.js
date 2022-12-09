async function consultaCep(cep) {

    try {
        const cepAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const cepAPIconvertida = await cepAPI.json();
        console.log(cepAPIconvertida)
    } catch{}
}

const cep = document.getElementById('form-cep');
cep.addEventListener('focusout', () => {
    consultaCep(cep.value);
})