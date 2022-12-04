$(document).ready(function () {
  $('.hero-slider').slick({
    infinite: true,
    arrows: true,
    appendArrows: $('.hero-slider-arrows'),
    speed: 300,
    cssEase: 'linear',
  });
});

//
// slidesToShow: 1,
// variableWidth: true,
// appendArrows: $('.hero-slider-nav'),
// fade: true,
// speed: 300,
