const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
const backToTopBtn = document.getElementById('backToTop');

// Theme toggle
toggleBtn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Back to Top Button
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});
