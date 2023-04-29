const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

function activateLink(link) {
  navLinks.forEach(navLink => navLink.classList.remove('active'));
  link.classList.add('active');
}

function activateSection(section) {
  sections.forEach(section => section.classList.remove('active'));
  section.classList.add('active');
}

function handleClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const section = document.querySelector(href);

  activateLink(this);
  activateSection(section);
}

navLinks.forEach(navLink => {
  navLink.addEventListener('click', handleClick);
});

sections.forEach(section => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
        activateLink(link);
      }
    });
  }, {
    rootMargin: '-50px'
  });

  observer.observe(section);
});
