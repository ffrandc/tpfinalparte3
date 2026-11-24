class Oso {
  constructor(x, y, tamano) {
    this.x = x;
    this.y = y;
    this.tamano = tamano;
  }

  mover(dx, dy) {
    this.x = constrain(this.x + dx, this.tamano, width - this.tamano); //limites de la pantalla p el oso
    this.y = constrain(this.y + dy, this.tamano, height - this.tamano);
  }

  dibujar() {
    fill(139, 69, 19);
    ellipse(this.x, this.y, this.tamano * 2, this.tamano * 2);
    fill(100, 50, 15);
    ellipse(this.x - 7, this.y - 7, 5, 5);
    ellipse(this.x + 7, this.y - 7, 5, 5);
  }
}
