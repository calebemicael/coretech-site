document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector('.spacer')?.offsetHeight - 5 || 56;
      const offset = navbarHeight; 
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});