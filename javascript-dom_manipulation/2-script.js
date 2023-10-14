// Get a reference to the element with id "red_header"
var redHeader = document.getElementById("red_header");

// Get a reference to the header element
var header = document.querySelector("header");

// Add a click event listener to the "red_header" element
redHeader.addEventListener("click", function() {
  // Add the "red" class to the header element
  header.classList.add("red");
});
