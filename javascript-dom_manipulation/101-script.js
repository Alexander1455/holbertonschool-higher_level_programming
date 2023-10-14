document.addEventListener("DOMContentLoaded", function() {
    // Obtén referencias a los elementos relevantes
    var languageCodeSelect = document.getElementById("language_code");
    var translateButton = document.getElementById("btn_translate");
    var helloElement = document.getElementById("hello");
  
    // Agregar un evento de clic al botón de traducción
    translateButton.addEventListener("click", function() {
      // Obtén el valor seleccionado en el cuadro de selección (código de idioma)
      var selectedLanguage = languageCodeSelect.value;
  
      // Verifica si se seleccionó un idioma válido
      if (selectedLanguage) {
        // Construye la URL de la API de traducción con el código de idioma
        var apiUrl = `https://hellosalut.stefanbohacek.dev/?lang=${selectedLanguage}`;
  
        // Realiza una solicitud Fetch para obtener la traducción
        fetch(apiUrl)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            // Muestra la traducción en el elemento con el id "hello"
            helloElement.textContent = data.hello;
          })
          .catch(function(error) {
            console.errors("Error al obtener la traducción:", error);
          });
      }
    });
  });
  