// SCRIPT DA MÁGICA KKKKKKKKKKKKKKKKKKKKKK

// Data alvo do dia especial
const dataAlvo = new Date('2023-10-11 00:00:00').getTime();

// Configurações e predefinições
const body = document.body;
const bodyCover = document.getElementById('bodyCover');
const elementoDias = document.getElementById('dias');
const elementoHoras = document.getElementById('horas');
const elementoMinutos = document.getElementById('minutos');
const elementoSegundos = document.getElementById('segundos');
const elementoImagem = document.getElementById('photo');
const elementoHUD = document.getElementById('hud');
const elementoBalloons = document.getElementById('balloons');

var callFunctTime = false;
var titleFontSize = 4; // Tamanho padrão para o titulo
var language = language_words.us;
var params = new URLSearchParams(window.location.search);
var acSecs = 0;

document.title = "The Counter1011";

// Assets e IMGs (Fotos)
const assets = {
    "black": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/black.png?v=1696016523720",
    "carromaisfraco": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/carromaisfraco.png?v=1696016532380",
    "nsei": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/nsei.png?v=1696016535773",
    "parqsh": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/parqsh.png?v=1696016540508",
    "parquesh": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/parquesh.png?v=1696016543237",
    "vgg": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/vgg.jfif?v=1696663925416",
    "balloons": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/balloons.png?v=1696663370653",

    "IMG02": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG02.jpg?v=1696663745005",
    "IMG02u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG02u.jpg?v=1696663588725",
    "IMG03": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG03.jpg?v=1696663748666",
    "IMG03u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG03u.jpg?v=1696663592139",
    "IMG07": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG07.jpg?v=1696663752970",
    "IMG07u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG07u.jpg?v=1696663597429",
    "IMG10": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG10.jpg?v=1696663757316",
    "IMG10u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG10u.jpg?v=1696663609871",
    "IMG11": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG11.jpg?v=1696663780493",
    "IMG11u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG11u.jpg?v=1696663615080",
    "IMG15": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG15.jpg?v=1696663785812",
    "IMG15u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG15u.jpg?v=1696663619590",
    "IMG17": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG17.jpg?v=1696663741961",
    "IMG17u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG17u.jpg?v=1696663576843",
    "IMG19": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG19.jpg?v=1696663789803",
    "IMG19u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG19u.jpg?v=1696663628568",
    "IMG22": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG22.jpg?v=1696663795912",
    "IMG22u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG22u.jpg?v=1696663631475",
    "IMG23": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG23.jpg?v=1696663799375",
    "IMG23u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG23u.jpg?v=1696663635107",
    "IMG24": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG24.jpg?v=1696663802659",
    "IMG24u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG24u.jpg?v=1696663638394",
    "IMG28": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG28.jpg?v=1696663807359",
    "IMG28u": "https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/IMG28u.jpg?v=1696663641428"
}

// Pre-defs
elementoBalloons.src = assets.balloons;
if (params.get('lang') == "BR"){
    language = language_words.br;
} else{
    language = language_words.us;
}

// Musicas
var musicStep = 0;
var themesong = new Audio('https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/themesong.mp3?v=1696016560724');
var sidetosidein = new Audio('https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/sidetoside-inst.mp3?v=1696016557950');
var intoyouin = new Audio('https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/intoyou-inst.mp3?v=1696016551090');

// SFX
var pronouns = new Audio('https://cdn.glitch.global/2ae66cc5-81a5-43d7-b24e-076d29352787/pronouns.mp3?v=1696016554732');

// Uma função de fadein e fadeout só pra fazer a boa
function fadeInOut(element) {
    element.style.transition = 'opacity 0.2s ease-out-in';
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.transition = 'opacity 0.2s ease-in-out';
        element.style.opacity = '1';
    }, 100);
}
function fadeIn(element) {
    element.style.transition = 'opacity 0.2s ease-in-out';
    element.style.opacity = '1';
}
function fadeOut(element) {
    element.style.transition = 'opacity 0.2s ease-in-out';
    element.style.opacity = '0';
}

