// Pegar o Modal
var modal = document.getElementById("meuModal");

// Pegar o botão para abrir o Modal
var btn = document.getElementById("meuBtn");

// Pegar o elemento <span> que fecha o Modal
var span = document.getElementsByClassName("fechar")[0];

// Quando o usuário clicar no botão, abra o Modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), feche o Modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do Modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




