document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider-wrraper-content");
    const prevBtn = document.querySelector(".left-arrow");
    const nextBtn = document.querySelector(".right-arrow");

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
      });
      slides[index].classList.add("active");
    }

    // Show first slide initially
    showSlide(currentIndex);

    // Next button
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    // Prev button
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
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