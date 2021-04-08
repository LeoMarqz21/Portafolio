const btnMenu = document.querySelector('.btn_menu');
const btnIcons = document.querySelectorAll('.btn_menu i');
const menu = document.querySelector('.menu_items');
const items = document.querySelectorAll('.menu_items li a');
const cuerpo = document.querySelector('main');

btnMenu.addEventListener('click', () => {
  btnIcons[0].classList.toggle('desactivar');
  btnIcons[1].classList.toggle('activar');
  menu.classList.toggle('mostrar');
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('mostrar');
      btnIcons[0].classList.remove('desactivar');
      btnIcons[1].classList.remove('activar');
    });
  
    cuerpo.addEventListener('click', () => {
      menu.classList.remove('mostrar');
      btnIcons[0].classList.remove('desactivar');
      btnIcons[1].classList.remove('activar');
    });
  });

});
 
































