// Obtén una referencia al elemento con el id "character"
var characterElement = document.getElementById("character");

// URL de la API de Star Wars
var apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";

// Realiza una solicitud Fetch para obtener los datos del personaje
fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Extrae el nombre del personaje de los datos
    var characterName = data.name;

    // Asigna el nombre del personaje al elemento con el id "character"
    characterElement.textContent = characterName;
  })
  .catch(function(error) {
    console.error("Error al obtener los datos del personaje:", error);
  });
