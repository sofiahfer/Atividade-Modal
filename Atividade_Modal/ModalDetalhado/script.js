const abrirModalButton = document.querySelector("#abrirModal"); 
const fecharModalButton = document.querySelector("#fecharModal")
const modal = document.querySelector("#modal")
const fundoModal = document.querySelector("#fundoModal")

const alternarModal = () => {
    [modal, fundoModal].forEach((el) => el.classList.toggle("esconder"));
    
}

[abrirModalButton, fecharModalButton, fundoModal].forEach((el) => {
    el.addEventListener("click", () => alternarModal());
});