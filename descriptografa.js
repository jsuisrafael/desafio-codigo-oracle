var botaoDescriptografa = document.querySelector("#btn-descripto");
botaoDescriptografa.addEventListener("click", function(event) {
  event.preventDefault();

var voltaMensagem = descriptografaMensagem(botaoDescriptografa);

});

function descriptografaMensagem(botaoDescriptografa) {

  var capturaTexto = document.getElementById("input-texto");
  var texto = ""
  texto = capturaTexto.value;
  console.log(texto);
  var textoDivi = texto.split("");

  var cryptoOriginal =
  textoDivi.toString();
  cryptoOriginal =
  cryptoOriginal.replaceAll("," , "");

  // logica de descriptografia

  var destrocaLetras = cryptoOriginal.replaceAll("enter", "e");

      destrocaLetras = destrocaLetras.replaceAll("imes", "i");
      destrocaLetras = destrocaLetras.replaceAll("ai", "a")
      destrocaLetras = destrocaLetras.replaceAll("ober", "o");
      destrocaLetras = destrocaLetras.replaceAll("ufat", "u");
      destrocaLetras = destrocaLetras.replaceAll("," , "");

      // captura o input e mostra o resultado


  var descrypto = document.getElementById('msg');
      descrypto.value = destrocaLetras;

    // botao copiar

    var botaoCopia = document.querySelector("#btn-copy").addEventListener("click", function() {

    var selecionaResultado = document.querySelector("#msg").select();

    var copiaResultado = document.execCommand('copy');

    console.log("Copiei o resultado!");

    });
}
