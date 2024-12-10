// Initialize AOS (Animate On Scroll) animations
document.addEventListener("DOMContentLoaded", function () {
    // AOS initialization with custom configurations
    AOS.init({
      offset: 120,           // Trigger the animation when element is 120px from the top
      duration: 1000,        // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for smooth transitions
      delay: 0,              // Delay in milliseconds before the animation starts
      once: true,            // Only trigger the animation once
      mirror: false,         // Don't trigger animation when scrolling back up
      anchorPlacement: 'top-bottom', // Trigger animation based on the position in the viewport
      disable: function () {
        // Disable AOS animations for mobile devices (less than 768px width)
        return window.innerWidth < 768;
      }
    });
  
    // Log to confirm AOS has been initialized
    console.log("AOS initialized!");
  
    // Smooth Scroll for internal links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust scroll position for header space
            behavior: "smooth",
          });
        }
      });
    });
  
    // Handle form submission for registration (as an example)
    const registrationForm = document.querySelector("#registration-form");
    if (registrationForm) {
      registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting immediately
        
        // Collect form data (simplified)
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const childName = document.querySelector("#child-name").value;
        
        // Basic form validation (you can add more checks here)
        if (name && email && childName) {
          alert("Registration successful! We'll contact you soon.");
          
          // Here you can implement form submission logic (e.g., sending data to a server)
        } else {
          alert("Please fill in all fields.");
        }
      });
    }
  });
  