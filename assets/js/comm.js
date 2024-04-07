AOS.init()

document.addEventListener('DOMContentLoaded', function () {
    const productItem = document.querySelector('.product')
    const submenu = document.querySelector('.submenu')

    productItem.addEventListener('click', function () {
        this.classList.toggle('clicked')
        submenu.classList.toggle('opened')
    })
})

window.addEventListener('scroll', function () {
    var nav = document.querySelector('header')
    var navDiv = document.querySelector('nav div')

    if (window.scrollY >= 1200) {
        nav.classList.add('fixed-header')
    } else {
        nav.classList.remove('fixed-header')
    }
})

var swiper = new Swiper('.slide', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

var swiper = new Swiper('.slide-bestpd', {
    slidesPerView: 1.8,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 4, //브라우저가 1280보다 클 때
            spaceBetween: 40,
        },
    },
})

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide-autoscroll', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
    })

    splide.mount(window.splide.Extensions)
})

var swiper = new Swiper('.slide-gift', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 4, //브라우저가 1280보다 클 때
            spaceBetween: 40,
        },
    },
})

var swiper = new Swiper('.slide-store', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
        },
        next: {
            shadow: true,
            translate: ['120%', 0, -500],
        },
    },
})

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger)

    // 첫 번째 ScrollTrigger
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.eggpurfume',
            start: 'top top',
            end: 'end end',
            markers: true,
            scrub: 1.5,
        },
    })

    tl1.fromTo('.eggpurfume-element.body', { y: 400 }, { y: '-57%', ease: 'power1.inOut', duration: 1.2 })

    tl1.fromTo('.eggpurfume-element.lid', { y: -600 }, { y: '-80%', ease: 'power1.inOut', duration: 1.2 }, 0)

    // 두 번째 ScrollTrigger
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.eggpurfume-element.body',
            start: 'top center',
            end: 'bottom bottom',
            markers: true,
            scrub: 2,
        },
    })

    tl2.fromTo(
        '.eggpurfume-element.full',
        { opacity: 0, x: '0%', y: '-65%', scale: 0.9 }, // 초기 상태
        { opacity: 1, x: '25%', y: '325%', scale: 0.9 }
    )
})

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('customVideo')

    video.addEventListener('click', function () {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    })
})

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
