const textArea = document.querySelector(".text-area")
const message = document.querySelector(".encrypt-text")
const copyButton = document.querySelector(".btn-copy");




function encrypt(stringEncrypt){
    let matrizCode = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncrypt.includes(matrizCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return stringEncrypt
}

function hasSpecialCharacters(text) {
    const specialCharPattern = /[^a-zA-Z\s]/g;
    return specialCharPattern.test(text);
}


function btnEncrypt(){
    const inputText = textArea.value;

    if (hasSpecialCharacters(inputText)) {
        alert("El texto contiene caracteres especiales. Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    const textEncrypt = encrypt(inputText);
    message.value = textEncrypt;
    textArea.value = "";
    message.style.backgroundImage = "none";


}




function decrypt(stringDecrypt){
    let matrizCode = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"] ]
    stringDecrypt = stringDecrypt.toLowerCase()

    for(let i=0; i<matrizCode.length; i++){
        if(stringDecrypt.includes(matrizCode[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(matrizCode[i][1], matrizCode[i][0])
        }
    }
    return stringDecrypt
}


function btnDecrypt(){
    const textDecrypt = decrypt(textArea.value)
    message.value = textDecrypt
    textArea.value = "";
    message.style.backgroundImage = "none";
}


function copyText() {
    const encryptedText = message.value;
    if (encryptedText) {
        navigator.clipboard.writeText(encryptedText)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    } else {
        alert("No hay texto para copiar");
    }
}
