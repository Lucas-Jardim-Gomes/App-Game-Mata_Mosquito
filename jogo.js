var vidas = 1
var tempo = 30


var criaMosquitoTempo = 1700


var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'FACIL') {
    // tempo 1500
    var criaMosquitoTempo = 1500

} else if (nivel === 'NORMAL') {
    //tempo 1000
    var criaMosquitoTempo = 1000

} else if (nivel === 'DIFICIL') {
    //tempo 500
    var criaMosquitoTempo = 700

}

var criaMosquito = setInterval(function () {
    posicaoRandomica()
}, criaMosquitoTempo)

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {


    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //selecionando os corações e substituir o valor
        if (vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }



    var altura = 0;
    var largura = 0;


    function ajustaTamanhoTelaJogo() {
        altura = window.innerHeight;
        largura = window.innerWidth;

        console.log(largura, altura);
    }

    ajustaTamanhoTelaJogo();


    var posicaoX = Math.floor(Math.random() * largura) - 110;
    var posicaoY = Math.floor(Math.random() * altura) - 110;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);


    //criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito);

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}