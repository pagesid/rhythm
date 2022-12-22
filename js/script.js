"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}


// Scroll
$("[data-scroll]").on("click", (function (e) {
	e.preventDefault();
	let t = $(this).data("scroll"),
		n = $(t).offset().top;
	$("html, body").animate({
		scrollTop: n
	}, 900)
}))

// $(".menu__body .menu__list .menu__link").on("click", (function (e) {
// 	e.preventDefault(),
// 		$(".menu__body, .menu__icon").removeClass("active")
// }))