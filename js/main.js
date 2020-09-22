var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button__next',
      prevEl: '.slider-button__prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  })

ymaps.ready(init);
function init(){ 
    let myPlacemark;
    var myMap = new ymaps.Map("map", {
        center: [37.78526803249929,-122.4082276146421],
        zoom: 16
    });

  myPlacemark = new ymaps.Placemark([37.78526803249929,-122.4082276146421]), {
    hintContent: 'Hotel',
    balloonContent: 'Hilton Grand Hotel'
  };
  myMap.geoObjects.add(myPlacemark)
}