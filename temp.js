document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
      // Your array of testimonials here (with img, quote, name, and role properties)
    ];
    
    // State variables
    let active = 0;
    let autorotate = true;
    const autorotateTiming = 7000;
    let interval;
  
    // Function to toggle active testimonial
    function setActive(index) {
      active = index;
      updateTestimonials();
    }
  
    // Function to toggle autorotate
    function toggleAutorotate() {
      autorotate = !autorotate;
      if (autorotate) {
        interval = setInterval(() => {
          setActive(active + 1 === testimonials.length ? 0 : active + 1);
        }, autorotateTiming);
      } else {
        clearInterval(interval);
      }
    }
  
    // Function to update testimonials display
    function updateTestimonials() {
      const testimonialImages = document.querySelectorAll('.testimonial-image');
      const testimonialQuotes = document.querySelectorAll('.testimonial-quote');
      const buttons = document.querySelectorAll('.testimonial-button');
  
      testimonialImages.forEach((image, index) => {
        image.style.display = index === active ? 'block' : 'none';
      });
  
      testimonialQuotes.forEach((quote, index) => {
        quote.style.display = index === active ? 'block' : 'none';
      });
  
      buttons.forEach((button, index) => {
        button.classList.toggle('active', index === active);
      });
    }
  
    // Function to fix the parent height
    function heightFix() {
      const testimonialsRef = document.querySelector('.testimonials-ref');
      if (testimonialsRef && testimonialsRef.parentElement) {
        testimonialsRef.parentElement.style.height = `${testimonialsRef.clientHeight}px`;
      }
    }
  
    // Bind event listeners to buttons
    document.querySelectorAll('.testimonial-button').forEach((button, index) => {
      button.addEventListener('click', () => {
        setActive(index);
        toggleAutorotate();
      });
    });
  
    // Initial setup
    updateTestimonials();
    heightFix();
  });
  