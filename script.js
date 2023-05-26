const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = ["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[1][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value)
    mensaje.value = textDesencriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = ["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



function btnCopiar(){
    var contenido = document.querySelector(textDesencriptado)
    contenido.select();
    document.execCommand("copiar")
}
