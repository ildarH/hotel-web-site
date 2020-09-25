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
window.addEventListener('scroll', function (e) {
  const target = document.querySelector('.newsletter');
  let scrollValue = window.pageYOffset;
  let scrollRate = scrollValue * 0.1;
  target.style.backgroundPosition = 'center ' + scrollRate + '%';
  console.log(scrollRate);
});
