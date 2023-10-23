$(document).ready(function() {
  $('#add_item').click(function() {
    // Agregar un nuevo elemento <li> con el contenido "Item" a la lista
    $('ul.my_list').append('<li>Item</li>');
  });

  $('#remove_item').click(function() {
    // Eliminar el último elemento <li> de la lista
    $('ul.my_list li:last').remove();
  });

  $('#clear_list').click(function() {
    // Eliminar todos los elementos <li> de la lista
    $('ul.my_list').empty();
  });
});
