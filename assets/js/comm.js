js;
var swiper = new Swiper(
  ".swiper-bestpd",

  {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
);
var swiper = new Swiper(".swiper-slide", {
  slidesPerView: 1,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
