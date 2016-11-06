// for main menu mobile
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('hidden-menu-active');
        }
    });
});

// for main menu desctop
$(function () {
    $('.main-menu .list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('desctop-menu-active');
        }
    });
});

// for footer menu
$(function () {
    $('.footer-menu .menu-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('footer-menu-active');
        }
    });
});

// for services menu
$(function () {
    $('.footer-services .services-item-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('services-item-active');
        }
    });
});

// lenguage block
$(function () {
    $('#lenguage-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('lenguage-item-active');
        }
    });
});
$(function () {
    $('.lenguage-block-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('lenguage-block-list-active');
        }
    });
});

// lenguage block
$(function () {
    $('.pagination-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('pagination-active');
        }
    });
});

// for slider in Home page
var swiper_main = new Swiper('.swiper-container-home-page', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});
// mobile blog more slider
var swiper = new Swiper('.swiper-container-mobile', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// desctop blog more slider
var swiper = new Swiper('.swiper-container-desctop', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// FOR NEWS MORE PAGE
$('.center').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ],
  nextArrow: '<i class="fa fa-angle-right"></i>',
  prevArrow: '<i class="fa fa-angle-left"></i>',
});