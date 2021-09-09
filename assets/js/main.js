var oventDoc;
$(function() {
    
    "use strict";
    
    oventDoc = {
        init: function () {
            this.mianMenu();
        },
      //===== 01. Main Menu
        mianMenu() {
            // Variables
            var var_window = $(window),
              navContainer = $('.nav-container'),
              pushedWrap = $('.nav-pushed-item'),
              pushItem = $('.nav-push-item'),
              pushedHtml = pushItem.html(),
              pushBlank = '',
              navbarToggler = $('.navbar-toggler'),
              navMenu = $('.nav-menu'),
              navMenuLi = $('.nav-menu ul li ul li'),
              closeIcon = $('.navbar-close');
            // navbar toggler
            navbarToggler.on('click', function () {
              navbarToggler.toggleClass('active');
              navMenu.toggleClass('menu-on');
            });
            // close icon
            closeIcon.on('click', function () {
              navMenu.removeClass('menu-on');
              navbarToggler.removeClass('active');
            });

            // adds toggle button to li items that have children
            navMenu.find('li a').each(function () {
              if ($(this).next().length > 0) {
                $(this)
                  .parent('li')
                  .append(
                    '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
                  );
              }
            });

            // expands the dropdown menu on each click
            navMenu.find('li .dd-trigger').on('click', function (e) {
              e.preventDefault();
              $(this)
                .parent('li')
                .children('ul')
                .stop(true, true )
                .slideToggle(350);
              $(this).parent('li').toggleClass('active');
            });

            // check browser width in real-time
            function breakpointCheck() {
              var windoWidth = window.innerWidth;
              if (windoWidth <= 991) {
                navContainer.addClass('breakpoint-on');

                pushedWrap.html(pushedHtml);
                pushItem.hide();
              } else {
                navContainer.removeClass('breakpoint-on');

                pushedWrap.html(pushBlank);
                pushItem.show();
              }
            }

            breakpointCheck();
            var_window.on('resize', function () {
              breakpointCheck();
            });
        },
    };
    // Document Ready
    $(document).ready(function () {
      oventDoc.init();
    });
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    //===== Sticky
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else{
            $(".header-navigation").addClass("sticky");
        }
    });
    
    //====== Magnific Popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    //===== Magnific Popup
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
    //===== Back to top
    
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== page scroll 
    $("a.page_scroll").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({ scrollTop: $(hash).offset().top - $("header").outerHeight() + "px" }, 1200, function () {});
        }
    });

    //=====  Easypiechart js
    $('.chart_1').easyPieChart({
        barColor: function (percent) {
            var barColor = '#767676'; // this is default barColor
            if($(this.el).data('barcolor')) {
                barColor = '#' + $(this.el).data('barcolor')
            }
            return barColor;
        },
        size: 230,
        trackColor: 'rgba(255, 255, 255, .14)',
        easing: 'easeOutBounce',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 10,
        animate: 2000
    });
    $('.chart_2').easyPieChart({
        barColor: function (percent) {
            var barColor = '#767676'; // this is default barColor
            if($(this.el).data('barcolor')) {
                barColor = '#' + $(this.el).data('barcolor')
            }
            return barColor;
        },
        size: 150,
        trackColor: 'rgba(255, 255, 255, .14)',
        easing: 'easeOutBounce',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 10,
        animate: 2000
    });

    //=====  Slick Slider js
    var blog_slide_v1 = $('.blog_slide_v1');
    var sliderArrows = $('#arrows');
    blog_slide_v1.slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        appendArrows: sliderArrows,
        prevArrow:'<div class="arrow prev"><i class="fal fa-angle-left"></i>Prev</div>',
        nextArrow:'<div class="arrow next">Next<i class="fal fa-angle-right"></i></div>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    var post_slide = $('.post-slide');
    post_slide.slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        prevArrow:'<div class="arrow prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow:'<div class="arrow next"><i class="fal fa-arrow-right"></i></div>'
    });
    var related_post_slide = $('.related-post-slide');
    related_post_slide.slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        speed: 1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    var team_slide_v1 = $('.team_slide');
    var sliderArrows = $('#arrows');
    team_slide_v1.slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        appendArrows: sliderArrows,
        prevArrow:'<div class="arrow prev"><i class="fal fa-angle-left"></i>Prev</div>',
        nextArrow:'<div class="arrow next">Next<i class="fal fa-angle-right"></i></div>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 780,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
        ]
    });

    //=====  Isotope Filter
    
    $('#event-filter').imagesLoaded( function() {
        var $grid = $('.filter_grid').isotope({
            itemSelector: '.grid_column',
            layoutMode: 'fitRows'
        });
        $('.events-filter').on('click', '.events-btn', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.events-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.events-btn', function () {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    $('#event_filter_2').imagesLoaded( function() {
        var $grid = $('.filter_grid').isotope({
            itemSelector: '.grid_column',
            layoutMode: 'fitRows'
        });
        $('.event-filter').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.event-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    $('#masonry-gallery').imagesLoaded( function() {
        var $grid = $('.masonry-gallery').isotope({
            itemSelector: '.grid_column',
            percentPosition: true,
            masonry: {
              columnWidth: 1
            }
        });
    });
    $('#gallery-blog').imagesLoaded( function() {
        var $grid = $('.masonry-gallery').isotope({
            itemSelector: '.grid_column',
            percentPosition: true,
            masonry: {
              columnWidth: 0
            }
        });
    });
    
});