// console.log("This is the time tracking script");

// window.onload = function () {
//   // Create a styled display area at the top of the page
//   let timeDisplay = document.createElement("div");
//   timeDisplay.id = "time-spent-display";
//   timeDisplay.style.position = "fixed";
//   timeDisplay.style.top = "0";
//   timeDisplay.style.left = "0";
//   timeDisplay.style.width = "100%";
//   timeDisplay.style.backgroundColor = "#1e1e1e"; // Dark theme
//   timeDisplay.style.color = "#ffffff";
//   timeDisplay.style.padding = "12px 20px";
//   timeDisplay.style.textAlign = "center";
//   timeDisplay.style.fontSize = "16px";
//   timeDisplay.style.fontFamily = "Arial, sans-serif";
//   timeDisplay.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
//   timeDisplay.style.zIndex = "1000"; // Ensures it stays on top
//   document.body.style.paddingTop = "50px"; // Prevent content overlap
//   document.body.prepend(timeDisplay);

//   // Get today's date in YYYY-MM-DD format
//   let today = new Date().toISOString().split("T")[0];

//   // Get the last recorded date from localStorage
//   let lastVisitDate = localStorage.getItem("lastVisitDate");

//   // If it's a new day, reset the stored time
//   if (lastVisitDate !== today) {
//     localStorage.setItem("startTime", Date.now());
//     localStorage.setItem("lastVisitDate", today);
//     localStorage.removeItem("lastSessionTime"); // Reset last session display
//   }

//   // Get the last session time from localStorage
//   let lastSession = localStorage.getItem("lastSessionTime");
//   if (lastSession) {
//     lastSession = JSON.parse(lastSession);
//     timeDisplay.innerText = `🕒 Last Visit: ${lastSession.hours}h ${lastSession.minutes}m ${lastSession.seconds}s`;
//   } else {
//     timeDisplay.innerText = "⌛ Tracking your time on this site...";
//   }

//   // Store the start time if not already set
//   let startTime = localStorage.getItem("startTime");
//   if (!startTime) {
//     localStorage.setItem("startTime", Date.now());
//   }
// };

// window.onbeforeunload = function () {
//   const startTime = localStorage.getItem("startTime");
//   if (startTime) {
//     const endTime = Date.now();
//     const timeSpent = endTime - parseInt(startTime, 10);

//     const seconds = Math.floor(timeSpent / 1000) % 60;
//     const minutes = Math.floor(timeSpent / (1000 * 60)) % 60;
//     const hours = Math.floor(timeSpent / (1000 * 60 * 60));

//     console.log(
//       `Time spent: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
//     );

//     // Save session time to display on next visit
//     localStorage.setItem(
//       "lastSessionTime",
//       JSON.stringify({ hours, minutes, seconds })
//     );
//   }
// };

console.log("This is the time tracking script");

window.onload = function () {
  // Create a styled display area at the top of the page
  let timeDisplay = document.createElement("div");
  timeDisplay.id = "time-spent-display";
  timeDisplay.style.position = "fixed";
  timeDisplay.style.top = "0";
  timeDisplay.style.left = "0";
  timeDisplay.style.width = "100%";
  timeDisplay.style.backgroundColor = "#1e1e1e"; // Dark theme
  timeDisplay.style.color = "#ffffff";
  timeDisplay.style.padding = "12px 20px";
  timeDisplay.style.textAlign = "center";
  timeDisplay.style.fontSize = "16px";
  timeDisplay.style.fontFamily = "Arial, sans-serif";
  timeDisplay.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
  timeDisplay.style.zIndex = "1000"; // Ensures it stays on top
  document.body.style.paddingTop = "50px"; // Prevent content overlap
  document.body.prepend(timeDisplay);

  // Get today's date in YYYY-MM-DD format
  let today = new Date().toISOString().split("T")[0];

  // Get the last recorded date from localStorage
  let lastVisitDate = localStorage.getItem("lastVisitDate");

  // If it's a new day, reset the stored time
  if (lastVisitDate !== today) {
    localStorage.setItem("startTime", Date.now());
    localStorage.setItem("lastVisitDate", today);
    localStorage.removeItem("lastSessionTime"); // Reset last session display
  }

  // Get the last session time from localStorage
  let lastSession = localStorage.getItem("lastSessionTime");
  if (lastSession) {
    lastSession = JSON.parse(lastSession);
    timeDisplay.innerText = `🕒 Last Visit: ${lastSession.hours}h ${lastSession.minutes}m ${lastSession.seconds}s`;

    // Hide the display after 2 seconds
    setTimeout(() => {
      timeDisplay.style.opacity = "0"; // Fade out effect
      setTimeout(() => {
        timeDisplay.remove();
        document.body.style.paddingTop = "0"; // Reset padding
      }, 500); // Wait for fade-out effect before removing
    }, 2500);
  } else {
    timeDisplay.innerText = "⌛ Tracking your time on this site...";
    setTimeout(() => {
      timeDisplay.style.opacity = "0";
      setTimeout(() => {
        timeDisplay.remove();
        document.body.style.paddingTop = "0"; // Reset padding
      }, 500);
    }, 2500);
  }

  // Store the start time if not already set
  let startTime = localStorage.getItem("startTime");
  if (!startTime) {
    localStorage.setItem("startTime", Date.now());
  }
};

window.onbeforeunload = function () {
  const startTime = localStorage.getItem("startTime");
  if (startTime) {
    const endTime = Date.now();
    const timeSpent = endTime - parseInt(startTime, 10);

    const seconds = Math.floor(timeSpent / 1000) % 60;
    const minutes = Math.floor(timeSpent / (1000 * 60)) % 60;
    const hours = Math.floor(timeSpent / (1000 * 60 * 60));

    console.log(
      `Time spent: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );

    // Save session time to display on next visit
    localStorage.setItem(
      "lastSessionTime",
      JSON.stringify({ hours, minutes, seconds })
    );
  }
};
