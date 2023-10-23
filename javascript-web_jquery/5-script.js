$(document).ready(function() {
  // Asignar un controlador de eventos al elemento con ID 'add_item'
  $('#add_item').click(function() {
    // Crear un nuevo elemento <li> con el contenido "Item"
    var newItem = $('<li>Item</li>');
    
    // Agregar el nuevo elemento a la lista UL.my_list
    $('ul.my_list').append(newItem);
  });
});
