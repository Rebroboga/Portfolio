// accordion

new Accordion('.accordion__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

let wrap = document.querySelector('.about-me__translate-en');
let about = document.querySelectorAll('.about-me__text');
let color = document.querySelector('.about-me__translate-ru');
let block = document.querySelector('.achievements__image');
let fixed = document.querySelectorAll('.accordion__control');


wrap.addEventListener('click', function() {

  wrap.classList.add('color--active');

  color.classList.remove('color--active')

  about.forEach(function(e) {
    e.classList.add('wrap--active');
  })
})

color.addEventListener('click', function() {

  wrap.classList.remove('color--active');
  wrap.classList.remove('active');

  color.classList.add('color--active');
})

fixed.forEach(item => {
  item.addEventListener('click', function() {
    
    fixed.forEach(elem => 
      elem.classList.remove('orange--active'));
      this.classList.add('orange--active');

      const button = document.getElementById('color');

      button.onclick = function(event) {
        if (this.classList.contains('black')) {
          this.classList.remove('black');
          this.classList.add('orange--active');
        } else {
          this.classList.remove('orange--active');
          this.classList.add('black')
        }
      }
  });
});


// burger munu

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function() {

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll')

});

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active')

    document.body.classList.remove('stop-scroll')

  })
})




