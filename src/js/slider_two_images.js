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
