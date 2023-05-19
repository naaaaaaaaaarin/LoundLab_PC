// section 01_ mainBanner
var main = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
var main2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  }
});
main.controller.control =  main2;


// section 04_ Best Item
var main = new Swiper(".mySwiper2", {
  slidesPerView:'auto',
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});