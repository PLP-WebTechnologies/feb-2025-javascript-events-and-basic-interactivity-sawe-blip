// Event Listener: Button Click to Change Text
document.getElementById("actionButton").addEventListener("click", function() {
    this.innerHTML = "You Clicked Me!";
    this.style.backgroundColor = "green";
  });
  
  // Event Listener: Hover Effect (already in CSS)
  const hoverDiv = document.querySelector(".hoverDiv");
  
  // Keypress Detection
  document.getElementById("keypressInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      alert("You pressed the Enter key!");
    }
  });
  
  // Bonus: Double-click action
  document.getElementById("actionButton").addEventListener("dblclick", function() {
    alert("You double-clicked the button!");
  });
  
  // Image Gallery Navigation (basic)
  const images = document.querySelectorAll(".galleryImage");
  let currentImageIndex = 0;
  
  setInterval(() => {
    images[currentImageIndex].style.display = "none"; // Hide current image
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle index
    images[currentImageIndex].style.display = "block"; // Show next image
  }, 3000); // Change image every 3 seconds
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Prevent form submission
    }
  
    // Password validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      event.preventDefault(); // Prevent form submission
    }
  });
  
  // Real-time Feedback for Password (Bonus)
  document.getElementById("password").addEventListener("input", function() {
    const feedback = document.createElement("span");
    feedback.innerText = this.value.length < 8 ? "Password too short!" : "Password is strong!";
    feedback.style.color = this.value.length < 8 ? "red" : "green";
    this.parentNode.appendChild(feedback);
  });
  