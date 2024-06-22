window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollY = window.scrollY; // Get scroll position

  if (scrollY > 20) {
    header.classList.add('scrolled'); // Add 'scrolled' class for shadow
  } else {
    header.classList.remove('scrolled');
  }
});
