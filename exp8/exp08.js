let inputFocused = false;
let mouseOut = false;

// Mouse over on name
function changeColorOnHover() {
  if (!inputFocused && mouseOut) {            // only when input not focused
    document.body.style.backgroundColor = "#4fff5b"; // Green
    mouseOut = false;
  }
}

// Mouse out from name
function resetColor() {
  if (!inputFocused) {                        // only when input not focused
    document.body.style.backgroundColor = "#63ddf0"; // Light blue
    mouseOut = true;
  }
}

// Focus on input
function changeColorOnFocus(input) {
  inputFocused = true;
  document.body.style.backgroundColor = "#f682b6"; // Pink
}

// Blur from input
function resetInputColor(input) {
  inputFocused = false;
  document.body.style.backgroundColor = "#63ddf0"; // Light blue
}


