(function () {
  let firstSlider = document.querySelector(
    '.first-slider-main-page-restaurant'
  );
  let firstSliderButtonNext = firstSlider.querySelector('.slick-next');
  let firstSliderButtonPrev = firstSlider.querySelector('.slick-prev');

  let secondSlider = document.querySelector(
    '.second-slider-main-page-restaurant'
  );
  let secondSliderButtonNext = secondSlider.querySelector('.slick-next');
  let secondSliderButtonPrev = secondSlider.querySelector('.slick-prev');

  let mainLeftButtons = document.querySelector(
    '.restaurant-about-slider__button--left'
  );
  let mainRightButtons = document.querySelector(
    '.restaurant-about-slider__button--right'
  );

  mainLeftButtons.addEventListener('click', function () {
    firstSliderButtonPrev.click();
    secondSliderButtonPrev.click();
  });
  mainRightButtons.addEventListener('click', function () {
    firstSliderButtonNext.click();
    secondSliderButtonNext.click();

    // firstSlider.addEventListener('slickNext', function () {
    //   secondSliderButtonNext.click();
    // });
  });

  (function () {
    firstSliderButtonPrev.classList.toggle('is-hidden');
    firstSliderButtonNext.classList.toggle('is-hidden');
    secondSliderButtonPrev.classList.toggle('is-hidden');
    secondSliderButtonNext.classList.toggle('is-hidden');
  })();
})();

(function () {
  let firstSlider = document.querySelector(
    '.first-slider-details-page-restaurant'
  );
  let firstSliderButtonNext = firstSlider.querySelector('.slick-next');
  let firstSliderButtonPrev = firstSlider.querySelector('.slick-prev');

  let secondSlider = document.querySelector(
    '.second-slider-details-page-restaurant'
  );
  let secondSliderButtonNext = secondSlider.querySelector('.slick-next');
  let secondSliderButtonPrev = secondSlider.querySelector('.slick-prev');

  let mainLeftButtons = document.querySelector(
    '.restaurant-details-slider__button--left'
  );
  let mainRightButtons = document.querySelector(
    '.restaurant-details-slider__button--right'
  );

  mainLeftButtons.addEventListener('click', function () {
    firstSliderButtonPrev.click();
    secondSliderButtonPrev.click();
  });
  mainRightButtons.addEventListener('click', function () {
    firstSliderButtonNext.click();
    secondSliderButtonNext.click();
  });

  (function () {
    firstSliderButtonPrev.classList.toggle('is-hidden');
    firstSliderButtonNext.classList.toggle('is-hidden');
    secondSliderButtonPrev.classList.toggle('is-hidden');
    secondSliderButtonNext.classList.toggle('is-hidden');
  })();
})();
