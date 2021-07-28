function closeAlert() {
    $('.alert-container').toggleClass('animate__fadeIn animate__fadeOut');
    $('.alert-content').toggleClass('animate__slideInUp animate__slideOutDown');
    $('body').css("overflow", "visible");
    setTimeout(function () {
        $('.alert-container').remove();
    }, 800);
}


function customAlert(header, title) {
    $('.custom-alert').html(`
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="fi-rr-cross alert-close"></i>
                </div>
                <div class="alert-body">
                    <h6 class="alert-location">${title}</h6>
                    <a href="https://maps.google.com/?q=${title}" target="_blank">
                        <button class="ml-3 btn btn-alert-book">Visit</button>
                    </a>
                </div>
            </div>
        </div>
    `);

    $('.alert-close, .alert-container').click(function () {
        closeAlert();
    });
}

function customAlertBooking(header, data) {
    $('.custom-alert').html(`
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="fi-rr-cross alert-close"></i>
                </div>
                <div id="booking-via">
                
                </div>
            </div>
        </div>
    `);

    $.each(data, function (i, item) {
        $('#booking-via').append(`
            <div class="alert-link-content">
                <h6 class="alert-location book-link">${item[0]}</h6>
                <a href="${item[1]}" target="_blank">
                    <button class="ml-3 btn btn-alert-book">Book</button>
                </a>
            </div>
        `)
    })

    $('.alert-close, .alert-container').click(function () {
        closeAlert();
    });
}