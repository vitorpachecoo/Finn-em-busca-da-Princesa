function setup() {
  createCanvas(550, 600);
  somDaTrilha.loop();
}

function draw() {
  background(imagemPainel);
  mostraAtor();
  movimentaAtor();
  mostraInimigo();
  movimentaInimigo();
  reseta();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
