
function PAR_IMPAR(x) {
    return x % 2 === 0;
}


function verificar() {
    const input = document.getElementById('numero').value;
    const numero = parseInt(input, 10);


    if (isNaN(numero)) {
        document.getElementById('resultado').textContent = "Digite um número válido.";
        return;
    }

    const resultado = PAR_IMPAR(numero)
        ? `O número ${numero} é Par.`
        : `O número ${numero} é Ímpar.`;


    document.getElementById('resultado').textContent = resultado;
}
