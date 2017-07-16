/*
  @ Gallery slider
  - required slick.js
*/

$('.js-gallery-slider').slick({
  slidesToShow: 1,
  infinite: true,
  dots: true,
  adaptiveHeight: true,
  arrows: false,
  prevArrow: '<a href="#" class="btn slick-arrow slick-prev"></a>',
  nextArrow: '<a href="#" class="btn slick-arrow slick-next"></a>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
      	centerMode: true,
      	variableWidth: true,
      	arrows: true
      }
    }
   ]
});
