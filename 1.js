// JavaScript Code

// Sticky Navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Responsive Menu Toggle
  const menu = document.querySelector('.menu');
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  
  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });
  
  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
  
  // Close menu on clicking outside (mobile)
  window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
  
  // Scroll to Top Button
  const scrollBtn = document.querySelector('.scroll-button a');
  
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  
  // Smooth Scrolling
  const links = document.querySelectorAll('nav .menu a, .scroll-button a');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
  
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Skills Progress Animation (Optional)
  const skillBoxes = document.querySelectorAll('.skills-details .box .per');
  
  window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const skillPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (skillPosition < screenPosition) {
      skillBoxes.forEach(box => {
        box.classList.add('visible');
      });
    }
  });