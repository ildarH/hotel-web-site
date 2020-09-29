//swiper slider for hotel section
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button-next',
    prevEl: '.hotel-slider__button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// swiper slider for review section
var reviewSlider = new Swiper('.reviews-slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },
});

// yandex map
ymaps.ready(init);
function init() {
  let myPlacemark;
  var myMap = new ymaps.Map('map', {
    center: [37.78526803249929, -122.4082276146421],
    zoom: 16,
  });

  (myPlacemark = new ymaps.Placemark([37.78526803249929, -122.4082276146421])),
    {
      hintContent: 'Hotel',
      balloonContent: 'Hilton Grand Hotel',
    };
  myMap.geoObjects.add(myPlacemark);
}

// parallax newsletter section

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.pageYOffset || document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.pageXOffset || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

const box = document.querySelector('.newsletter'),
  URL_BG_PATH = '../img/newsletter_background.jpg';

document.addEventListener(
  'scroll',
  function () {
    let scrollValue = window.pageYOffset;
    // console.log(messageText);
    if (isElementInViewport(box)) {
      box.style.background = "url('" + URL_BG_PATH + "')";
      box.style.backgroundPositionY = scrollValue * 0.1 + '%';
    } else {
      // box.style.background = '';
    }
  },
  {
    passive: true,
  },
);
