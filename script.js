function carregarInicio() {
   setTimeout(carregando, 8000);
}

function carregando() {
    var carregando = document.querySelector('#carregar');
    carregando.style.display = "none";
}

window.onload = carregarInicio;


function loki() {
    let modal = document.querySelector("#modal");
    modal.style.display = "block"

     document.querySelector(".fechar").addEventListener('click', () =>{

      modal.style.display="none";
    })
}

function sylvie() {
    let modalSylvie = document.querySelector("#modal-sylvie");
    modalSylvie.style.display = "block"

     document.querySelector(".fecharModal").addEventListener('click', () =>{

        modalSylvie.style.display="none";
    })
}

function mobius() {
    let modalMobius = document.querySelector("#modal-mobius");
    modalMobius.style.display = "block"

     document.querySelector(".fecharX").addEventListener('click', () =>{

        modalMobius.style.display="none";
    })
}

function ravonna() {
    let modalRavonna = document.querySelector("#modal-ravonna");
    modalRavonna.style.display = "block"

     document.querySelector(".fecharR").addEventListener('click', () =>{

        modalRavonna.style.display="none";
    })
}


function hunter() {
    let modalH = document.querySelector("#modal-hunter");
    modalH.style.display = "block"

     document.querySelector(".fecharB").addEventListener('click', () =>{

        modalH.style.display="none";
    })
}


function miss() {
    let modal = document.querySelector("#modal-miss");
    modal.style.display = "block"

     document.querySelector(".fecharM").addEventListener('click', () =>{

        modal.style.display="none";
    })
}


function classico() {
    let modal = document.querySelector("#modal-classico");
    modal.style.display = "block"

     document.querySelector(".fecharC").addEventListener('click', () =>{

        modal.style.display="none";
    })
}

function kang() {
    let modal = document.querySelector("#modal-kang");
    modal.style.display = "block"

     document.querySelector(".fecharK").addEventListener('click', () =>{

        modal.style.display="none";
    })
}

