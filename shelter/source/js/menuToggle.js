(() => {
  const menuButton = document.querySelector('.menu-nav__button');
  const menuList = document.querySelector('.menu-nav__list');
  const menuIcon = document.querySelector('.menu-nav__icon-menu');
  const body = document.querySelector('body');

  const closeMenu = () => {
    menuIcon.classList.remove('rotated');
    body.classList.remove('lock');
    menuList.classList.remove('menu__list--open');
  };

  menuButton.addEventListener('click', () => {
    menuIcon.classList.toggle('rotated');
    body.classList.toggle('lock');
    menuList.classList.toggle('menu__list--open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      closeMenu();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('lock') || evt.target.classList.contains('menu-site__link')) {
      closeMenu();
    }
  });
})();
