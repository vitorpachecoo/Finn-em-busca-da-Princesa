//Actor code

let xAtor = 350;
let yAtor = 360;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 40, 95);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
}
