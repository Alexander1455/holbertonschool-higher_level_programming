$(document).ready(function() {
  // Realizar una solicitud AJAX para obtener los datos desde la URL
  $.ajax({
    url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
    method: 'GET',
    success: function(data) {
      // Extraer el nombre del personaje de los datos recibidos
      var characterName = data.name;
      
      // Mostrar el nombre del personaje en el elemento <div> con ID 'character'
      $('#character').text(characterName);
    },
    error: function() {
      $('#character').text('Error al cargar el nombre del personaje');
    }
  });
});
