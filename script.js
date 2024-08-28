// Función parencriptar
function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar
function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}


// Event 
document.getElementById("encryptButton").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    if (validateText(inputText)) {
        document.getElementById("outputText").value = encrypt(inputText);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.getElementById("decryptButton").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    if (validateText(inputText)) {
        document.getElementById("outputText").value = decrypt(inputText);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

// Función para copiar 
document.getElementById("copyButton").addEventListener("click", function() {
    let outputText = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles.");
    }).catch(() => {
        alert("Error al copiar el texto.");
    });
});

// Validars minúsculas sin acentos ni caracteres especiales
function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}
