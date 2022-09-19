//enemy code

let xInimigo = 600;
let yInimigo = 40;

function mostraInimigo(){
  image(imagemInimigo, xInimigo, yInimigo, 60, 60);
}

function movimentaInimigo(){
  xInimigo -= 2;
}
