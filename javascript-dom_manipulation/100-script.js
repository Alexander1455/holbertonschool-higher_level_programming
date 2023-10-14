document.addEventListener("DOMContentLoaded", function() {
    // Obtén referencias a los elementos relevantes
    var addButtonItem = document.getElementById("add_item");
    var removeItemButton = document.getElementById("remove_item");
    var clearListButton = document.getElementById("clear_list");
    var myList = document.querySelector(".my_list");
  
    // Agregar un elemento a la lista cuando se hace clic en "Add item"
    addButtonItem.addEventListener("click", function() {
      var newListItem = document.createElement("li");
      newListItem.textContent = "Item";
      myList.appendChild(newListItem);
    });
  
    // Quitar el último elemento de la lista cuando se hace clic en "Remove item"
    removeItemButton.addEventListener("click", function() {
      var listItems = myList.querySelectorAll("li");
      if (listItems.length > 0) {
        myList.removeChild(listItems[listItems.length - 1]);
      }
    });
  
    // Eliminar todos los elementos de la lista cuando se hace clic en "Clear list"
    clearListButton.addEventListener("click", function() {
      myList.innerHTML = "";
    });
  });
  