// Atualizar o contador obviamente
function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    if (diferenca > 0){
        const segundos = Math.floor((diferenca / 1000) % 60);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        fadeInOut(document.getElementById('dias'));
        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');

        fadeInOut(document.getElementById('horas'));
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');

        fadeInOut(document.getElementById('minutos'));
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');

        fadeInOut(document.getElementById('segundos'));
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    }

    if (diferenca <= 0 && !callFunctTime){ // ISSO SÓ VAI ACONTECER UMA VEZITA
        TimeToChange();
        fadeInOut(document.getElementById('dias'));
        fadeInOut(document.getElementById('horas'));
        fadeInOut(document.getElementById('minutos'));
        fadeInOut(document.getElementById('segundos'));
        document.getElementById('dias').textContent = language[1];
        document.getElementById('horas').textContent = "";
        document.getElementById('minutos').textContent = "";
        document.getElementById('segundos').textContent = "";
        document.title = "Loading...";
        themesong.pause();
        callFunctTime = true;
    }
}

// Muda o tamanho do texto e interpola
function interpolarTamanhoTexto(theElementId, mainSize, sizeWay, lerpNumber) {
    const elementoTexto = document.getElementById(theElementId);
    const tamanhoDesejado = sizeWay; // Tamanho de fonte desejado

    if (elementoTexto.style.fontSize == ""){
        elementoTexto.style.fontSize = "1rem";
    }

    var intervalo = setInterval(function() {
        var tamanhoAtual = parseFloat(elementoTexto.style.fontSize);
        if ((tamanhoAtual/tamanhoDesejado)*100 < 101 && (tamanhoAtual/tamanhoDesejado)*100 > 99) {
            clearInterval(intervalo);
        } else {
            const incremento = (tamanhoDesejado - tamanhoAtual)*lerpNumber;
            const novoTamanho = tamanhoAtual + incremento;
            elementoTexto.style.fontSize = novoTamanho + 'rem';
            //console.log((tamanhoAtual/tamanhoDesejado)*100);
        }
    }, 1);
}

// Escreve uma string do zero
function WriteString(theElementId, stringText, letterPerSeconds){
    const elementoTexto = document.getElementById(theElementId);
    elementoTexto.textContent = "";

    var writting = setInterval(function() {
        if (elementoTexto.textContent.length < stringText.length){
            elementoTexto.textContent = stringText.slice(0, elementoTexto.textContent.length+1);
        } else{
            clearInterval(writting);
        }
    }, 1000/letterPerSeconds);
}

// Acrescenta uma string escrevendo nela
function WriteStringAppend(theElementId, stringText, letterPerSeconds){
    const elementoTexto = document.getElementById(theElementId);
    const elementoTextoFixedContent = elementoTexto.textContent;
    var currentIndex = 0;

    var writting = setInterval(function() {
        if (elementoTexto.textContent.length < elementoTextoFixedContent.length+stringText.length){
            elementoTexto.textContent = elementoTexto.textContent + stringText.slice(currentIndex, currentIndex+1);
            currentIndex++;
        } else{
            clearInterval(writting);
        }
    }, 1000/letterPerSeconds);
}

// Mexe
function MoveTo(theElementId, top, left, type, lerpNumber) {
    const elementoTexto = document.getElementById(theElementId);

    var intervalo = setInterval(function() {
        const topAtual = parseFloat(elementoTexto.style.top);
        const leftAtual = parseFloat(elementoTexto.style.left);

        if ((((top*0.01) - (topAtual*0.01)) < 0.005) && (((left*0.01) - (leftAtual*0.01)) < 0.005)) {
            clearInterval(intervalo);
        } else {
            const incTop = (top - topAtual)*lerpNumber;
            const novoTop = topAtual + incTop;
            elementoTexto.style.top = novoTop + type + " ";

            const incLeft = (left - leftAtual)*lerpNumber;
            const novoLeft = leftAtual + incLeft;
            elementoTexto.style.left = novoLeft + type + " ";
        }
    }, 1);
}

