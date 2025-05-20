const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  });