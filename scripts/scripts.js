function MAIOR_MENOR(a, b, c, d, e) {

  const valores = [a, b, c, d, e];

  const maior = Math.max(...valores);
  const menor = Math.min(...valores);
  document.getElementById("resultado").innerText = `Maior valor: ${maior} | Menor valor: ${menor}`;
}

function pegarValores() {
  const a = parseInt(document.getElementById("valor1").value);
  const b = parseInt(document.getElementById("valor2").value);
  const c = parseInt(document.getElementById("valor3").value);
  const d = parseInt(document.getElementById("valor4").value);
  const e = parseInt(document.getElementById("valor5").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os campos com números válidos.";
    return;
  }

  MAIOR_MENOR(a, b, c, d, e);
}
