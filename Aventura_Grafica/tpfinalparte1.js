// COMISION 3 MIA LOMBARDI (125612/4) FRANCISCO DI CIANNI (125565/5).
// Tema del trabajo: Un día en la vida del oso Ted. Subtema: Ludopatía.
// https://youtu.be/qltxd4_aAJ8

  let audioJuego;
  let mensaje;
  let SMensaje = false;
   let pantalla=0;
let oso = [];
let animacionOso = [];
let ludoOso = false;
let ludoOsoSi =false;
let movCreditos= -180;
let inicioCreditos= 0;
let MusicaCreditos;
let Casados=false;

function setup() {
createCanvas(800, 450);
MusicaCreditos=loadSound('data/CCHcreditos.mp3');
mensaje= loadSound('data/mensaje.mp3');
audioJuego= loadSound('data/The_Final_Choice.mp3' );

for(let i=0;i<18;i++){
oso[i]= loadImage("data/oso/"+nf(i+1,4)+".png");
}

for(let o=0;o<10;o++){
  animacionOso[o]= loadImage("data/animacionOso/"+nf(o, 4)+".png");
}

}

function draw() {
  if(audioJuego && audioJuego.isLoaded()){
  if(pantalla>=1 && pantalla<=16 ){
    if(!audioJuego.isPlaying()){
  audioJuego.loop();
}
  } else
  { if (audioJuego.isPlaying()){
    audioJuego.stop();
  }
  }
  }

if (pantalla==0){
  Intro();
}
else if (pantalla==1){
  pantalla1();
  if (!SMensaje){
  mensaje.play();
  SMensaje =true;
  }
}

else if(pantalla==2){
  pantalla2();
}
else if (pantalla==3){
  pantalla3();
}
else if (pantalla==4){
  pantalla4();
}
else if (pantalla==5){
  pantalla5();
}
else if(pantalla==6){
  pantalla6();
}
else if(pantalla==7){
  pantalla7();
}
else if(pantalla==8){
  pantalla8();
}
else if(pantalla==9){
  pantalla9();
}
else if(pantalla==10){
  pantalla10();
}
else if(pantalla==11){
  pantalla11();
}
else if(pantalla==12){
  pantalla12();
}
else if(pantalla==13){
  pantalla13();
}
else if(pantalla==14){
  pantalla14();
}
else if(pantalla==15){
  pantalla15();
}
else if(pantalla==16){
  pantalla16();
}
else if(pantalla==17){
  pantalla17();
    if (!Casados){
  MusicaCreditos.loop();
  Casados =true;
    }
  }


//fill(0, 0, 255);
textSize(14);
//text("X: " + mouseX + " | Y: " + mouseY, mouseX + 10, mouseY - 10);
}

function AnimCreditos(osito, baile){
  if(osito[inicioCreditos]){
    imageMode(CENTER);
    image(osito[inicioCreditos],width/2, height/2, 800, 450);
  }
  if (frameCount % baile ===0){
    inicioCreditos++;
  }
  if(inicioCreditos>= osito.length){
    inicioCreditos=0;
  }
}
function creditos(bajarTexto){
  fill(0);
  textAlign(LEFT);
  textSize(28);
  text("FIN", 80, movCreditos);
  text("Comision 3 Profesor Bedoian David", 80, movCreditos+45);
  text("Hecho por:", 80, movCreditos+85);
  text("Lombardi Mia y Di Cianni Francisco", 80, movCreditos+130);
  text("CREDITOS", 80, movCreditos+170);
movCreditos+=bajarTexto;
if (movCreditos>height+50){
  movCreditos=-180;
}
}
function Intro(){
  background(255);
  imageMode(CENTER);
  image(oso[0], width/2, height/2, 800, 450);

}

function pantalla1(){
  background(0, 255, 0);
image(oso[1], width/2, height/2, 800, 450);
}

function pantalla2(){
  background(0);
  image(oso[2], width/2, height/2, 800, 450);
}

function pantalla3(){
  background(3);
  image(oso[3], width/2, height/2, 800, 450);
}

function pantalla4(){
  background(4);
  image(oso[4], width/2, height/2, 800, 450);
}

function pantalla5(){
  background(5);
  image(oso[5], width/2, height/2, 800, 450);
}

function pantalla6(){
  background(6);
  image(oso[6], width/2, height/2, 800, 450);
}

function pantalla7(){
  background(7);
  image(oso[7], width/2, height/2, 800, 450);
}

