document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-wrraper-content");

  // select ALL prev/next buttons (desktop + mobile)
  const prevBtns = document.querySelectorAll(".left-arrow");
  const nextBtns = document.querySelectorAll(".right-arrow");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // Show first slide initially
  showSlide(currentIndex);

  // Loop through all prev buttons
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  });

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    let splide = new Splide('#testimonial-slider', {
      type       : 'loop',
      perPage    : 2.2,       
      perMove    : 1,         
      gap        : '20px',
      arrows     : false,
      pagination : false,
      drag       : true,
      autoplay   : true,
      interval   : 3000,
      speed      : 1000,
      easing     : 'ease',
      breakpoints: {
        992: { perPage: 1.2 },
        600: { perPage: 1 }
      }
    });

    splide.on('drag', function (e) {
      if (e.direction === '<') {   
        e.cancel();               
      }
    });

    splide.mount();
  });