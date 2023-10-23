$(document).ready(function() {
  // Asignar un controlador de eventos al elemento con ID 'update_header'
  $('#update_header').click(function() {
    // Actualizar el texto del elemento <header> a "New Header!!!"
    $('header').text('New Header!!!');
  });
});
