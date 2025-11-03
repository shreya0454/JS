function validateForm() {
  let isValid = true;

  // Get input values
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

  // Reset old errors
  document.querySelectorAll(".error").forEach(e => (e.innerHTML = ""));

  // Patterns and constraints (same as before)
  let namePattern = /^[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+$/;
  let addressPattern = /^[A-Za-z0-9\s,.'-]{5,}$/;
  let cityPattern = /^[A-Za-z\s]{2,}$/;
  let mobilePattern = /^[6-9][0-9]{9}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Name
  if (name === "" || !namePattern.test(name)) {
    document.getElementById("nameError").innerHTML =
      "Enter valid name (min 3 letters, alphabets only).";
    isValid = false;
  }

  // Mobile
  if (mobile === "" || !mobilePattern.test(mobile)) {
    document.getElementById("mobileError").innerHTML =
      "Enter valid 10-digit mobile number starting with 6-9.";
    isValid = false;
  }

  // Email
  if (email === "" || !emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Enter valid email (e.g., name@example.com).";
    isValid = false;
  }

  // Address
  if (address === "" || !addressPattern.test(address)) {
    document.getElementById("addressError").innerHTML =
      "Enter valid address (min 5 characters).";
    isValid = false;
  }

  // City
  if (city === "" || !cityPattern.test(city)) {
    document.getElementById("cityError").innerHTML =
      "Enter valid city name (alphabets only).";
    isValid = false;
  }

  // State
  if (state === "") {
    document.getElementById("stateError").innerHTML = "Please select a state.";
    isValid = false;
  }

  // Gender
  if (!gender) {
    document.getElementById("genderError").innerHTML = "Please select gender.";
    isValid = false;
  }

  // If all valid, show welcome screen
  if (isValid) {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "flex";
    document.getElementById("welcomeMessage").innerText =
      "🎉 Congratulations! Welcome, " + name + "!";
  }

  return false; // Prevent form submission
}

function logout() {
  document.getElementById("studentForm").reset();
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("formContainer").style.display = "block";
  document.querySelectorAll(".error").forEach(e => (e.innerHTML = ""));
}
