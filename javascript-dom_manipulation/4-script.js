// Obtén una referencia al elemento con el id "add_item"
var addItem = document.getElementById("add_item");

// Agrega un evento de clic al elemento "add_item"
addItem.addEventListener("click", function() {
  // Crea un nuevo elemento <li>
  var newListItem = document.createElement("li");

  // Establece el contenido del nuevo elemento <li> como "Item"
  newListItem.textContent = "Item";

  // Obtén una referencia a la lista <ul> con clase "my_list"
  var myList = document.querySelector(".my_list");

  // Agrega el nuevo elemento <li> a la lista <ul>
  myList.appendChild(newListItem);
});
