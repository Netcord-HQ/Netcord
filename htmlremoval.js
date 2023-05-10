window.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    
    // Check if the URL ends with '.html'
    if (currentUrl.endsWith('.html')) {
      // Remove the '.html' extension and redirect to the new URL
      var newUrl = currentUrl.slice(0, -5); // Remove the last 5 characters ('.html')
      window.location.href = newUrl;
    }
  });
  