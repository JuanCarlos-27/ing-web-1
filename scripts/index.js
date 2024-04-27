const $navLinks = document.querySelectorAll('header ul li a');

// Se agrega el evento de scroll, para que al hacer click en un link del menú de navegación, se haga scroll hasta la sección correspondiente con una animación suave
$navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const $target = document.querySelector(target);
    $target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Se agrega el evento de scroll, para que al hacer scroll en la página, se muestre u oculte el botón de volver al inicio
window.addEventListener('scroll', () => {
  const $goTop = document.querySelector('.go-top');
  if (window.scrollY > 100) {
    $goTop.removeAttribute('hidden');
  } else {
    $goTop.setAttribute('hidden', true);
  }
});