// Fade in
function fadeBackground(urlimg, alpha) {
    body.style.backgroundImage = 'url("'+urlimg+'")';
    body.style.backgroundSize = "cover";
    setTimeout(() => {
        bodyCover.style.background = 'rgba(0,0,0,'+alpha+')';
    }, 10);
}

// Timing by Seconds
function bySeconds(seconds){
    acSecs = acSecs + (seconds*1000);
    return acSecs;
}

// Musicas
document.addEventListener('click', function() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    if (diferenca > 0){
        if (themesong.paused){
            themesong.loop = true;
            themesong.play();
        }
    } else{
        themesong.pause();
        if (musicStep == 1){
            sidetosidein.play();
        } else if (musicStep == 2){
            intoyouin.play();
        }
    }
});

// Outras coisas ai
setInterval(atualizarContador, 1000);
atualizarContador();

//=======================================================================

// Função que vai fazer a mágica acontecer
function TimeToChange(){
    setTimeout(function () {
        fadeBackground(assets.black, 1);
        fadeInOut(document.getElementById('dias'));
        elementoDias.setAttribute('style', 'white-space: pre;');
        elementoDias.style.textAlign = "center";
        elementoDias.textContent = "";
    }, 4000);

    setTimeout(function () {
        document.title = "<3";
        interpolarTamanhoTexto("dias", titleFontSize, 1.2, 0.01);
        WriteString("dias", language[0] + "Vanelton Junior", 12);
    }, 5000);

    setTimeout(function () {
        document.title = ":)";
        interpolarTamanhoTexto("dias", titleFontSize, 5, 0.01);
        //WriteString("dias", "De: Vanelton Junior", 12);
        elementoDias.style.opacity = "0";
    }, 8000);

    setTimeout(function () {
        document.title = "Espero que goste";
        musicStep = 1;
        sidetosidein.play();

        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[2], 15);
        elementoDias.style.opacity = "1";
    }, 12000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 2, 0.01);
        WriteStringAppend("dias", language[3], 15);
        elementoDias.style.opacity = "1";
    }, 14000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 2, 0.01);
        WriteStringAppend("dias", language[4], 9);
        elementoDias.style.opacity = "1";
    }, 19000);

    setTimeout(function () {
        fadeBackground(assets.black, 1);
        interpolarTamanhoTexto("dias", titleFontSize, 2, 0.01);
        WriteStringAppend("dias", language[5], 15);
        elementoDias.style.opacity = "1";
    }, 21000);

    setTimeout(function () {
        //interpolarTamanhoTexto("dias", titleFontSize, 2, 0.01);
        //WriteStringAppend("dias", language[5], 15);
        elementoDias.style.opacity = "0";
    }, 22000);

    setTimeout(function () {
        fadeBackground(assets.black, 0.7);
        document.title = "Você é muito especial para mim";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[6], 15);
        elementoDias.style.opacity = "1";
    }, 23000);

    setTimeout(function () {
        fadeBackground(assets.vgg, 0.7);
        document.title = "Obrigado por tudo que você tem feito por mim";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[7], 15);
        elementoDias.style.opacity = "1";
    }, 26000);

    setTimeout(function () {
        document.title = "Você faz eu me sentir tão bem";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[8], 15);
        elementoDias.style.opacity = "1";
    }, 28000);

    setTimeout(function () {
        document.title = "Não existem palavras suficientes";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[9], 15);
        elementoDias.style.opacity = "1";
    }, 30000);

    setTimeout(function () {
        document.title = "para dizer o quanto eu gosto de você";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[10], 15);
        elementoDias.style.opacity = "1";
    }, 32000);

    setTimeout(function () {
        document.title = "<3";
        interpolarTamanhoTexto("dias", titleFontSize, 4, 0.01);
        WriteString("dias", language[11], 15);
        elementoDias.style.opacity = "1";
    }, 34000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[12], 15);
        elementoDias.style.opacity = "1";
    }, 36000);

    setTimeout(function () {
        pronouns.play();
    }, 37000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[13], 15);
        elementoDias.style.opacity = "1";
    }, 41000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[14], 15);
        elementoDias.style.opacity = "1";
    }, 44000);

    setTimeout(function () {
        fadeBackground(assets.carromaisfraco, 0.7);
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[15], 15);
        elementoDias.style.opacity = "1";
    }, 47000);

    setTimeout(function () {
        elementoDias.textContent = elementoDias.textContent + "\r\nMe negou R$ 1000 :(";
    }, 49500);

    setTimeout(function () {
        fadeBackground(assets.black, 1);
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[16], 15);
        elementoDias.style.opacity = "1";
    }, 50000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 3, 0.01);
        WriteString("dias", language[17], 15);
        elementoDias.style.opacity = "1";
    }, 54000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 5, 0.01);
        //WriteString("dias", language[17], 15);
        elementoDias.style.opacity = "0";
    }, 57000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 7, 0.005);
        WriteString("dias", language[18], 8);
        elementoDias.style.opacity = "1";
    }, 58000);

    setTimeout(function () {
        interpolarTamanhoTexto("dias", titleFontSize, 5, 0.005);
        WriteString("dias", language[19], 15);
        elementoDias.style.opacity = "1";
    }, 63000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(100, 0, 100, 1)";
        elementoBalloons.style.top = "-100%";
    }, 64000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        interpolarTamanhoTexto("dias", titleFontSize, 1.3, 0.005);
        musicStep = -1;
        sidetosidein.pause();
        elementoDias.style.opacity = "0";
    }, 73000);

    //==================================//
    //      AS FOTOS COMEÇAM AQUI       //
    //==================================//

    setTimeout(function () {
        musicStep = 2;
        intoyouin.play();
        WriteString("hud", language[20], 15);
    }, 77000);

    setTimeout(function () {
        WriteString("hud", language[21], 15);
        interpolarTamanhoTexto("hud", titleFontSize, 2.3, 0.005);
    }, 79000);

    setTimeout(function () {
        WriteString("hud", language[22], 15);
    }, 81000);

    setTimeout(function () {
        elementoHUD.style.top = "85%";
        elementoHUD.style.bottom = "15%";
    }, 83000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG17;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG17u, 0.7);
        WriteString("hud", language[23], 15);
    }, 84000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG02;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG02u, 0.7);
        WriteString("hud", language[24], 15);
    }, 88000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG03;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG03u, 0.7);
    }, 92000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG07;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG07u, 0.7);
        WriteString("hud", language[25], 15);
    }, 96000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG10;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG10u, 0.7);
        WriteString("hud", language[26], 15);
    }, 100000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG11;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG11u, 0.7);
        WriteString("hud", language[27], 15);
    }, 104000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG15;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG15u, 0.7);
    }, 108000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG19;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG19u, 0.7);
        WriteString("hud", language[28], 15);
    }, 112000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG22;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG22u, 0.7);
    }, 116000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG23;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG23u, 0.7);
        WriteString("hud", language[29], 15);
    }, 120000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG24;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG24u, 0.7);
    }, 124000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG28;
        elementoImagem.style.opacity = "1";
        fadeBackground(assets.IMG28u, 0.7);
        WriteString("hud", language[30], 15);
    }, 128000);

    setTimeout(function () {
        bodyCover.style.background = "rgba(0, 0, 0, 1)";
        elementoDias.style.opacity = "0";
        elementoImagem.src = assets.IMG28;
        elementoImagem.style.opacity = "0";
        fadeBackground(assets.IMG28u, 1);
    }, 132000);

    setTimeout(function () {
        WriteString("hud", language[31], 6);
        elementoHUD.style.top = "50%";
        elementoHUD.style.bottom = "50%";
    }, 136000);

    setTimeout(function () {
        document.title = "The Counter1011";
        elementoHUD.textContent = "<3";
        console.log("Foi de coração, com todo meu carinho, para você que é tão especial, e que também faz eu me sentir especial. Eu espero que você tenha gostado. Na real provavelmente você não vai estar vendo essa mensagem.");

    }, 147000);
}
