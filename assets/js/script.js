// DOM content
const navRight = document.querySelector(".nav-right");
const btnToggleNav = document.querySelector(".btn-toggle-navbar i");
const body = document.querySelector("body");

// Loader function
window.addEventListener("load", function loader() {
  document.querySelector(".loader-container").classList.add("loaded");
});

// Toggle Navbar
btnToggleNav.addEventListener("click", () => {
  navRight.style.transition = "0.3s linear";
  navRight.classList.toggle("active");
  if (navRight.classList.contains("active")) {
    btnToggleNav.classList.replace("fa-bars", "fa-times");
    body.classList.add("disabledScroll");
  } else {
    btnToggleNav.classList.replace("fa-times", "fa-bars");
    body.classList.remove("disabledScroll");
  }
});

// Banner carrousel
var mySwiper = new Swiper(".header-slider", {
  speed: 700,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 2,
  slidesPerGroup: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 5,
    depth: 126,
    modifier: 3,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    200: {
      spaceBetween: 40,
      effect: "slide",
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

// Testimonials carrousel
const swiper = new Swiper(".testimonials-swiper", {
  speed: 600,
  spaceBetween: 30,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerGroup: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Library WOW for animations
wow = new WOW({
  animateClass: "animated",
  wowOffset: 0,
});
wow.init();
