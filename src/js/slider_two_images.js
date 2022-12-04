$('.restaurant-about-slider__first').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.restaurant-about-slider__second',
});
$('.restaurant-about-slider__second').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.restaurant-about-slider__first',
});
$('.restaurant-details-slider__first').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.restaurant-details-slider__second',
});
$('.restaurant-details-slider__second').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  asNavFor: '.restaurant-details-slider__first',
});

$('.probe-slider').slick({
  prevArrow: '<button type="button" class="probe-slider-prev"></button>',
  nextArrow: '<button type="button" class="probe-slider-next"></button>',
  dots: false,
  appendArrows: $('.probe-slider__buttons'),
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
});
$('.probe-slider-triple').slick({
  prevArrow: '<button type="button" class="probe-slider-triple-prev"></button>',
  nextArrow: '<button type="button" class="probe-slider-triple-next"></button>',
  dots: false,
  appendArrows: $('.probe-slider-triple__buttons'),
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
});
