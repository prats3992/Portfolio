document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const emailTemplateId = document.getElementById("email-template").value;
  const thankYouMessage = document.getElementById("thank-you-message");
  let YOUR_EMAIL_PUBLIC_KEY = "LSnSaPz_1rUgYu8p0";
  // Replace 'YOUR_EMAIL_PUBLIC_KEY' with your actual EmailJS public key
  emailjs.init(YOUR_EMAIL_PUBLIC_KEY);

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(contactForm);
    // Send an email using EmailJS
    emailjs
      .send("service_56x4i3o", emailTemplateId, {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      })
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          // Show a thank you message and hide the form
          contactForm.style.display = "none";
          thankYouMessage.style.display = "block";
        },
        function (error) {
          console.error("Email send error:", error);
        }
      );
  });
});

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
        p.textContent = paragraph.trim(); // Trim to remove extra white space
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

document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.querySelector(".switch__input");
  const topBar = document.getElementById("top-bar");
  const navLinks = document.querySelectorAll("#top-bar nav a");

  switchInput.addEventListener("change", function () {
    if (switchInput.checked) {
      topBar.style.backgroundColor = "#f4f4f4";
      topBar.style.color = "#333";

      // Change the color of the navbar list elements
      navLinks.forEach(function (link) {
        link.style.color = "#333";
      });
    } else {
      topBar.style.backgroundColor = "";
      topBar.style.color = "#fff";

      // Change the color of the navbar list elements back to the default
      navLinks.forEach(function (link) {
        link.style.color = "#fff";
      });
    }
  });
});
