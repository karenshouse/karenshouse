$(document).ready(function () {
	read_room_type();
	read_other_room();
	// dummyImg();
});

function read_room_type() {
	startLoading();
	let id = window.location.href.split('=')[1];

	$.ajax({
		url: `https://api-karens-house.000webhostapp.com/read-room-type.php?id=${id}`,
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				const data = response.data[0];
				const facilities = response.data[0].facilities

				$('title').text(`${data.title} | Karéns House Ubud`);
				$('#title').text(data.title);
				$('#desc').text(data.desc);
				$('#room_size').text(data.room_size);
				$('#bed').text(data.bed);
				$('#bathroom').text(data.bathroom);
				$('#features-title').text(data.title);
				$('#thumbnail').attr("src", `https://api-karens-house.000webhostapp.com/foto/room-type/${data.thumbnail}`);

				$.each(facilities, function (i, item) {
					$('#facilities').append(`
						<div class="room-features-item">
							<i class="fas ${item.facility_icon}"></i> <span class="room-facility">${item.facility_title}</span>
						</div>
					`);
				});
				stopLoading();
			}
		},
		error: function () {
			read_room_type();
		}
	});

	$.ajax({
		url: "https://api-karens-house.000webhostapp.com/read-room-img.php",
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				let data = ''

				if (id == 1) {
					data = response.data.family;
				} else if (id == 2) {
					data = response.data.mountain;
				} else {
					data = response.data.terrace;
				}

				$.each(data, function (i, item) {
					$('#room-img').append(`
						<div class="room-img-item">
							<a href="https://api-karens-house.000webhostapp.com/${item}" data-fancybox="gallery">
								<img class="room-img" data-src="https://api-karens-house.000webhostapp.com/${item}">
							</a>
						</div>
					`);

					$('.room-img').lazy({
						effect: "fadeIn",
						effectTIme: 1000,
						onFinishedAll: function () {}
					});
				});
			}
		},
		error: function () {
			read_room_type();
		}
	});
}

function dummyImg() {
	const N = 5;
	const data = Array.from(Array(N + 1).keys()).slice(1);
	startLoading()

	$.each(data, function (i, data) {
		$('#room-img').append(`
		<div class="room-img-item">
			<a href="https://source.unsplash.com/random?sig=${data + 10}" data-fancybox="gallery">
				<img class="room-img" data-src="https://source.unsplash.com/random?sig=${data + 10}">
			</a>
		</div>
		`);

		$('.room-img').lazy({
			effect: "fadeIn"
		});
	});
	setInterval(function () {
		stopLoading();
	}, 2000)

}

function read_other_room() {
	let owl = $('#other-room').owlCarousel({
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplaySpeed: 500,
		margin: 40,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			700: {
				items: 1,
				margin: 0
			},
			1000: {
				items: 3,
				margin: 5
			}
		}
	});

	$.ajax({
		url: 'https://api-karens-house.000webhostapp.com/read-room-type.php',
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				const data = response.data;

				$.each(data, function (i, item) {
					owl.trigger('add.owl.carousel',
						[jQuery(`
							<div class="item">
								<div class="other-room-overlay">
									<p class="explore text-light text-left"><small>Room Type</small></p>
									<h5 class="overlay-title">${item.title}</h5>
									<a href="./?type=${item.id}">
										<p class="explore"><small>Explore <span class="icon-explore">&#10230;</span></small></p>
									</a>
								</div>
								<img class="other-img" src="https://api-karens-house.000webhostapp.com/foto/room-type/${item.thumbnail}">
							</div>
							`)]);
				});
				owl.trigger('refresh.owl.carousel');
			}
		},
		error: function () {
			read_other_room();
		}
	});
}