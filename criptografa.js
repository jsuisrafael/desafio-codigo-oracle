var botaoCriptografa = document.querySelector("#btn-cripto");
botaoCriptografa.addEventListener("click", function(event){
event.preventDefault();

var apareceMensagem = criptografaMensagem(botaoCriptografa);

});

function criptografaMensagem(botaoCriptografa) {

  var capturaTexto = document.getElementById("input-texto");
  var texto = ""
  texto = capturaTexto.value;
  console.log(texto);

  var textoDivi = texto.split("");

  var mensagemOriginal =
  textoDivi.toString();
  mensagemOriginal =
  mensagemOriginal.replaceAll("," , "");

  var trocaLetras = mensagemOriginal.replaceAll("e", "enter");  //substitui o primeiro pelo segundo

  trocaLetras = trocaLetras.replaceAll("i", "imes");
  trocaLetras = trocaLetras.replaceAll("a", "ai")
  trocaLetras = trocaLetras.replaceAll("o", "ober");
  trocaLetras = trocaLetras.replaceAll("u", "ufat");
  trocaLetras = trocaLetras.replaceAll("," , "");

  var mensagemOriginal2 =
  document.getElementById('msg');
    mensagemOriginal2.value = trocaLetras;

    // botao copiar

    var botaoCopia = document.querySelector("#btn-copy").addEventListener("click", function() {

    var selecionaResultado = document.querySelector("#msg").select();

    var copiaResultado = document.execCommand('copy');

    console.log("Copiei o resultado!");

    });
  }

function validaCriptografia (apareceMensagem) {


}


/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/
