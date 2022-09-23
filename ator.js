//Actor code

let xAtor = 275;
let yAtor = 550;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 40);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 2;
  }
}    
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemInimigos.length; i++){
    colisao = collideRectCircle(xInimigos[i], yInimigos[i], comprimentoInimigo, alturaInimigo, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 530;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
   return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 520;
}
