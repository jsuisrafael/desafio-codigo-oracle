var botaoCriptografa = document.querySelector("#btn-cripto");
botaoCriptografa.addEventListener("click", function(event){
event.preventDefault();

var apareceMensagem = criptografaMensagem(botaoCriptografa);

});

function criptografaMensagem(botaoCriptografa) {

  var capturaTexto = document.getElementById("input-texto");
  var texto = capturaTexto.value;
  console.log(texto);

  var textoDivi = texto.split("");

  var mensagemOriginal = textoDivi.toString();

  var mensagemMinuscula = mensagemOriginal.toLowerCase();

  var trocaLetras = mensagemMinuscula.replaceAll("e", "enter");  //substitui o primeiro pelo segundo

  trocaLetras = trocaLetras.replaceAll("i", "imes");
  trocaLetras = trocaLetras.replaceAll("a", "ai")
  trocaLetras = trocaLetras.replaceAll("o", "ober");
  trocaLetras = trocaLetras.replaceAll("u", "ufat");
  trocaLetras = trocaLetras.replaceAll("," , "");

  var mensagemOriginal2 = document.getElementById('msg');
      mensagemOriginal2.value = trocaLetras;

  }

      // botao copiar

      var botaoCopia = document.querySelector("#btn-copy").addEventListener("click", function(event) {

      var selecionaResultado = document.querySelector("#msg").select();

      var copiaResultado = document.execCommand('copy');

      console.log("Copiei o resultado!");
  });