function pantalla8(){
  background(8);
  image(oso[8], width/2, height/2, 800, 450);
}
function pantalla9(){
  background(9);
  image(oso[9], width/2, height/2, 800, 450);
}
function pantalla10(){
  background(10);
  image(oso[10], width/2, height/2, 800, 450);
}
function pantalla11(){
  background(11);
  image(oso[11], width/2, height/2, 800, 450);
  if (ludoOso){
    noStroke();
    fill(0);
    quad(659, 75, 721, 75, 720, 121, 660, 121);
}
if (ludoOsoSi){
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Si", 690, 106);
}
}
function pantalla12(){
  background(12);
  image(oso[12], width/2, height/2, 800, 450);
}
function pantalla13(){
  background(13);
  image(oso[13], width/2, height/2, 800, 450);
}
function pantalla14(){
  background(14);
  image(oso[14], width/2, height/2, 800, 450);
}
function pantalla15(){
  background(15);
  image(oso[15], width/2, height/2, 800, 450);
}
function pantalla16(){
  background(16);
  image(oso[16], width/2, height/2, 800, 450);
}
function pantalla17(){
  background(18);
  AnimCreditos(animacionOso, 8);
  creditos(1);
  fill(0, 0, 255);
  quad(592, 25, 750, 25,750, 70, 592, 70);
  textSize(28);
  fill(255);
  textAlign(CENTER);
  text("REINICIAR", 669, 57);
}



function mousePressed(){
  userStartAudio();
  if (pantalla==0){
    if(mouseX>259 && mouseX<544 && mouseY>37 && mouseY<177){
    pantalla=1;
    }
  }
 else if(pantalla==1){
    if(mouseX>19 && mouseX<250 && mouseY>348 && mouseY<418){
      pantalla=2;
    }
  }
 else if (pantalla==2){
    if(mouseX>272 && mouseX<459 && mouseY>98 && mouseY<154){
    pantalla=3;
  }
}
else if (pantalla==3){
  if(mouseX>59 && mouseX<402 && mouseY>40 && mouseY<120){
  pantalla=4;
}
  else if(mouseX>59 && mouseX<400 && mouseY>150 && mouseY<230){
    pantalla=6;
}
}
else if(pantalla==4){
 if(mouseX>73 && mouseX<304 && mouseY>350 && mouseY<400){
  pantalla=5;
}
}
else if(pantalla==5){
  if(mouseX>73 && mouseX<304 && mouseY>350 && mouseY<400){
    pantalla=7;
}
}
else if(pantalla==7){
  if(mouseX>594 && mouseX<780 && mouseY>25 && mouseY<80){
pantalla=8;
}
}
else if(pantalla==8){
  if(mouseX>462 && mouseX<758 && mouseY>131 && mouseY<215){
    pantalla=9;
  }
}
else if(pantalla==9){
  if(mouseX>597 && mouseX<760 && mouseY>44 && mouseY<90){
    pantalla=10;
  }
}
else if(pantalla==10){
  if(mouseX>27 && mouseX<215 && mouseY>124 && mouseY<193){
    pantalla=11;
  }
  else if (mouseX>560 && mouseX<767 && mouseY>116 && mouseY<200){
    pantalla=15;
  }
}
else if(pantalla==11){
  if(mouseX>578 && mouseX<641  && mouseY>73 && mouseY<121){
    pantalla=12;
  }
  else if(mouseX>659 && mouseX<721 && mouseY>75 && mouseY<121){
    if (!ludoOsoSi){
ludoOso=true;
ludoOsoSi=true;
    } else{
    pantalla=12;
}
  }
  }
  else if(pantalla==12){
    if(mouseX>634 && mouseX<747 && mouseY>379 && mouseY<417){
    pantalla=13;
  }
  }
  else if(pantalla==13){
    if(mouseX>497 && mouseX<770 && mouseY>33 && mouseY<99){
      pantalla=14;
    }
}
else if(pantalla==15){
  if(mouseX>415 && mouseX<720 && mouseY>355 && mouseY<424){
  pantalla=16;
}
}
else if(pantalla==16){
  if(mouseX>62 && mouseX<339 && mouseY>360 && mouseY<421){
    pantalla=17;
  }
}
else if(pantalla==6){
  if(mouseX>31 && mouseX<282 && mouseY>375 && mouseY<430){
    pantalla=17;
  }
}
else if(pantalla==14){
  if(mouseX>531 && mouseX<790 && mouseY>21 && mouseY<77){
    pantalla=17;
  }
}
else if(pantalla==17){
  if (mouseX>592 && mouseX<750 && mouseY>25 && mouseY<70){
    pantalla=0;
 ludoOso = false;
 ludoOsoSi =false;
movCreditos= -180;
 inicioCreditos= 0;
 SMensaje =false;
 if(MusicaCreditos && MusicaCreditos.isPlaying()){
   MusicaCreditos.stop();
 }
 Casados=false;
}
}
}
