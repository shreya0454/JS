function startCountdown() {
  const endDateInput = document.getElementById("endDate").value;
  const countdownDiv = document.getElementById("countdown");

  const endDate = new Date(endDateInput).getTime();
  const now = new Date().getTime();

  if (!endDateInput || endDate <= now) {
    countdownDiv.innerHTML = "Please select a valid date and time.";
    return;
  }

    const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeRemaining = endDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      countdownDiv.innerHTML = "Countdown Expired!";
      return;
    }

    // Basic conversion
    const totalDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display simplified output
    let output = "";
    if (years > 0) {
      output = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (months > 0) {
      output = `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      output = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    countdownDiv.innerHTML = output;
  }, 1000);
}
