// --- Function to calculate area of Triangle ---
function calculateTriangleArea() {
  let a = +document.getElementById("sideA").value;
  let b = +document.getElementById("sideB").value;
  let c = +document.getElementById("sideC").value;
  let result = document.getElementById("triangleResult");

  // Check valid input and triangle condition
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    result.innerHTML = "Invalid Inputs";
    return;
  }

  // Heron's Formula
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  result.innerHTML = `Area of Triangle: ${area.toFixed(2)} unit sq.`;
}

// --- Function to calculate area of Rectangle ---
function calculateRectangleArea() {
  let l = +document.getElementById("rectLength").value;
  let b = +document.getElementById("rectBreadth").value;
  let result = document.getElementById("rectangleResult");

  if (l <= 0 || b <= 0) {
    result.innerHTML = "Invalid Inputs";
    return;
  }

  let area = l * b;
  result.innerHTML = `Area of Rectangle: ${area.toFixed(2)} unit sq.`;
}

// --- Function to calculate area of Circle ---
function calculateCircleArea() {
  let r = +document.getElementById("circleRadius").value;
  let result = document.getElementById("circleResult");

  if (r <= 0) {
    result.innerHTML = "Invalid Inputs";
    return;
  }

  let area = Math.PI * r * r;
  result.innerHTML = `Area of Circle: ${area.toFixed(2)} unit sq.`;
}
