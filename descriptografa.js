var botaoDescriptografa = document.querySelector("#btn-descripto");
botaoDescriptografa.addEventListener("click", function(event) {
  event.preventDefault();

var voltaMensagem = descriptografaMensagem(botaoDescriptografa);

});

function descriptografaMensagem(botaoDescriptografa) {

  var capturaTexto = document.getElementById("input-texto");
  var texto = capturaTexto.value;
  console.log(texto);

  var cryptoOriginal = texto.toLowerCase();
  var cryptoOriginal = cryptoOriginal.replaceAll("," , "");

  // logica de descriptografia

  var destrocaLetras = cryptoOriginal.replaceAll("enter", "e");

      destrocaLetras = destrocaLetras.replaceAll("imes", "i");
      destrocaLetras = destrocaLetras.replaceAll("ai", "a")
      destrocaLetras = destrocaLetras.replaceAll("ober", "o");
      destrocaLetras = destrocaLetras.replaceAll("ufat", "u");
      destrocaLetras = destrocaLetras.replaceAll("," , "");

      // captura o input e mostra o resultado

      const mensagemFiltrada = destrocaLetras.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
      console.log(mensagemFiltrada);
  
  var descrypto = document.getElementById('msg');
      descrypto.value = mensagemFiltrada;
}

      // botao copiar

      var botaoCopia = document.querySelector("#btn-copy").addEventListener("click", function() {

      var selecionaResultado = document.querySelector("#msg").select();

      var copiaResultado = document.execCommand('copy');

      console.log("Copiei o resultado!");

      // limpa o campo de mensagem após a transição

      var limpaMensagem2 = document.querySelector("#adiciona-resposta");

      setTimeout(function() {
          limpaMensagem2.remove();
      }, 3000);
});
