// Simulate a delay for the loading page
setTimeout(() => {
  // Redirect to another URL after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500); // 5000 milliseconds (5 seconds)
}, 3000); // Initial delay, adjust as needed
