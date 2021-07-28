$(document).ready(function () {
    footer();
});

function startLoading() {
    $('body').css("overflow", "hidden");

    let path = "";
    let title = $('title').text();

    if (title == "Karéns House | Hidden Paradise of Ubud") {
        path = "assets";
    } else {
        path = "../assets";
    }

    $('.loading-container').html(`
        <div class="loading-content">
            <div id="loading-content" class="animate__animated animate__fadeInUp">
                <img src="${path}/logo/logo.svg">
                <div class="loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </div>
    `)
}

function stopLoading() {
    $('.loading-container').addClass("animate__slideOutUp");
    $('body').css("overflow", "visible");
}

function footer() {

    let imgPath;
    let navPath;
    let navIndex;
    let title = $('title').text();

    if (title == "Karéns House | Hidden Paradise of Ubud") {
        imgPath = "assets";
        navPath = "";
        navIndex = "index.html";
    } else {
        imgPath = "../assets";
        navPath = "../";
        navIndex = "../index.html"
    }

    $('footer').html(`
        <hr>
        <div class="footer-content">
            <div class="footer-item">
                <h6 class="footer-link-title">Karéns House</h6>
                <a href="${navIndex}#about">
                    <h6 class="footer-link">About</h6>
                </a>
                <a href="${navIndex}#rooms">
                    <h6 class="footer-link">Room Types</h6>
                </a>
                <a href="${navIndex}#discover">
                    <h6 class="footer-link">Discover</h6>
                </a>
                <a href="${navIndex}#location">
                    <h6 class="footer-link">Location</h6>
                </a>
            </div>
            <div class="footer-item">
                <h6 class="footer-link-title">Room Type</h6>
                <a href="${navPath}rooms/?type=1">
                    <h6 class="footer-link">Family Room</h6>
                </a>
                <a href="${navPath}rooms/?type=2">
                    <h6 class="footer-link">Double Room Terrace View</h6>
                </a>
                <a href="${navPath}rooms/?type=3">
                    <h6 class="footer-link">Double Room Mountain View</h6>
                </a>
            </div>
            <div class="footer-item">
                <h6 class="footer-link-title">Gallery</h6>
                <a href="${navPath}gallery/">
                    <h6 class="footer-link">Front</h6>
                </a>
                <a href="${navPath}gallery/">
                    <h6 class="footer-link">Bedroom</h6>
                </a>
                <a href="${navPath}gallery/">
                    <h6 class="footer-link">Living Room</h6>
                </a>
                <a href="${navPath}gallery/">
                    <h6 class="footer-link">Bathroom</h6>
                </a>
                <a href="${navPath}gallery/">
                    <h6 class="footer-link">Terrace</h6>
                </a>
            </div>
            <div class="footer-item">
                <h6 class="footer-link-title">Location</h6>
                <a href="${navPath}location/">
                    <h6 class="footer-link">Nearby Location</h6>
                </a>
            </div>
        </div>

        <hr class="mb-0">
        <div class="mobile-footer-link" data-selected="footer-index">
            <a href="${navIndex}">
                <div class="footer-dropdown">            
                    <h6 class="footer-link-title">Karéns House</h6>
                    <i id="icon-footer-index" class="footer-dropdown-icon fi-rr-angle-small-right"></i>
                </div>
            </a>
        </div>
        <div class="mobile-footer-link" data-selected="footer-room-type">
            <div class="footer-dropdown">            
                <h6 class="footer-link-title">Room Types</h6>
                <i id="icon-footer-room-type" class="footer-dropdown-icon fi-rr-angle-small-right"></i>
            </div>
            <div class="footer-dropdown-link" id="footer-room-type">
                <a href="${navPath}rooms/?type=1">
                    <h6 class="footer-link">Family Room</h6>
                </a>
                <a href="${navPath}rooms/?type=2">
                    <h6 class="footer-link">Double Room Terrace View</h6>
                </a>
                <a href="${navPath}rooms/?type=3">
                    <h6 class="footer-link">Double Room Mountain View</h6>
                </a>
            </div>
        </div>
        <div class="mobile-footer-link"  data-selected="footer-gallery">
            <a href="${navPath}gallery/">
                <div class="footer-dropdown">            
                    <h6 class="footer-link-title">Gallery</h6>
                    <i id="icon-footer-gallery" class="footer-dropdown-icon fi-rr-angle-small-right"></i>
                </div>
            </a>
        </div>
        <div class="mobile-footer-link" data-selected="footer-location">
            <a href="${navPath}location/">
                <div class="footer-dropdown">            
                    <h6 class="footer-link-title">Location</h6>
                    <i id="icon-footer-location" class="footer-dropdown-icon fi-rr-angle-small-right"></i>
                </div>
            </a>
        </div>
        <div class="logo-icon-content">
            <img src="${imgPath}/logo/logo-black.svg" alt="">
            <div class="sosmed-content">
                <h6 class="footer-link"><small>Stay Connected with Us</small></h6>
                <div class="footer-sosmed-content">
                    <a href="https://www.instagram.com/karenshouse_ubud/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/karenshouseubud/" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="copyrigtht-top-content">
            <p class="text-copyright"><small>Copyright &copy 2021, Karéns House. All Rights Reserved</small></p>
            <a href="#pages" class="top">
                <div class="d-flex align-items-center">
                    <h6 class="text-copyright"><small>Top</small></h6>
                    <i class="ml-3 fi-rr-arrow-up"></i>
                </div>
            </a>
        </div>
    `);

    $('.mobile-footer-link').click(function () {
        let id = $(this).data('selected');
        console.log(id)
        $(`#icon-${id}`).toggleClass('fi-rr-angle-small-right fi-rr-angle-small-up')
        $(`#${id}`).toggleClass('footer-dropdown-active');

        setTimeout(function () {
            $(`#${id}`).removeClass('footer-dropdown-active');
            $(`#icon-${id}`).toggleClass('fi-rr-angle-small-up fi-rr-angle-small-right')
        }, 6000)
    });
}