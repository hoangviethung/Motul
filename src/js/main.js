// Function thêm class lazyload vào các thẻ <img> có thuộc tính [data-src]
const addClassLazyload = () => {
	let imgList = document.querySelectorAll("img[data-src]")
	Array.prototype.forEach.call(imgList, function (el) {
		if (el.className.length > 0) {
			el.className = el.className + " lazyload"
		} else {
			el.className = "lazyload"
		}
	});
}

// MENU FIXED
function _scrollMenuFixed() {
	var scroll = $(window).scrollTop();
	var heightHeader = $('header').height();
	if (scroll >= heightHeader) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
}

// XỬ LÍ BUTTON MENU TOGGLE MOBILE
function _toggle_button_menu() {
	const moblietoggle = $('#mobile-toggle');
	if (!moblietoggle) { return false }
	moblietoggle.on('click', function () {
		const btnline1 = $('#btn_line1');
		const btnline2 = $('#btn_line2');
		const btnline3 = $('#btn_line3');
		if ((!btnline3) || (!btnline2) || (!btnline1)) { return }
		btnline1.toggleClass('line-close-1');
		btnline2.toggleClass('line_hidden');
		btnline3.toggleClass('line-close-3');
		const ellistmenuMB = $('#menu-mb');
		if (!ellistmenuMB) { return }
		ellistmenuMB.toggleClass('active-menu-mb');
	})
}

// SHOW MENU MOBILE
function showMenuMobile() {
	$('#mobile-toggle').on('click', function () {
		$('.list-menu').toggleClass('active');
	});
}

// ĐÓNG NÚT MOBILE
function closeMenuMobile() {
	$('.item-menu').on('click', function (e) {
		console.log('OKKK')
		$('.list-menu').removeClass('active');


		const btnline1 = $('#btn_line1');
		const btnline2 = $('#btn_line2');
		const btnline3 = $('#btn_line3');
		btnline1.removeClass('line-close-1');
		btnline2.removeClass('line_hidden');
		btnline3.removeClass('line-close-3');
	});
}







$(document).ready(function () {
	objectFitImages("img.ofc"); // Luôn luôn chậy polyfill cho thuôc tính object-fit: cover trên các phiên bản IE >= 9
	addClassLazyload();
	// Luôn luôn addClass lazyload cho các hình ảnh có thuộc tính [data-src]
	_toggle_button_menu();
	showMenuMobile();
	closeMenuMobile();
})

$(document).ajaxComplete(function () {
	addClassLazyload();
})