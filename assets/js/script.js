document.addEventListener('DOMContentLoaded', function () {

    // Form validation and submission
    const form = document.getElementById('contact-form');
    
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission to handle validation
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Check if all fields are filled
        if (name === '' || email === '' || message === '') {
          alert('Please fill out all fields before submitting.');
          return;
        }
  
        // Validate the email format using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        form.reset(); // Reset the form after submission
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
});
