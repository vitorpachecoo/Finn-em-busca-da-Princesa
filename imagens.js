//Game Images

let imagemPainel;
let imagemDoAtor;
let imagemInimigo;
let imagemInimigo2;
let imagemInimigo3;
let imagemInimigo4;
let imagemInimigo5;
let imagemInimigo6;
let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemPainel = loadImage("imagens/painel.jpg");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemInimigo = loadImage ("imagens/inimigo-1.png")
  imagemInimigo2 = loadImage("imagens/inimigo-2.png");
  imagemInimigo3 = loadImage("imagens/inimigo-3.png");
  imagemInimigo4 = loadImage("imagens/inimigo-4.png");
  imagemInimigo5 = loadImage("imagens/inimigo-5.png");
  imagemInimigo6 = loadImage("imagens/inimigo-6.png");
  imagemInimigos = [imagemInimigo, imagemInimigo2,       imagemInimigo3,     imagemInimigo4, imagemInimigo5,     imagemInimigo6];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
