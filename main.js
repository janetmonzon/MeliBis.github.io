/* function startName(){

} */
function startTrivia() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    
    if (name !== "") {
      alert("¡Bienvenido/a, " + name + "!");
      // Aquí puedes continuar con la lógica de tu trivia
    } else {
      alert("Por favor, ingresa tu nombre antes de comenzar la trivia.");
    }
  }