// Get a reference to the element with id "red_header"
var redHeader = document.getElementById("red_header");

// Add a click event listener to it
redHeader.addEventListener("click", function() {
  // Get a reference to the header element
  var header = document.querySelector("header");

  // Change the text color to red (#FF0000)
  header.style.color = "#FF0000";
});
