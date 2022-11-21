
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    loopFillGroupWithBlank: true,
    loop:true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2 ,
          spaceBetween: 40
        },
        1280:{
            slidesPerView: 3,
          spaceBetween: 40
        }
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

const swip = new Swiper('.mySwiper',{

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
      
        1280:{
            slidesPerView: 1,
          spaceBetween: 40
        }
    }
})
