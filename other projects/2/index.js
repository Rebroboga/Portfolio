// accordion

new Accordion('.accordion__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


// burger-menu

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function() {

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


// tabs

let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('tabs-btn--active')
    });

    e.currentTarget.classList.add('tabs-btn--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// swiper

let swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 4000,
  },
})






