/* $('.variable-width').slick({
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
 */

$(document).ready(function () {
    $('.variable-width').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        appendArrows: $('.slider-nav'),
    });
});
