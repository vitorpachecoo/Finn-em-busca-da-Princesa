let xInimigos = [600, 600, 600, 600, 600, 600];
let yInimigos = [100, 150, 210, 320, 380, 440];
let velocidadeInimigos = [2, 2.5, 3.2, 5, 3.3, 3];
let comprimentoInimigo = 50;
let alturaInimigo = 50;

function mostraInimigo(){
    for (let i = 0; i < imagemInimigos.length; i = i + 1){
      image(imagemInimigos[i], xInimigos[i], yInimigos[i], comprimentoInimigo, alturaInimigo);
  }
}

function movimentaInimigo(){
    for (let i = 0; i < imagemInimigos.length; i = i + 1){
      xInimigos[i] -= velocidadeInimigos[i];
  }
}

//volta Posição Inicial do Inimigo
function reseta(){
    for (let i = 0; i < imagemInimigos.length; i = i + 1){
      if (passouTodaTela(xInimigos[i])){
        xInimigos[i] = 600;
    }
  }
}

//retorna toda vez que o boneco passa tal coordenada
function passouTodaTela(xInimigos){
  return xInimigos < - 50;
}
