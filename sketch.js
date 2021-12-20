
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro ();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao ();
  incluiPonto ();
  marcaPonto ();
  
}


