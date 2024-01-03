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

