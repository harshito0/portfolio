// If you want to add simple JS animations later, you can expand here
console.log('Portfolio loaded!');
// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Smooth scrolling for nav-links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// script.js

document.getElementById('arrow').addEventListener('mouseover', function() {
  document.querySelector('.profile-image').classList.add('pop');
});

document.getElementById('arrow').addEventListener('mouseout', function() {
  document.querySelector('.profile-image').classList.remove('pop');
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from actually submitting

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Validate that all fields are filled
  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill in all fields before submitting!");
    return;
  }

  // Basic email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Display success message
  const formFeedback = document.getElementById("formFeedback");
  formFeedback.innerHTML = "Thank you for your message! We'll get back to you shortly.";
  formFeedback.style.color = "green";

  // Optionally, reset form (if needed)
  document.getElementById("contactForm").reset();
});
