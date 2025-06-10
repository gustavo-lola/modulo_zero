function SaberVogal() {
    const letras = document.getElementById("letra").value.toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(letras)) {
        console.log("1 é vogal")
        return document.getElementById("resultado").innerText = `1 (é vogal)`
    } else {
        console.log("0 não é vogal")
        return document.getElementById("resultado").innerText = `0 (não é vogal)`

    }

};