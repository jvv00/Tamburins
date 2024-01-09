AOS.init();

window.addEventListener('scroll', function () {
  var nav = document.querySelector("header");
  var navDiv = document.querySelector('nav div');

  if (window.scrollY >= 600) {
      nav.classList.add('fixed-header');
  } else {
      nav.classList.remove('fixed-header');
  }

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


// "pen153" 요소를 가져옵니다.

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

let scrollTrigger = gsap
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".eggpurfume",
      start: "top top",
      // end: "+=200",
      end: "end end",
      markers: false, // 개발 가이드선
      scrub: 1.5,
      // pin: true,
    },
    duration: 1, // 전체 애니메이션의 지속 시간을 4초로 설정
  });

  tl.fromTo(
    ".eggpurfume-element.body",
  { y: 400 },
  { y: "-57%", ease: "power1.out", duration: 1.2 }
  );
    
  tl.fromTo(
    ".eggpurfume-element.lid",
    { y: -600 },
    { y: "-80%", ease: "power1.out" ,duration: 1.2 },
    0
     // 위에서 시작하는지 아래에서 시작하는지를 결정하는 옵션입니다.
  );
});
  // .to(".bbody", { x: "-1891px", duration: 1.5 })
  // .to(".bre", { x: "-102px", duration: 1.5 });

// ScrollTrigger가 시작되면 start와 end 값을 동적으로 변경



// gsap.utils.toArray("section").forEach((item) => {
//   let color = item.getAttribute("data-bgcolor");

//   ScrollTrigger.create({
//     trigger: item,
//     start: "top 50%",
//     end: "bottom 5%",
//     markers: false,

//     onEnter: () =>
//       gsap.to("body", {
//         backgroundColor: color,
//         duration: 0.4,
//       }),
//     onEnterBack: () =>
//       gsap.to("body", {
//         backgroundColor: color,
//         duration: 0.4,
//       }),
//   });
// });
