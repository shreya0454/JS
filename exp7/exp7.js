let mainArray = [];

// 🟢 Create Array (supports sub-arrays)
function createArray() {
  const size = parseInt(document.getElementById("arraySize").value);
  const input = document.getElementById("arrayInput").value.trim();
  const resultDiv = document.getElementById("createResult");

  resultDiv.innerHTML = "";

  if (isNaN(size) || size <= 0) {
    resultDiv.innerHTML = "Please enter a valid array size.";
    return;
  }

  if (!input) {
    resultDiv.innerHTML = "Please enter array elements.";
    return;
  }

  try {
    // Handles inputs like: 3,[3,6,8],5.3
    mainArray = eval("[" + input + "]");

    if (!Array.isArray(mainArray)) throw new Error("Invalid array format.");

    if (mainArray.length > size) {
      resultDiv.innerHTML = `<p style="color:red;">Insufficient size! Entered ${mainArray.length} elements, size is ${size}.</p>`;
      mainArray = [];
      return;
    }


    resultDiv.innerHTML += `<p>Created Array: ${JSON.stringify(mainArray)}</p>`;
  } 
  catch {
    resultDiv.innerHTML = `<p style="color:red;">Invalid format! Example: 3,[3,6,8],5.3</p>`;
  }
}

// 🟡 Append Object (key:value)
function appendObject() {
  const input = document.getElementById("objectInput").value.trim();
  const resultDiv = document.getElementById("appendResult");
  const size = parseInt(document.getElementById("arraySize").value);

  resultDiv.innerHTML = "";

  if (mainArray.length >= size) {
    resultDiv.innerHTML = `<p style="color:red;">Insufficient size! Cannot add more elements.</p>`;
    return;
  }

  if (!input.includes(":")) {
    resultDiv.innerHTML = "Use key:value format.";
    return;
  }

  try {
    const [key, value] = input.split(":").map(v => v.trim());
    const obj = {};
    obj[key] = isNaN(value) ? value : parseFloat(value);
    mainArray.push(obj);

    resultDiv.innerHTML = `<p><strong>Updated Array:</strong> ${JSON.stringify(mainArray)}</p>`;
  } 
  catch {
    resultDiv.innerHTML = `<p style="color:red;">Invalid object format!</p>`;
  }
}
