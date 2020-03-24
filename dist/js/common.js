$(function () {
  $(document).ready(function () {
    window.addEventListener("orientationchange", function () {
      location.reload();
    }, false);


    $('.header__languages select').dropdown({
      titleText: '',
      toggleText: '',
      closeText: ''
    });

    $('.vacancies-filter select').dropdown({
      titleText: '',
      toggleText: '',
      closeText: ''
    });

    // Click mobile menu
    $('.mobile-menu').on('click', function () {
      $(this).toggleClass('open');
      $('body').toggleClass('no-scroll');
      $('.header__nav-mobile').toggleClass('active')
    });

    $('.popup-gallery').magnificPopup({
      type: 'image',
      delegate: 'a',
      tClose: '',
      gallery: {
        enabled: true,
        tCounter: '',
      },
      callbacks: {
        buildControls: function () {
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
      }
    });

    $('.mfp-arrow-left').insertBefore('.mfp-figure');

    // Accordion
    $('.questions__item').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(".questions__item").removeClass('active');
        $(this).addClass('active');
      }
    });

    // Begin responsive
    if ($(window).width() < 992) {
      $('.header__languages').parent().remove();
      $('.header__nav, .header__languages-mobile, .header__social-mobile').wrapAll("<div class='header__menu-container container'></div>");
      $('.header__menu-container').wrap("<div class='header__nav-mobile'></div>");
      $('.header__nav-mobile').insertAfter('.header > .container');
      $('.footer__nav').parent().remove()
      $('.pagination__modal-btn').parent().insertBefore($('.pagination__btn_prev').parent())
    }

    // Begin offers sliders
    $('#banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: "<div class='slider-arrow slider-arrow_left'></div>",
      nextArrow: "<div class='slider-arrow slider-arrow_right'></div>",
      fade: false,
      draggable: false,
      adaptiveHeight: true,
    });

    $('#photo-presentation .current').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: "<div class='slider-arrow slider-arrow_left'></div>",
      nextArrow: "<div class='slider-arrow slider-arrow_right'></div>",
      fade: false,
      infinite: false,
      draggable: false,
      adaptiveHeight: true,
      asNavFor: '.photo-presentation__preview.preview',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            asNavFor: false,
            dots: true,
            customPaging : function(slider, i) {
              return '';
            },
          }
        }
      ]
    });

    $('#photo-presentation .preview').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.photo-presentation__current.current',
      arrows: false,
      dots: false,
      infinite: false,
      centerMode: false,
      draggable: false,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            asNavFor: false,
          }
        }
      ]
    });

  });
});
