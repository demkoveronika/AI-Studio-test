const openMenuBtns = document.querySelectorAll('.open-menu-btn');
const closeMenuBtns = document.querySelectorAll('.close-menu-btn');
const menuLinks = document.querySelectorAll('.menu__link');

let menuIsOpen = false;

function openMenu(menuId) {
  if (menuIsOpen) return; 
  const menu = document.getElementById(menuId);
  if (menu) {
    menu.style.opacity = '1';
    menu.style.transform = 'translateX(0)';
    menu.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
    menuIsOpen = true;
  }
}

function closeMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu) {
    menu.style.opacity = '0';
    menu.style.transform = 'translateX(-100%)';
    menu.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    menuIsOpen = false;
  }
}

openMenuBtns.forEach(button => {
  button.addEventListener('click', function() {
    const menuId = this.getAttribute('data-menu');
    openMenu(menuId); 
  });
});

closeMenuBtns.forEach(button => {
  button.addEventListener('click', function() {
    const menuId = this.getAttribute('data-menu');
    closeMenu(menuId); 
  });
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    const menuId = this.closest('.menu').id;
    closeMenu(menuId); 
  });
});

const arrowButtons = document.querySelectorAll('.arrow-right');
const slides = document.querySelectorAll('.slider-image');
const bottom = document.getElementById('bottom');

let currentSlideIndex = 0;

function showSlide() {
  slides[currentSlideIndex].classList.add('block');
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('block');
}

function nextSlide() {
  hideSlide();
  currentSlideIndex++;

  if (currentSlideIndex > slides.length - 1) {
    currentSlideIndex = 0;
  }

  showSlide();
}

arrowButtons.forEach((button) => {
  button.addEventListener('click', nextSlide);
});

showSlide();