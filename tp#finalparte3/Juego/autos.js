class Vehiculo {
  constructor(x, y, ancho, alto, vel, dir) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.vel = vel;
    this.dir = dir;
    this.col = color(random(180, 240), random(50, 100), random(100, 200));
  }

  mover() {
    this.x += this.vel * this.dir; //movimiento, 1 o -1 (dir)
    if (this.x > width) { //sale derecha, aparece izquierda
      this.x = -this.ancho;
    }
    if (this.x < -this.ancho) { // sale izquierda, aparece derecha
      this.x = width;
    }
  }

  dibujar() {
    fill(this.col);
    rect(this.x, this.y - this.alto / 2, this.ancho, this.alto, 5); //el 5 hace que las esquinas del auto sean redondas
  }

  choca(oso) {
    if (oso.x + 10 > this.x && oso.x - 10 < this.x + this.ancho && oso.y + 10 > this.y - 12 && oso.y - 10 < this.y + 12) {
      return true; //entorno del oso para veriificar el choque
    }
    return false;
  }
}
