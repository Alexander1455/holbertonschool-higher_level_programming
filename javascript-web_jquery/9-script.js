$(document).ready(function() {
  // Realizar una solicitud AJAX para obtener los datos desde la URL
  $.ajax({
    url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
    method: 'GET',
    success: function(data) {
      // Mostrar la traducción de "hello" en el elemento <div> con ID 'hello'
      $('#hello').text(data.hello);
    },
    error: function() {
      $('#hello').text('Error al cargar la traducción');
    }
  });
});
