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
var reviewSlider = new Swiper('.reviews-slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },
});

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
