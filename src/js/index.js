const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
let topBtn = document.getElementById("topBtn");

// Quando o usuário clicar no botão irá ativar as funções

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

// Depois de clicar no botão ele fica oculto

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

// Mostra os projetos que estavam ocultos

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}

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

// Quando o usuário clicar no menu irá aparecer o que estava oculto

document.getElementById("menu").onclick = function(){
    document.getElementById("nav-links").classList.toggle("active");
}