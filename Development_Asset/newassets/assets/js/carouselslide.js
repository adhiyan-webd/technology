(function ($) {
    "use strict"; $(document).ready(function () {
        $('.carousel_se_01_carousel').owlCarousel({
            items: 3,
            nav: true,
            loop: true,
            mouseDrag: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 2900,
            autoplayHoverPause: true,
            responsiveClass: true,
            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    $(document).ready(function () {
        $('.carousel_se_02_carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 2900,
            autoplayHoverPause: true,
            responsiveClass: true,
            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });
    $(document).ready(function () {
        $('.carousel_se_03_carousel').owlCarousel({
            items: 4, nav: true, dots: false, loop: true, mouseDrag: true, responsiveClass: true, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true, navText: ["<i class='icofont-scroll-left'></i>", "<i class='icofont-scroll-right'></i>"], responsive: { 0: { items: 1 }, 480: { items: 2 }, 767: { items: 3 }, 992: { items: 3 }, 1200: { items: 4 } }
        });
    });
})(jQuery);