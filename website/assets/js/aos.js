// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS with custom settings
    AOS.init({
      // Global settings for all elements
      offset: 120,          // Distance (in px) from the original trigger point
      duration: 1000,       // Animation duration (in milliseconds)
      easing: "ease-in-out",// Easing function for smooth transitions
      delay: 0,             // Delay (in milliseconds) before the animation starts
      once: true,           // Only trigger the animation once when scrolling down
      mirror: false,        // Prevent animations from triggering when scrolling back up
      anchorPlacement: "top-bottom", // Defines which part of the element triggers the animation
      
      // Additional custom configurations
      disable: function () {
        // Disable AOS animations on mobile devices with small screen sizes
        return window.innerWidth < 768; // Disable AOS on screens smaller than 768px width
      },
    });
  
    // Log to confirm AOS initialization
    console.log("AOS Initialized!");
  });
  