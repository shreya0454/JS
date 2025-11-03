let arr = [];

// 🟢 Create array (supports sub-arrays)
function createArray() {
  const size = +document.getElementById("arraySize").value;
  const input = document.getElementById("arrayInput").value.trim();
  const res = document.getElementById("createResult");

  if (!size || !input)
    return res.innerHTML = "Enter valid size and elements.";

  try {
    arr = eval("[" + input + "]"); // Handles sub-arrays like [2,3]

    // 🔸 Check for exceeding size
    if (arr.length > size) {
      arr = [];
      return res.innerHTML = `<span style="color:red;">Insufficient size! Cannot create array.</span>`;
    }

    res.innerHTML = `Array: ${JSON.stringify(arr)}`;
  
  } 
  catch {
    res.innerHTML = "Invalid format! Example: 3,[2,5],7";
  }
}

// 🟡 Append object (key:value)
function appendObject() {
  const input = document.getElementById("objectInput").value.trim();
  const res = document.getElementById("appendResult");
  const size = +document.getElementById("arraySize").value;

  if (!input.includes(":"))
    return res.innerHTML = "Use key:value format.";

  // 🔸 Check array size before adding
  if (arr.length >= size)
    return res.innerHTML = `<span style="color:red;">Insufficient size! Cannot add more elements.</span>`;

  const [k, v] = input.split(":");
  const obj = {};
  obj[k.trim()] = isNaN(v) ? v.trim() : +v; // Convert to number if possible
  arr.push(obj);

  res.innerHTML = `Updated: ${JSON.stringify(arr)}`;
}

// 🔴 Remove element
function removeElement() {
  const val = document.getElementById("removeElement").value.trim();
  const res = document.getElementById("removeResult");

  if (!arr.length)
    return res.innerHTML = "Array is empty.";

  const index = arr.findIndex(e => JSON.stringify(e) === val || e == val);

  if (index > -1) {
    arr.splice(index, 1);
    res.innerHTML = `Removed '${val}'. Updated: ${JSON.stringify(arr)}`;
  } else {
    res.innerHTML = `'${val}' not found.`;
  }
}

// 🔵 Check element
function checkElement() {
  const val = document.getElementById("checkElement").value.trim();
  const res = document.getElementById("checkResult");

  if (!arr.length)
    return res.innerHTML = "Array is empty.";

  const found = arr.some(e => JSON.stringify(e) === val || e == val);
  res.innerHTML = found ? `'${val}' found.` : `'${val}' not found.'`;
}

// ⚫ Empty array
function emptyArray() {
  arr = [];
  document.getElementById("emptyResult").innerHTML = "Array emptied.";
}
