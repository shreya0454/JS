// 1️⃣ Reverse String
function reverseString() {
  let str = document.getElementById("reverseInput").value.trim();
  let output = document.getElementById("resultReverse");

  if (!str) return (output.innerText = "Please enter a string.");
  output.innerText = "Reversed: " + str.split("").reverse().join("");
}

// 2️⃣ Replace Character
function replaceCharacter() {
  let str = document.getElementById("stringInputChar").value;
  let from = document.getElementById("replaceChar").value;
  let to = document.getElementById("replaceWith").value;
  let output = document.getElementById("resultReplace");

  // Basic validation
  if (!str.trim()) return (output.innerText = "Please enter the string first.");
  if (from.length !== 1 || to.length !== 1)
    return (output.innerText =
      "Both 'Character to replace' and 'Replace with' must be single characters.");
  if (!str.includes(from))
    return (output.innerText = `Character '${from}' not found in the string.`);

  // Replace and display
  output.innerText = "Replaced String: " + str.split(from).join(to);
}

// 3️⃣ Replace Substring
function replaceSubstring() {
  let str = document.getElementById("stringInputSub").value;
  let from = document.getElementById("substringInput").value;
  let to = document.getElementById("replaceWithSubstring").value;
  let output = document.getElementById("resultSubstring");

  // Validate input
  if (!str.trim() || !from.trim())
    return (output.innerText = "Please fill all required fields.");
  if (!str.includes(from))
    return (output.innerText = `Substring '${from}' not found.`);

  // Replace and show result
  output.innerText = "Updated String: " + str.replace(from, to);
}

// 4️⃣ Palindrome Check
function checkPalindrome() {
  let str = document.getElementById("palindromeInput").value.trim();
  let output = document.getElementById("resultPalindrome");

  if (!str) return (output.innerText = "Please enter a string.");

  // Convert to lowercase & remove spaces
  let clean = str.toLowerCase().replace(/\s+/g, "");
  let reversed = clean.split("").reverse().join("");

  output.innerText =
    clean === reversed ? "It's a Palindrome." : "Not a Palindrome.";
}
