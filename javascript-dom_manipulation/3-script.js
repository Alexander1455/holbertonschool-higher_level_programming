// Obtén una referencia al elemento con el id "toggle_header"
var toggleHeader = document.getElementById("toggle_header");

// Obtén una referencia al elemento "header"
var header = document.querySelector("header");

// Agrega un evento de clic al elemento "toggle_header"
toggleHeader.addEventListener("click", function() {
  // Verifica si el elemento "header" tiene la clase "red"
  if (header.classList.contains("red")) {
    // Si tiene la clase "red", la eliminamos y agregamos la clase "green"
    header.classList.remove("red");
    header.classList.add("green");
  } else {
    // Si no tiene la clase "red", significa que tiene la clase "green", así que hacemos lo contrario
    header.classList.remove("green");
    header.classList.add("red");
  }
});
