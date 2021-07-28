$(document).ready(function () {
    navbarScroll();
    carouselIndicator();
    mobileSidenav();
});

function carouselIndicator() {
    $(".carousel-item").hover(function () {
        $('.carousel-control-prev, .carousel-control-next').fadeIn();
    }, function () {
        $('.carousel-control-prev, .carousel-control-next').fadeOut();
    });
}

function navbarScroll() {
    $(window).scroll(function (event) {
        let scroll = $(window).scrollTop();

        if (scroll > 100) {
            $(".nav-white-container").fadeIn();
            $('.nav-white-mobile-container').fadeIn();

        } else {
            $(".nav-white-container").fadeOut();
            $('.nav-white-mobile-container').fadeOut();
        }

        if (scroll > 300) {
            $(".btn-go-top").slideDown();
        } else {
            $(".btn-go-top").slideUp();
        }
    });
}

function mobileSidenav() {
    $('.nav-white-menu-icon, .menu-icon').click(function () {
        $('.sidenav-mobile-container').css({
            "left": "0"
        });
        $('body').css("overflow", "hidden");
    });

    $('.sidenav-mobile-header i').click(function () {
        $('.sidenav-mobile-container').css({
            "left": "-100%"
        });
        $('body').css("overflow", "visible");
        $('.sidenav-dropdown-container').slideUp();

        if ($('.sidenav-dropdown i').hasClass('fi-rr-angle-small-up')) {
            $('.sidenav-dropdown i').toggleClass('fi-rr-angle-small-up fi-rr-angle-small-down');
        }
    });

    $('.sidenav-dropdown').click(function () {
        $('.sidenav-dropdown i').toggleClass('fi-rr-angle-small-down fi-rr-angle-small-up')
        $('.sidenav-dropdown-container').slideToggle();
    })
}