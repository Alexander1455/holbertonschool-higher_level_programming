$(document).ready(function() {
  // Asigna un controlador de eventos al elemento con ID 'red_header'
  $('#red_header').click(function() {
    // Cambia el color del texto del elemento <header> a rojo (#FF0000)
    $('header').css('color', '#FF0000');
  });
});
