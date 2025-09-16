// Toggle the navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  // Change aria-expanded attribute
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  // Change icon to 'X' when menu is open
  menuToggle.textContent = expanded ? '☰' : '✖';
});

<script>
  document.querySelector('footer').innerHTML = '&copy; ' + new Date().getFullYear() + ' Goodluck Adesayo.';
</script>