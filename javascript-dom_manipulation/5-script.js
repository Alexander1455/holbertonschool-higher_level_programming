// Obtén una referencia al elemento con el id "update_header"
var updateHeader = document.getElementById("update_header");

// Agrega un evento de clic al elemento "update_header"
updateHeader.addEventListener("click", function() {
  // Obtén una referencia al elemento de encabezado
  var header = document.querySelector("header");

  // Actualiza el contenido del elemento de encabezado
  header.textContent = "New Header!!!";
});
