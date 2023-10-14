document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al elemento con el id "hello"
    var helloElement = document.getElementById("hello");
  
    if (helloElement) {
      // URL para obtener la traducción de "hello" en francés
      var apiUrl = "https://hellosalut.stefanbohacek.dev/?lang=fr";
  
      // Realiza una solicitud Fetch para obtener la traducción
      fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Verifica si helloElement existe nuevamente antes de establecer el contenido
          if (helloElement) {
            // Accede al campo "hello" en el objeto JSON para obtener la traducción
            helloElement.textContent = data.hello;
          }
        })
        .catch(function(error) {
          console.error("Error al obtener la traducción:", error);
        });
    }
  });
  