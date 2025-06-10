  function POSITIVO_NEGATIVO(x) {
    return x > 0;
  }

  function verificarNumero() {
    const input = document.getElementById("numero").value;
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
      document.getElementById("resultado").textContent = "Digite um número válido!";
      return;
    }

    const resultado = POSITIVO_NEGATIVO(numero);

    if (resultado) {
      document.getElementById("resultado").textContent = "Número positivo.";
    } else {
      document.getElementById("resultado").textContent = "Número negativo ou zero.";
    }
  }
