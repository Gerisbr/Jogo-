// Criado os objetos CARTA com seus atributos.
const gemeos = {
    nome: "gemeos",
    imagem: "img/gemeos.jpg",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 2
    }
}

const Touro = {
    nome: "Touro",
    imagem: "img/touro.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 0
    }
}

const Arquario = {
    nome: "Arquario",
    imagem: "img/aquarius.jpg",
    atributos: {
        ataque: 8,
        defesa: 9,
        magia: 3
    }
}

const Cancer = {
    nome: "Cancer",
    imagem: "img/Cancer.jpg",
    atributos: {
        ataque: 6,
        defesa: 7,
        magia: 3
    }
}

const omega = {
    nome: "omega",
    imagem: "img/omega.jpg",
    atributos: {
        ataque: 6,
        defesa: 4,
        magia: 3
    }
}
const escopiao = {
    nome: "escopiao",
    imagem: "img/escopiao.jpg",
    atributos: {
        ataque: 6,
        defesa: 3,
        magia: 3
    }
}
const fenix = {
    nome: "fenix",
    imagem: "img/fenix.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}
const virgem = {
    nome: "virgem",
    imagem: "img/virgem.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}
const sagitario = {
    nome: "sagitario",
    imagem: "img/sagitario.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}
const libra = {
    nome: "libra",
    imagem: "img/libra.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}
const ares = {
    nome: "lares",
    imagem: "img/ares.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}
const capriconio = {
    nome: "capriconio",
    imagem: "img/capriconio.jpg",
    atributos: {
        ataque: 6,
        defesa: 6,
        magia: 3
    }
}

const cartas = [gemeos, Touro,Arquario, Cancer,fenix,escopiao,omega,virgem,sagitario,libra,ares,capriconio];
let cartaJogador, cartaMaquina;


// Criado função de Sortear as cartas
function SortearCarta(){
    const numeroDeCartas = 12;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    
    
    // Laço para não repetir as cartas entres os competidores
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
    
    
}

// Exibir a carta do Jogador e carta Maquina
function ExibirCartaJogador(){
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;

    //pegar e listar atributos Jogador
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}

function ExibirCartaMaquina(){
    let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;

    //pegar e listar atributos Máquina
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaMaquina.atributos);
}


function PegarAtributosMaquina(){

}
function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio="";
    for(let atributo in atributosDaCarta){
        botaoRadio = ` <input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li> ${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
}

function Jogar(){
    
}

const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () => {   
   
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 4000;
// Inserindo evento no botão SORTEAR_CARTA.
const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {
    SortearCarta();
    ExibirCartaJogador();
    ExibirCartaMaquina();
    document.querySelector("#btnJogar").disabled = false;
};





