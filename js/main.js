//Animate On Scroll Library initialization
// AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

//swiper slider for hotel section
var hotelSlider = new Swiper('.hotel-slider', {
  direction: 'horizontal',
  loop: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.hotel-slider__button-next',
    prevEl: '.hotel-slider__button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var swiper = new Swiper(".reviews-slider", {
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
});

// swiper slider for review section
// var reviewSlider = new Swiper('.reviews-slider', {
//   // direction: 'horizontal',
//   loop: true,
//   navigation: {
//     nextEl: '.reviews-slider__button-next',
//     prevEl: '.reviews-slider__button-prev',
//   },
// });

$(document).ready(function () {
  // mobile menu
  let menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom_visible');
  });

  let modalButton = $('[data-toggle=modal]'),
    closeModalButton = $('.modal__close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    let modalOverlay = $('.modal__overlay'),
      modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
  }

  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $('.modal__overlay'),
      modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  }

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      closeModal(event);
    }
  });

  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Укажите имя',
          minlength: 'Имя должно быть не короче двух букв',
        },
        email: {
          required: 'Укажите адрес электронной почты',
          email: 'Адрес электронной почты должен быть в формате name@domain.com',
        },
        phone: {
          required: 'Укажите номер телефона',
        },
      },
    });
  });
  
  $('.input-phone').mask('+0 (000) 000-00-00');
  const mediaQuery = window.matchMedia('(min-width: 993px)');
  console.log(mediaQuery.matches, ' - match');
  let newsletterSection = document.querySelector('.newsletter');
  function mediaResponsive(e) {
    console.log('newsletter obj: ', newsletterSection);
    if (e.matches) {
      newsletterSection.classList.add('parallax-window');
      newsletterSection.dataset.parallax = 'scroll';
      newsletterSection.dataset.imageSrc = 'img/newsletter_background.jpg';
      // $('.parallax-window').parallax({
      //   naturalWidth: 2880,
      //   naturalHeight: 1913,
      // });
    } else {
      let mirror = document.querySelector('.parallax-mirror');
      // mirror.remove();
      newsletterSection.classList.remove('parallax-window');
      newsletterSection.dataset.parallax = '';
      newsletterSection.dataset.imageSrc = '';
    }
  }
  
  mediaQuery.addListener(mediaResponsive);
});

// lazy loading image
!(function (window) {
  var $q = function (q, res) {
      if (document.querySelectorAll) {
        res = document.querySelectorAll(q);
      } else {
        var d = document,
          a = d.styleSheets[0] || d.createStyleSheet();
        a.addRule(q, 'f:b');
        for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
          l[b].currentStyle.f && c.push(l[b]);

        a.removeRule(0);
        res = c;
      }
      return res;
    },
    addEventListener = function (evt, fn) {
      window.addEventListener
        ? this.addEventListener(evt, fn, false)
        : window.attachEvent
        ? this.attachEvent('on' + evt, fn)
        : (this['on' + evt] = fn);
    },
    _has = function (obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    };
  function loadImage(el, fn) {
    var img = new Image(),
      src = el.getAttribute('data-src');
    img.onload = function () {
      if (!!el.parent) el.parent.replaceChild(img, el);
      else el.src = src;

      fn ? fn() : null;
    };
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  var images = new Array(),
    query = $q('img.lazy'),
    processScroll = function () {
      for (var i = 0; i < images.length; i++) {
        if (elementInViewport(images[i])) {
          loadImage(images[i], function () {
            images.splice(i, i);
          });
        }
      }
    };
  // Array.prototype.slice.call is not callable under our lovely IE8
  for (var i = 0; i < query.length; i++) {
    images.push(query[i]);
  }

  processScroll();
  addEventListener('scroll', processScroll);
})(this);
