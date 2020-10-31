(function() {
  const slider = new Swiper('.clients__slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
      992: {
        spaceBetween: 120,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => {
          if(number < 10){
              return '0' + number 
          } else{
              return number
          }         
      },
      formatFractionTotal: (number) => {
          if(number < 10){
              return '0' + number 
          } else{
              return number
          }         
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    },
  })
})();
