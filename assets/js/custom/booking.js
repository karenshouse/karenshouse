$('.booking').click(function () {
    $('body').css("overflow", "hidden");

    let data = [
        ["Booking.com", "https://www.booking.com/hotel/id/karen-house-ubud.id.html"],
        ["Tiket.com", "https://www.tiket.com/hotel/indonesia/karen-house-ubud-310001603224194661"],
        ["Chambers-Hotes.fr", "https://www.chambres-hotes.fr/chambres-hotes_karen-house-ubud_ubud_h4439009_en.html"]
    ];

    customAlertBooking("Book Via", data);
});