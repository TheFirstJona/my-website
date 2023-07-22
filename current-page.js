  // Get the current page URL
  const currentPage = window.location.href;

  // Check each link and add the 'active' class to the corresponding link
  const links = document.querySelectorAll('.nav-links a');
  const finalLinks = "jonathantorrestomas.com/" + links;
  finalLinks.forEach(link => {
    if (link.href === currentPage) {
      link.classList.add('active');
    }
  });