class Carril {
  constructor(y, vel, dir, tresAutos) {
    this.y = y;
    this.vel = vel;
    this.dir = dir;
    this.vehiculos = [];

    this.vehiculos.push(new Vehiculo(50, this.y, 60, 24, this.vel, this.dir));
    this.vehiculos.push(new Vehiculo(320, this.y, 60, 24, this.vel, this.dir));
    
    if (tresAutos) {
      this.vehiculos.push(new Vehiculo(580, this.y, 60, 24, this.vel, this.dir));
    }
  }

  mover() {
    for (let v of this.vehiculos) {
      v.mover();
    }
  }

  dibujar() {
    fill(60);
    rect(0, this.y - 25, width, 50);
    stroke(255, 255, 0);
    line(0, this.y + 25, width, this.y + 25);
    noStroke();
    for (let v of this.vehiculos) {
      v.dibujar();
    }
  }

  verificarChoque(oso) {
    for (let v of this.vehiculos) {
      if (v.choca(oso)) {
        return true; //derrota, no atravesar los carriles  colisión 
      }
    }
    return false; //atravesar los carriles sin chocar
  }
}
