function ORDEM(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function ordenar() {

    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').textContent = "Por favor, preencha todos os campos com números.";
        return;
    }


    const ordenados = ORDEM(a, b, c);
    document.getElementById('resultado').textContent = `Ordem crescente: ${ordenados.join(', ')}`;
}