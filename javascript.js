function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    function myFunction() {
      var nav = document.getElementById("myTopnav");
      if (nav.className === "topnav") {
        nav.className += " responsive"; 
      } else {
        nav.className = "topnav"; 
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector('.image-grid'); 
    const images = [
      
    ];
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Project Image";
        img.classList.add('grid-image');
        imageContainer.appendChild(img);
    });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  console.log('Form Submitted', { name, email, message });

  alert('Thank you for reaching out! I will get back to you soon.');

  
  this.reset();
});
