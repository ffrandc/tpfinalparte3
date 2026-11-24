class Juego {
  constructor() {
  }//no necesitAMOS variables en este constructor, la clase de juego está hecha para que "dibujar" esté en conjunto

  dibujar() {
    background(40);

    fill(0, 0, 255);
    rect(0, 0, width, 70);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("CASINO", width / 2, 35);

    fill(120);
    rect(0, height - 50, width, 50);

    for (let c of carriles) {
      c.mover();
      c.dibujar();
      if (c.verificarChoque(oso)) {
        sonidoAutos.stop();
        sonidoChoque.play();
        pantalla = 3;
      }
    }

    oso.dibujar();

    if (oso.y < 70) {
      sonidoAutos.stop();
      sonidoCasino.play();
      pantalla = 2;
    }
  }
}
