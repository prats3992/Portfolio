document.addEventListener("DOMContentLoaded", function () {
    // Get the element where you want to insert the text
    const aboutTextElement = document.getElementById("about-text");
  
    // Define the URL of the text file
    const textFileURL = "about_me.txt";
  
    // Create a new XMLHttpRequest object to fetch the text file
    const xhr = new XMLHttpRequest();
  
    // Set up an event listener to handle the response
    xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
        // If the request is successful, split the text into paragraphs and insert it into the HTML
        const paragraphs = xhr.responseText.split("@@@"); // Split by the delimiter
        paragraphs.forEach((paragraph) => {
          const p = document.createElement("p");
          // Use innerHTML to parse the HTML tags
          p.innerHTML = paragraph.trim(); // Trim to remove extra white space
          aboutTextElement.appendChild(p);
        });
      } else {
        // Handle errors if the request fails
        console.error("Failed to load the text file.");
      }
    });
  
    // Open and send the request to fetch the text file
    xhr.open("GET", textFileURL, true);
    xhr.send();
  });