const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
let topBtn = document.getElementById("topBtn");

// Quando o usuário rolar para baixo mostre o botão

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Quando o usuário clicar no botão, volte ao topo da página

function topFunction(){
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, FireFox, IE e Opera
}

// Quando o tamanho da janela for maior que 769 os itens aparecem

function mudouTamanho(){
    if (window.innerWidth >= 769){
        itens.style.display = "flex";
    } else{
        itens.style.display = "none";
    }
}

// Quando usuário clicar no Menu os items iram aparecem

function clickMenu(){
    if(itens.style.display == "flex"){
        itens.style.display = "none";
    } else {
        itens.style.display = "flex";
    }
}