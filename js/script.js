// Simulate a delay for the loading page
setTimeout(() => {
    const loadingPage = document.querySelector('.loading-page');
    loadingPage.style.display = 'none';

    // Redirect to another URL after 5 seconds
    setTimeout(() => {
        window.location.href = 'index.html'; // Replace 'https://example.com' with the URL you want to open
    }, 500); // 5000 milliseconds (5 seconds)
}, 5000); // Initial delay, adjust as needed
