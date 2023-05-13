
if (window.location.pathname.endsWith('.html')) {
    // Remove the '.html' extension from the URL
    var newUrl = window.location.pathname.slice(0, -5);
    
    // Use History API to replace the current URL without the '.html' extension
    window.history.replaceState({}, '', newUrl);
  }

