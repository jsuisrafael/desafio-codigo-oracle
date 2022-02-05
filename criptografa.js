var botaoCriptografa = document.querySelector("#btn-cripto");
botaoCriptografa.addEventListener("click", function(event){
event.preventDefault();

var apareceMensagem = criptografaMensagem(botaoCriptografa);

var limpaMensagem = document.querySelector("#adiciona-form");

limpaMensagem.reset();

});

function criptografaMensagem(botaoCriptografa) {

  var capturaTexto = document.getElementById("input-texto");
  var texto = capturaTexto.value;
  console.log(texto);

  var textoDivi = texto.split("");

  var mensagemOriginal = textoDivi.toString();

  var trocaLetras = mensagemOriginal.replaceAll("e", "enter");  //substitui o primeiro pelo segundo

  trocaLetras = trocaLetras.replaceAll("i", "imes");
  trocaLetras = trocaLetras.replaceAll("a", "ai")
  trocaLetras = trocaLetras.replaceAll("o", "ober");
  trocaLetras = trocaLetras.replaceAll("u", "ufat");
  trocaLetras = trocaLetras.replaceAll("," , "");

    const mensagemMinuscula= trocaLetras.toLowerCase();
    const mensagemFiltrada = mensagemMinuscula.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    console.log(mensagemFiltrada);

  var mensagemOriginal2 = document.getElementById('msg');
      mensagemOriginal2.value = mensagemFiltrada;

  }

      // botao copiar

      var botaoCopia = document.querySelector("#btn-copy").addEventListener("click", function(event) {

      var selecionaResultado = document.querySelector("#msg").select();

      var copiaResultado = document.execCommand('copy');

      console.log("Copiei o resultado!");

      // limpa o campo de mensagem após copiar

      var limpaMensagem2 = document.querySelector("#adiciona-resposta");

      setTimeout(function() {
          limpaMensagem2.remove();
      }, 3000);

  });