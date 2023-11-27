const swiper = new Swiper('.slider_projects', {
  navigation:{
    nextEl:'.slider__next',
    prevEl:'.slider__prev'
  },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        horizontalClass:'slider__scrollbar',
        dragSize: 'auto',
      },
      // loop:true,
      slidesPerView:3,
      spaceBetween:70,
      centeredSlides:true,
      slideNextClass:'disabled',
      slidePrevClass:'disabled',
      slideActiveClass:'active',
      slideToClickedSlide:true,
      breakpoints: {
        // when window width is >= 320px
        768:{
          slidesPerView:2,
        },
        480:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1,
        }
      }
});

const slider = new Swiper('.feedback__slider', {
      // loop:true,
      centeredSlides:true,
      longSwipes:false,
      slideToClickedSlide:true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        horizontalClass:'feedback__scrollbar',
        dragSize: 'auto',
      },
});
