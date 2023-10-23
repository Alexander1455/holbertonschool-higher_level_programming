$(document).ready(function() {
  // Realizar una solicitud AJAX para obtener los datos desde la URL
  $.ajax({
    url: 'https://swapi-api.hbtn.io/api/films/?format=json',
    method: 'GET',
    success: function(data) {
      // Recorrer la lista de películas y agregar cada título a la lista
      var movies = data.results;
      var listMovies = $('#list_movies');
      
      $.each(movies, function(index, movie) {
        listMovies.append('<li>' + movie.title + '</li>');
      });
    },
    error: function() {
      $('#list_movies').text('Error al cargar la lista de películas');
    }
  });
});
