// ✅ Custom function to compare two strings (case-insensitive)
function userDefinedCompare(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // If lengths differ → not equal
  if (str1.length !== str2.length) return false;

  // Compare each character
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true; // All characters matched
}

// ✅ Main function to compare two strings in multiple ways
function compareStrings() {
  const string1 = document.getElementById("string1").value;
  const string2 = document.getElementById("string2").value;
  const resultDiv = document.getElementById("comparisonResults");

  resultDiv.innerHTML = ""; // Clear previous results

  // Check if inputs are empty
  if (!string1 || !string2) {
    resultDiv.innerHTML = "<p>Please enter both strings to compare.</p>";
    return;
  }

  // 1️⃣ Strict equality (===)
  const strictEqual = string1 === string2 ? "Equal" : "Not Equal";

  // 2️⃣ Loose equality (==)
  const looseEqual = string1 == string2 ? "Equal" : "Not Equal";

  // 3️⃣ Length comparison
  const lengthCompare =
    string1.length === string2.length ? "Equal Length" : "Not Equal";

  // 4️⃣ Alphabetical comparison using localeCompare()
  const order = string1.localeCompare(string2);
  const alphabeticOrder =
    order === 0
      ? "Equal Alphabetically"
      : order < 0
      ? `"${string1}" comes before "${string2}" alphabetically`
      : `"${string1}" comes after "${string2}" alphabetically`;

  // 5️⃣ User-defined comparison
  const userDefined = userDefinedCompare(string1, string2)
    ? "Equal"
    : "Not Equal";

  // Display all results
  resultDiv.innerHTML = `
    <p><strong>Strict Equality (===):</strong> ${strictEqual}</p>
    <p><strong>Loose Equality (==):</strong> ${looseEqual}</p>
    <p><strong>Length Comparison:</strong> ${lengthCompare}</p>
    <p><strong>Alphabetical Comparison (localeCompare):</strong> ${alphabeticOrder}</p>
    <p><strong>User-defined Comparison:</strong> ${userDefined}</p>
  `;
}
