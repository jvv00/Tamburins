window.addEventListener('scroll', function () {
  var nav = document.querySelector("header");
  var navDiv = document.querySelector('nav div');

  if (window.scrollY >= 600) {
      nav.classList.add('fixed-header');
  } else {
      nav.classList.remove('fixed-header');
  }


  const nameElements =document.querySelectorAll('.name');

 
  nameElements.forEach(function(element) {

    const first = section.querySelector(".first"); 
    const second = section.querySelector(".second"); 
    const third = section.querySelector(".third"); 

    if (element.offsetTop < window.scrollY + window.innerHeight) {

        let nameScrolled =  window.scrollY + window.innerHeight
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
        element.style.transform = `translateY(${nameScrolled * 0.3}px)`;
    }
  });
   

  // const eggpurfume = this.document.querySelectorAll(".eggpurfume");

  // eggpurfume.forEach(function(eggpurfume){
    
  //   let bounds = eggpurfume.getBoundingClientRect();
  //   const background  = eggpurfume.querySelector(".background");
  //   const body  = eggpurfume.querySelector(".body");
  //   const lid  = eggpurfume.querySelector(".lid");
  //   const full  = eggpurfume.querySelector(".full");

  //   let scrolled = window.scrollY;

  //   if(bounds.top < window.innerHeight && bounds.bottom >= 0){

  //     let eggpurfumeScrolled = window.scrollY - eggpurfume.offsetTop;
  //     background.style.transform = `translateY(${eggpurfumeScrolled * 0.8}px)`;
  //     body.style.transform = `translateY(${eggpurfumeScrolled * -0.4}px)`;
  //     lid.style.transform = `translateY(${eggpurfumeScrolled * 0.4}px)`;
  //     // full.style.transform = `translateY(${eggpurfumeScrolled * -0.4}px)`;
      
  //   }
  // })
});



var swiper = new Swiper(".slide", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-bestpd", {
  slidesPerView: 1.8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        
      1280: {
        slidesPerView: 4,  //브라우저가 1280보다 클 때
        spaceBetween: 40,
      },
    },
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide-autoscroll", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  });

  splide.mount(window.splide.Extensions);
});

var swiper = new Swiper(".slide-gift", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
        
    1280: {
      slidesPerView: 4,  //브라우저가 1280보다 클 때
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".slide-store", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

