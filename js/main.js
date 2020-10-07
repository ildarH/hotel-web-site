$(document).ready(function () {
  //Animate On Scroll Library initialization
  AOS.init();

  //swiper slider for hotel section
  var hotelSlider = new Swiper('.hotel-slider', {
    direction: 'horizontal',
    loop: true,

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

  $('.parallax-window').parallax({
    naturalWidth: 2880,
    naturalHeight: 1913,
  });

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
});
