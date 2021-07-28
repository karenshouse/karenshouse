$('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 5,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        678: {
            mergeFit: true
        },
        1000: {
            mergeFit: false
        }
    }
})