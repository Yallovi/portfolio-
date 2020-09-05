const popup = () => { 
    const checkBtn = document.querySelector('button'),
    popupCheck = document.querySelector('.overlay');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });
    popupCheck.addEventListener('click', () => {
        let target = event.target;
        if( target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
    } 
});
};
popup();

// slick slider production
$('.production-slider__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.production-slider__bot'
  });
  $('.production-slider__bot').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"</div>',
    nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right"</div>',
    asNavFor: '.production-slider__top',

  });
  // slick slider feedback
  $('.feedback-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_left"</div>',
    nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_right"</div>',
    responsive: [  
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
