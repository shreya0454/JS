// Function to generate multiplication table using a for loop
function generateTableUsingForLoop() {
  let num = parseFloat(document.getElementById("numberInputFor").value);
  let result = document.getElementById("resultFor");

  if (!validateNumber(num, result)) return; // validate input

  let table = `<table><tr><th>For Loop Table of ${num}</th></tr>`;
  for (let i = 1; i <= 10; i++) table += `<tr><td>${num} × ${i} = ${num * i}</td></tr>`;
  result.innerHTML = table + "</table>";
}

// Function to generate multiplication table using a while loop
function generateTableUsingWhileLoop() {
  let num = parseFloat(document.getElementById("numberInputWhile").value);
  let result = document.getElementById("resultWhile");

  if (!validateNumber(num, result)) return;

  let i = 1, table = `<table><tr><th>While Loop Table of ${num}</th></tr>`;
  while (i <= 10) table += `<tr><td>${num} × ${i} = ${num * i}</td></tr>`, i++;
  result.innerHTML = table + "</table>";
}

// Function to generate multiplication table using a do-while loop
function generateTableUsingDoWhileLoop() {
  let num = parseFloat(document.getElementById("numberInputDoWhile").value);
  let result = document.getElementById("resultDoWhile");

  if (!validateNumber(num, result)) return;

  let i = 1, table = `<table><tr><th>Do-While Loop Table of ${num}</th></tr>`;
  do table += `<tr><td>${num} × ${i} = ${num * i}</td></tr>`; while (++i <= 10);
  result.innerHTML = table + "</table>";
}

// Helper function to validate input number
function validateNumber(num, resultDiv) {
  if (isNaN(num)) {
    resultDiv.innerHTML = "Please enter a valid number.";
    return false;
  }
  if (Object.is(num, 0) || Object.is(num, -0)) {
    resultDiv.innerHTML = "Please enter a number other than 0.";
    return false;
  }
  return true;
}
