if (document.title == 'Главная' || window.location.pathname == '/') {
	$('body').addClass('index');
}

$(document).on('click', '.main-faq-item-info__text span:first-child', function () {
	$('.main-faq-item-info__text').toggleClass('active');
});

$(document).on('click', '.main-faq-item-info-category__title', function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).next().slideUp();
	} else {
		$('.main-faq-item-info-category__text').slideUp();
		$('.main-faq-item-info-category__title').removeClass('active');
		$(this).addClass('active');
		$(this).next().slideDown();
	}
});

$(document).on('click', '.main-text-columns-item__btn', function () {
	if ($(this).closest('.main-text-columns-item').hasClass('active')) {
		$(this).text('Показать больше');
	} else {
		$(this).text('Cвернуть');
	}
	$(this).closest('.main-text-columns-item').toggleClass('active');
});

$(document).on('click', '.main-methods-items-item__title', function () {
	if ($(this).closest('.main-methods-items-item').hasClass('active')) {
		$(this).closest('.main-methods-items-item').removeClass('active')
	} else {
		$('.main-methods-items-item').removeClass('active');
		$(this).closest('.main-methods-items-item').addClass('active');
	}
});

$(document).on('click', '.anchor__link', function (e) {
	if ((window.location.pathname != $(this).attr('href').split('#')[0])) {
		return
	} else {
		idElem = $(this).attr('href').split('#')[1];
		if (idElem != undefined) {
			e.preventDefault();
			var valScrollTop = $('#' + idElem).offset().top;
			$('body,html').animate({
				scrollTop: valScrollTop - 50
			}, 800);
		}
	}
});

$(document).on('click', '.main-fix__close', function (e) {
	e.preventDefault();
	e.stopPropagation();
	$('.main-fix').hide();
});


/*Переключение шагов анкеты*/
let temp1 = false,
	temp2 = false,
	flag1 = false,
	flag2 = false,
	flag3 = false;
$(document).on('change', '.main-anketa-steps-step-answers-col-input input', function (e) {
	let valueInputFlag = $(this).attr('name').split('anketa')[1];
	if (valueInputFlag == '1') {
		temp1 = true;
		$('input[name="anketa1"]').removeClass('error-input');
	}
	if (valueInputFlag == '2') {
		temp2 = true;
		$('input[name="anketa2"]').removeClass('error-input');
	}
	if (temp1 == true && temp2 == true) flag1 = true;
	if (valueInputFlag == '3') {
		flag2 = true;
		$('input[name="anketa3"]').removeClass('error-input');
	}
	if (valueInputFlag == '4') {
		flag3 = true;
		$('input[name="anketa4"]').removeClass('error-input');
	}
});

$(document).on('click', '.main-anketa-steps-btns__btn', function (e) {
	let currentStep = $(this).closest('.main-anketa-steps').attr('data-step');
	if ($(this).hasClass('next')) {
		if (currentStep == 1 && flag1 == true) {
			currentStep++;
			$('input').removeClass('error-input');
			$(this).closest('.main-anketa-steps').attr('data-step', currentStep);
			return
		} else {
			if (temp1 == false) $('input[name="anketa1"]').addClass('error-input');
			if (temp2 == false) $('input[name="anketa2"]').addClass('error-input');
		}
		if (currentStep == 2 && flag2 == true) {
			currentStep++;
			$('input').removeClass('error-input');
			$(this).closest('.main-anketa-steps').attr('data-step', currentStep);
			return
		} else {
			$('input[name="anketa3"]').addClass('error-input');
		}
		if (currentStep == 3 && flag3 == true) {
			currentStep++;
			$('input').removeClass('error-input');
			$(this).closest('.main-anketa-steps').attr('data-step', currentStep);
			return
		} else {
			$('input[name="anketa4"]').addClass('error-input');
		}
	} else {
		currentStep--;
		$('input').removeClass('error-input');
		$(this).closest('.main-anketa-steps').attr('data-step', currentStep);
	}
});
/*Переключение шагов анкеты Конец*/


/*Подсветка методик*/
let input13,
	input46,
	input79;
$(document).on('change', '.main-methods-vote-item-input input', function (e) {
	let inputName = $(this).attr('name'),
		inputValue = $(this).attr('value');

	if (inputName == 'vote1' && inputValue == '1') {
		input13 = 'input1'
	}
	if (inputName == 'vote1' && inputValue == '2') {
		input13 = 'input2'
	}
	if (inputName == 'vote1' && inputValue == '3') {
		input13 = 'input3'
	}
	if (inputName == 'vote2' && inputValue == '1') {
		input46 = 'input4'
	}
	if (inputName == 'vote2' && inputValue == '2') {
		input46 = 'input5'
	}
	if (inputName == 'vote2' && inputValue == '3') {
		input46 = 'input6'
	}
	if (inputName == 'vote3' && inputValue == '1') {
		input79 = 'input7'
	}
	if (inputName == 'vote3' && inputValue == '2') {
		input79 = 'input8'
	}
	if (inputName == 'vote3' && inputValue == '3') {
		input79 = 'input9'
	}

	if (input13 == 'input3' || input46 == 'input6') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (!input13 && !input46 && input79) {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (!input13 && !input46 && input79 == 'input7') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="2"], [data-method="4"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input1' && !input46) {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="2"], [data-method="4"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input2' && !input46) {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (!input13 && input46 == 'input4') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="3"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (!input13 && input46 == 'input5') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input1' && input46 == 'input4') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="3"], [data-method="4"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input1' && input46 == 'input5') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="2"], [data-method="4"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input2' && input46 == 'input4') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="3"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input2' && input46 == 'input5') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="1"], [data-method="2"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
	if (input13 == 'input2' && input46 == 'input6') {
		$('.main-methods-items-item').removeClass('bg');
		$('[data-method="1"], [data-method="5"], [data-method="6"], [data-method="7"]').addClass('bg');
	}
});
/*Подсветка методик Конец*/


$(window).scroll(function () {
	if ($('.main-picture-top').length) {
		let top = $('.main-picture-top').offset().top;
		if (($(window).scrollTop() + $(window).height()) > top) {
			$('.main-fix').hide()
		}
	}
});