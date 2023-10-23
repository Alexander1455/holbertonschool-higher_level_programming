$(document).ready(function() {
  // Asignar un controlador de eventos al elemento con ID 'toggle_header'
  $('#toggle_header').click(function() {
    // Toggle entre las clases 'red' y 'green' en el elemento <header>
    $('header').toggleClass('red green');
  });
});
