$(document).ready(function () {
    mobileSidenav();
});

function carouselIndicator() {
    $(".carousel-item").hover(function () {
        $('.carousel-control-prev, .carousel-control-next').fadeIn();
    }, function () {
        $('.carousel-control-prev, .carousel-control-next').fadeOut();
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
    });

    $('.sidenav-dropdown').click(function () {
        $('.sidenav-dropdown i').toggleClass('fi-rr-angle-small-down fi-rr-angle-small-up')

        $('.sidenav-dropdown-container').slideToggle();
    })
}