// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Loader
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
  
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
      fadeInOnScroll(); // call immediately to fade visible elements
    }, 1500);
  });
  
  // Fade-in effect on scroll
  function fadeInOnScroll() {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }
  
  // Apply fade-in class to sections
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
    });
  });
  function showImage(imageSrc) {
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');
    popupImg.src = imageSrc;
    popup.style.display = 'flex';
  }
  
 // Toggle mobile navbar
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
  });
  
  // Show popup image function (existing mo na ito!)
  function showImage(imageSrc) {
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');
    popupImg.src = imageSrc;
    popup.style.display = 'flex';
  }
  
  // Hide popup when clicking anywhere
  document.getElementById('popup').addEventListener('click', function () {
    this.style.display = 'none';
  });
  