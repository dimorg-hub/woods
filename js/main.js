$('.btn1').on('click', function () {
	$('.history, .complex, .equipment, .partners, .manual, .requisites, .certificates, .company__btn').removeClass('active');
	$('.about, .btn1').addClass('active');
});
$('.btn2').on('click', function () {
	$('.about, .complex, .equipment, .partners, .manual, .requisites, .certificates, .company__btn').removeClass('active');
	$('.history, .btn2').addClass('active');
});
$('.btn3').on('click', function () {
	$('.about,.history, .equipment, .partners, .manual, .requisites, .certificates, .company__btn').removeClass('active');
	$('.complex, .btn3').addClass('active');
});
$('.btn4').on('click', function () {
	$('.about,.history, .complex, .partners, .manual, .requisites, .certificates, .company__btn').removeClass('active');
	$('.equipment, .btn4').addClass('active');
});
$('.btn5').on('click', function () {
	$('.about,.history, .complex, .equipment, .manual, .requisites, .certificates, .company__btn').removeClass('active');
	$('.partners, .btn5').addClass('active');
});
$('.btn6').on('click', function () {
	$('.about,.history, .complex, .equipment, .partners, .requisites, .certificates, .company__btn').removeClass('active');
	$('.manual, .btn6').addClass('active');
});
$('.btn7').on('click', function () {
	$('.about,.history, .complex, .equipment, .partners, .manual, .certificates, .company__btn').removeClass('active');
	$('.requisites, .btn7').addClass('active');
});
$('.btn8').on('click', function () {
	$('.about,.history, .complex, .equipment, .partners, .manual, .requisites, .company__btn').removeClass('active');
	$('.certificates, .btn8').addClass('active');
});

$('.product__btn--btn1').on('click', function () {
	$('.product__content, .chips, .sawdust, .product__btn--btn2, .product__btn--btn3').removeClass('active');
	$('.lumber, .product__btn--btn1').addClass('active');
});
$('.product__btn--btn2').on('click', function () {
	$('.product__content, .lumber, .sawdust, .product__btn--btn1, .product__btn--btn3').removeClass('active');
	$('.chips, .product__btn--btn2').addClass('active');
});
$('.product__btn--btn3').on('click', function () {
	$('.product__content, .lumber, .chips, .product__btn--btn1, .product__btn--btn2').removeClass('active');
	$('.sawdust, .product__btn--btn3').addClass('active');
});

$('.product__link--1').on('click', function () {
	$('.product__content, .chips, .sawdust, .product__btn--btn2, .product__btn--btn3').removeClass('active');
	$('.lumber, .product__btn--btn1').addClass('active');
});
$('.product__link--2').on('click', function () {
	$('.product__content, .lumber, .sawdust, .product__btn--btn1, .product__btn--btn3').removeClass('active');
	$('.chips, .product__btn--btn2').addClass('active');
});
$('.product__link--3').on('click', function () {
	$('.product__content, .lumber, .chips, .product__btn--btn1, .product__btn--btn2').removeClass('active');
	$('.sawdust, .product__btn--btn3').addClass('active');
});


$('.link-part--1').on('click', function () {
	$('.production__item-block--2,.production__item-block--3,.production__item-block--4').removeClass('active');
	$('.production__item-block--1').addClass('active');
});
$('.link-part--2').on('click', function () {
	$('.production__item-block--1,.production__item-block--3,.production__item-block--4').removeClass('active');
	$('.production__item-block--2').addClass('active');
});
$('.link-part--3').on('click', function () {
	$('.production__item-block--1,.production__item-block--2,.production__item-block--4').removeClass('active');
	$('.production__item-block--3').addClass('active');
});
$('.link-part--4').on('click', function () {
	$('.production__item-block--1,.production__item-block--2,.production__item-block--3').removeClass('active');
	$('.production__item-block--4').addClass('active');
});

if (window.innerWidth <= 768) {
	$('.header__burger, .header__inner a').click(function () {
		$('.header__burger, .header__inner').toggleClass('active');
	});
}
if (window.innerWidth <= 768) {
	$(".company__btn").on("click", function (men) {
		men.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		top -= 100;
		$('body,html').animate({ scrollTop: top }, 800);
	});
}


$(".production__link, .arrows-up--link, .company__btn").on("click", function (men) {
	men.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	top -= 100;
	$('body,html').animate({ scrollTop: top }, 800);
});


$('[data-fancybox="images"]').fancybox({
	afterLoad: function (instance, current) {
		var pixelRatio = window.devicePixelRatio || 1;

		if (pixelRatio > 1.5) {
			current.width = current.width / pixelRatio;
			current.height = current.height / pixelRatio;
		}
	}
});

$(".contacts__input,.contacts__textarea").focus(function () {
	$(this).parent().addClass("focus");
})
	.blur(function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass("focus");
		}
	});






$('.slayder__list').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});

let isActive = false;
$(window).on('scroll', function () {
	if ($(document).scrollTop() >= 100) {
		if (!isActive) {
			$('.arrows-up').addClass('to-up');
			isActive = true;
		}
	} else {
		if (isActive) {
			$('.arrows-up').removeClass('to-up');
			isActive = false;
		}
	}
});

$('.order-btn,.lumber__btn').on('click', function () {
	$('.form__wrapper').toggleClass('active');
});
$('.close__form').on('click', function () {
	$('.form__wrapper').removeClass('active');
});