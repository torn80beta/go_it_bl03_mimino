/* $('.one-time').slick({
  dots: true,
  // prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  // nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  // infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
});
 */

/* 
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});
 */

$('.variable-width').slick({
  prevArrow: '<button type="button" class="my-slick-prev2">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next2">&xrarr;</button>',
  dots: false,
  appendArrows: $('.slider-nav'),
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true
});
