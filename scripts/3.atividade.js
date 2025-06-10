function LIMITES(li, ls) {
  let soma = 0;
  let pares = [];

  for (let i = li + 1; i < ls; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      soma += i;
    }
  }

  const resultado = document.getElementById("resultado");
  if (pares.length === 0) {
    resultado.innerText = "Não há números pares no intervalo.";
  } else {
    resultado.innerText = `Pares encontrados: ${pares.join(", ")}\nSomatório: ${soma}`;
  }
}

function executarLimites() {
  const li = parseInt(document.getElementById("li").value);
  const ls = parseInt(document.getElementById("ls").value);

  if (isNaN(li) || isNaN(ls)) {
    document.getElementById("resultado").innerText = "Digite dois números válidos.";
    return;
  }

  if (li >= ls) {
    document.getElementById("resultado").innerText = "O limite inferior deve ser menor que o superior.";
    return;
  }

  LIMITES(li, ls);
}