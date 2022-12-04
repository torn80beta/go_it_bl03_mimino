$(document).ready(function () {
    $('.variable-width').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        appendArrows: $('.slider-nav'),
        speed: 300,
        rtl: true,
    });
});

$(document).ready(function () {
    $('.triple-slider').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        appendArrows: $('.slider-nav'),
        speed: 300,
    });
});
