// Obtén una referencia al elemento <ul> con el id "list_movies"
var listMovies = document.getElementById("list_movies");

// URL de la API de Star Wars para obtener las películas
var apiUrl = "https://swapi-api.hbtn.io/api/films/?format=json";

// Realiza una solicitud Fetch para obtener los datos de las películas
fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Recorre los datos de las películas
    data.results.forEach(function(movie) {
      // Crea un nuevo elemento <li> para cada película y establece su texto como el título de la película
      var movieListItem = document.createElement("li");
      movieListItem.textContent = movie.title;

      // Agrega el elemento <li> a la lista <ul> con el id "list_movies"
      listMovies.appendChild(movieListItem);
    });
  })
  .catch(function(error) {
    console.error("Error al obtener los datos de las películas:", error);
  });
