
function removerImagem() {
  document.getElementById("lupa").style.display = "none";
  document.getElementById("titulo").style.display = "none";
  document.getElementById("result").style.display = "none";

}

function aparecerBotao(copiar) {
   element.style.display = "block";
}

function aparecertexto(myInput) {
   element.style.display = "block";
}

function copiar() {
  var copiaTexto = document.getElementById("myInput");
  copiaTexto.select();
  copiaTexto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiaTexto.value);
  alert("Texto copiado para a área de transferência!");
  
  var textoCopiado = document.getElementById("meutextoCopiado");
  textoCopiado.innerHTML = "Copied: " + copiaTexto.value;

}

function copiado() {
  var textoCopiado = document.getElementById("meutextoCopiado");
  textoCopiado.innerHTML = "Texto copiado para a área de transferência!";

}


function criptografar() {
  var textoOriginal = document.getElementById("textarea").value;
  // Inicializa uma string vazia para armazenar o texto criptografado



  // Substitui todas as ocorrências das letras pelas suas respectivas "chaves" de criptografia
  textoOriginal = textoOriginal.replace(/e/g, "enter");
  textoOriginal = textoOriginal.replace(/i/g, "imes");
  textoOriginal = textoOriginal.replace(/a/g, "ai");
  textoOriginal = textoOriginal.replace(/o/g, "ober");
  textoOriginal = textoOriginal.replace(/u/g, "ufat");

        
    
  
  // Escreve o texto criptografado na página
  document.getElementById("myInput").innerHTML = textoOriginal;

}

 
function descriptografar() {
  var textoCriptografado = document.getElementById("textarea").value;
  // Inicializa uma string vazia para armazenar o texto descriptografado
  

  // Substitui todas as ocorrências das letras pelas suas respectivas "chaves" de criptografia
  textoCriptografado = textoCriptografado.replace(/enter/g, "e");
  textoCriptografado = textoCriptografado.replace(/imes/g, "i");
  textoCriptografado = textoCriptografado.replace(/ai/g, "a");
  textoCriptografado = textoCriptografado.replace(/ober/g, "o");
  textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

        
    
  
  // Escreve o texto descriptografado na página
  document.getElementById("myInput").innerHTML = textoCriptografado;
  
}  


// Aparecer botão copiar
  var button = document.getElementById("botao_descriptografar");
  
  // Adiciona um event listener de clique no botão
  button.addEventListener("click", function() {
    // Obtém a referência do elemento
    var element = document.getElementById("copiar");

    // Altera a propriedade display para fazer o elemento aparecer
    element.style.display = "block";
  });


  // Aparecer botão copiar
   var button = document.getElementById("botao_criptografar");

  // Adiciona um event listener de clique no botão
  button.addEventListener("click", function() {
    // Obtém a referência do elemento
    var element = document.getElementById("copiar");

    // Altera a propriedade display para fazer o elemento aparecer
    element.style.display = "block";
  });

// Aparecer texto criptografado
   var button = document.getElementById("botao_criptografar");

  // Adiciona um event listener de clique no botão
  button.addEventListener("click", function() {
    // Obtém a referência do elemento
    var element = document.getElementById("myInput");

    // Altera a propriedade display para fazer o elemento aparecer
    element.style.display = "block";
  });

// Aparecer texto descriptografado
   var button = document.getElementById("botao_descriptografar");

  // Adiciona um event listener de clique no botão
  button.addEventListener("click", function() {
    // Obtém a referência do elemento
    var element = document.getElementById("myInput");

    // Altera a propriedade display para fazer o elemento aparecer
    element.style.display = "block";
  });


