// pegar o Modal
var modal = document.getElementById("meuModal");

// pegar o botão que abre o Modal
var botao = document.getElementById("meuBotao");

// pegar o elemento <span> que fecha o Modal
var span = document.getElementsByClassName("fechar")[0];

// Quando o usuário clicar no botão abra o Modal
botao.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no elemento <span> (X), fecha o Modal
span.onclick = function() {
  modal.style.display = "none";
}

//Quando o usuário clicar em qualquer lugar fora do Modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





