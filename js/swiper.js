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