
const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const botonCopiar = document.querySelector('.copiar');

const notFound = document.querySelector('.costado__article');
const textareaCopiar = document.querySelector('.costado__textarea');

function encriptar(){
    let textoUsuario = document.querySelector('.centro__textarea').value.toLowerCase().split('');
    
    for(let i = 0; i<textoUsuario.length; i++) { 
        if (textoUsuario[i] == 'a') {textoUsuario[i] = 'ai'}
        else if (textoUsuario[i] == 'e') {textoUsuario[i] = 'enter'}
        else if (textoUsuario[i] == "i") {textoUsuario[i] = 'imes'}
        else if (textoUsuario[i] == "o") {textoUsuario[i] = 'ober'}
        else if (textoUsuario[i] == "u") {textoUsuario[i] = 'ufat'};
    };
    
    if (textoUsuario != ''){
        activarCostado();
        textareaCopiar.innerHTML = textoUsuario.join('');
    }
}

function copiar(){
    let text = document.querySelector('.costado__textarea').innerHTML;
    
    navigator.clipboard.writeText(text);
}

function desencriptar(){
    let textoUsuario = document.querySelector('.centro__textarea').value.toLowerCase();

    textoUsuario = textoUsuario.replaceAll('ai', 'a');
    textoUsuario = textoUsuario.replaceAll('enter', 'e');
    textoUsuario = textoUsuario.replaceAll('imes', 'i');
    textoUsuario = textoUsuario.replaceAll('ober', 'o');
    textoUsuario = textoUsuario.replaceAll('ufat', 'u');
    
    if (textoUsuario != ''){
        activarCostado();
        textareaCopiar.innerHTML = textoUsuario;
    }
}

function activarCostado(){
    notFound.setAttribute('hidden', 'true');
    botonCopiar.removeAttribute('hidden');
    textareaCopiar.removeAttribute('hidden');
}

// Eventos
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);