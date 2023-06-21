
let paises= ['./assets/mexico.jpg', './assets/peru.jpg']

let resCorrectas= [3,2]
let opciones= [];

opciones.push(["Quesadillas","Tostadas","Tacos"]);
opciones.push(["Chicharron de mariscos","Ceviche"," Leche de tigre"]);

let posicionActual=0;
let respuestasAcertadas=0;

function startName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    
    if (name !== "") {
      alert("¡Bienvenido/a, " + name + "!");
      // Aquí puedes continuar con la lógica de tu trivia
    } else {
      alert("Por favor, ingresa tu nombre antes de comenzar la trivia.");
    }
  }

  function comenzarJuego(){
    //reseteamos las variables
    posicionActual = 0;
    respuestasAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla_inicial").style.display = "none";
    document.getElementById("pantalla_juego").style.display = "block";
    cargarImagen();

}

function cargarImagen(){
  //controlo sis se acabaron las banderas
  if(paises.length <= posicionActual){
      terminarJuego();
  }
  else{//cargo las opciones
      //limpiamos las clases que se asignaron
      limpiarOpciones();

      document.getElementById("imgPais").src = "img/" + paises[posicionActual];
      document.getElementById("n0").innerHTML = opciones[posicionActual][0];
      document.getElementById("n1").innerHTML = opciones[posicionActual][1];
      document.getElementById("n2").innerHTML = opciones[posicionActual][2];
  }
}


function limpiarOpciones(){
  document.getElementById("n0").className = "nombre";
  document.getElementById("n1").className = "nombre";
  document.getElementById("n2").className = "nombre";

  document.getElementById("l0").className = "letra";
  document.getElementById("l1").className = "letra";
  document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
  if(opElegida==correcta[posActual]){//acertó
      //agregamos las clases para colocar el color verde a la opcion elegida
      document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
      document.getElementById("l" + opElegida).className = "letra letraAcertada";
      cantidadAcertadas++;
  }else{//no acerto
      //agramos las clases para colocar en rojo la opcion elegida
      document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
      document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

      //opcion que era correcta
      document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
      document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
  }
  posActual++;
  //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
  setTimeout(cargarBandera,1000);
}
function terminarJuego(){
  //ocultamos las pantallas y mostramos la pantalla final
  document.getElementById("pantalla_juego").style.display = "none";
  document.getElementById("pantalla_final").style.display = "block";
  //agreamos los resultados
  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
  //ocultamos las pantallas y activamos la inicial
  document.getElementById("pantalla_final").style.display = "none";
  document.getElementById("pantalla_inicial").style.display = "block";
  document.getElementById("pantalla_juego").style.display = "none";
}