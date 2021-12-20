let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somPontos;
let somColisao;
let somTrilha;

function preload() {
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage ("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  somTrilha = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPontos= loadSound("Sons/pontos.wav");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3];
  
  
}