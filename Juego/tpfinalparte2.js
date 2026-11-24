//tpfinalparte2 Mia Lombardi 125612/4 y Francisco Di Cianni 125565/5. 
//Comisión 3. Profesor David Bedoian.
//https://youtu.be/XQl3I6q_Vm0

let pantalla = 0;
let oso;
let carriles = [];
let ted;
let fondofinal;
let imgVictoria;
let fondoCreditos;
let juego;
let sonidoCasino;
let sonidoAutos;
let sonidoChoque;

function setup() {
  createCanvas(800, 400);
fondoCreditos = loadImage("data/fondoCreditos.jpg");
  fondofinal = loadImage("data/fondoFinal.jpg");
  ted = loadImage("data/introTed.jpg");
  imgVictoria = loadImage("data/Victoria.jpg");

  sonidoCasino = loadSound("data/sonidocasino.mp3");
  sonidoAutos = loadSound("data/autos.mp3");
  sonidoChoque = loadSound("data/choque.mp3");

  juego = new Juego();
  iniciarJuego();
}

function iniciarJuego() {
  oso = new Oso(width / 2, height - 25, 18);
  carriles = [];
  carriles.push(new Carril(115, 4.5, 1, false));
  carriles.push(new Carril(170, 4.0, -1, true));
  carriles.push(new Carril(225, 5.5, 1, false));
  carriles.push(new Carril(280, 4.5, -1, true));
}

function draw() {
  if (pantalla == 0) {
    intro();
  } else if (pantalla == 1) {
    juego.dibujar();
  } else if (pantalla == 2) {
    victoria();
  } else if (pantalla == 3) {
    derrota();
  } else if (pantalla == 4) {
    creditos();
  }
}

function intro() {
  background(30);
  if (ted) {
    image(ted, 0, 0, width, height);
  }
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("TED CRUZA LA APUESTA", width / 2, 65);

  textSize(16);
  text("INSTRUCCIONES:\n\n• Ayuda a Ted a llegar al Casino sin ser atropellado.\n• Usa las FLECHAS del teclado para moverte.", width / 2, 150);

  hacerBoton(300, 230, 200, 45, "JUGAR");
  hacerBoton(300, 290, 200, 45, "CRÉDITOS");
}

function creditos() {
  background(20);
  image(fondoCreditos, 0, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("CRÉDITOS", width / 2, 60);
  textSize(16);
 text("Comisión 3 - Profesor Bedoian David", width / 2, 125);
  text("Hecho por:", width / 2, 160);
  text("Lombardi Mia y Di Cianni Francisco", width / 2, 195);
  text("PMIW - Diseño Multimedial", width / 2, 235);
  hacerBoton(300, 310, 200, 45, "VOLVER");
}

function victoria() {
  background(0);
  if (imgVictoria) {
    image(imgVictoria, 0, 0, width, height);
  }
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(33);
  text("¡TED LLEGÓ AL CASINO!", width / 2, 150);
  fill(255);
  textSize(32);
  text("¡TED LLEGÓ AL CASINO!", width / 2, 150);

  hacerBoton(300, 240, 200, 45, "REINICIAR");
}

function derrota() {
  background(0);
  if (fondofinal) {
    image(fondofinal, 0, 0, width, height);
  }
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("¡TED FUE ATROPELLADO!", width / 2, 150);

  hacerBoton(300, 240, 200, 45, "REINICIAR");
}

function keyPressed() {
  if (pantalla == 1) {
    let paso = 25;
    if (keyCode === UP_ARROW) oso.mover(0, -paso);
    if (keyCode === DOWN_ARROW) oso.mover(0, paso);
    if (keyCode === LEFT_ARROW) oso.mover(-paso, 0);
    if (keyCode === RIGHT_ARROW) oso.mover(paso, 0);
  }
}

function mousePressed() {
  if (pantalla == 0) {
    if (boton(300, 230, 200, 45)) {
      iniciarJuego();
      sonidoAutos.loop();
      pantalla = 1;
    } else if (boton(300, 290, 200, 45)) {
      pantalla = 4;
    }
  } else if (pantalla == 4) {
    if (boton(300, 310, 200, 45)) {
      pantalla = 0;
    }
  } else if (pantalla == 2) {
    if (boton(300, 240, 200, 45)) {
      sonidoCasino.stop();
      iniciarJuego();
      pantalla = 0;
    }
  } else if (pantalla == 3) {
    if (boton(300, 240, 200, 45)) {
      sonidoChoque.stop();
      iniciarJuego();
      pantalla = 0;
    }
  }
}

function hacerBoton(x, y, ancho, alto, texto) {
  fill(220, 0, 0);
  rect(x, y, ancho, alto);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x + ancho / 2, y + alto / 2);
}

function boton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
