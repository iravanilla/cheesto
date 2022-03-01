;
(function ($) {
	$('.header__btn').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.full-form').offset().top
		}, 500);
		return false;
	});
	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 300, // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: ' ', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		};

		var o = $.extend({}, defaults, options),
			scrollId = '#' + o.scrollName;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');

		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).text(o.scrollText);
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({
			'display': 'none',
			'position': 'fixed',
			'z-index': '2147483647'
		});

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='" + o.scrollName + "-active'></div>");
			$(scrollId + "-active").css({
				'position': 'absolute',
				'top': o.topDistance + 'px',
				'width': '100%',
				'border-top': '1px dotted ' + o.activeOverlay,
				'z-index': '2147483647'
			});
		}

		// Scroll function
		$(window).scroll(function () {
			switch (o.animation) {
				case "fade":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
					break;
				case "slide":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
					break;
				default:
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
			}
		});

		// To the top
		$(scrollId).click(function (event) {
			$('html, body').animate({
				scrollTop: 0
			}, o.topSpeed);
			event.preventDefault();
		});

	};
})(jQuery);
$(function () {
	$("input[name='rooms']").stepper();
	$("input[name='restrooms']").stepper();
	$(".wrap input").stepper();
	$.scrollUp();
	$('.order-button').magnificPopup({});

	$("#tabs").tabs({
		activate: function (e, ui) {

			var bg = $('.ui-tabs-active a').data('bg');
			$('.tabs').css('background-image', 'url("/assets/template/img/' + bg + '")');
		}
	});

	// $('.owl-carousel').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     responsiveClass:true,
	//     autoplay: true,
	// 			    autoplayTimeout: 5000,
	//     navText: ['<i class="icon-left"></i>','<i class="icon-right"></i>'],
	//     autoHeight:true,
	//     responsive:{
	//         0:{
	//             items:1,
	//             nav:true,
	//             margin:0,
	//         },
	//         600:{
	//             items:1,
	//             nav:true,
	//             margin:0,
	//         },
	//         1000:{
	//             items:2,
	//             nav:true,
	//             loop:true
	//         }
	//     }
	// })
});
$('.header__menu').click(function () {
	$('.header__nav').toggle();

});
$('.btnfull').click(function (e) {
	e.preventDefault();

	$("body,html").animate({
		scrollTop: $('#full').offset().top + "px"
	}, 800);
	return false;

});
$('.list__last-btn').click(function (e) {
	e.preventDefault();
	$("body,html").animate({
		scrollTop: 0
	}, 800);
	return false;
});
var nav = $('.header');
$(window).scroll(function () {
	if ($(window).width() > 1201) {

		if ($(this).scrollTop() > 1000) {
			nav.addClass("header-fixed");

		} else {
			nav.removeClass("header-fixed");

		}
	}

});
$(document).ready(function () {

	//$('.calc__btn').magnificPopup({
	// 			 });
	// 			 jQuery.datetimepicker.setLocale('ru');
	// 			 var now = new Date()
	//     now.setDate(31);
	//     now.setMonth(11);
	//     now.setHours(0);
	//     now.setMinutes(0);
	//     now.setSeconds(0);
	// $('#datetimepicker').datetimepicker({
	//  	allowTimes:[
	//   '08:00',
	//   '09:00',
	//   '10:00',
	//   '11:00',
	//   '12:00',
	//   '13:00',
	//   '14:00',
	//   '15:00',
	//   '16:00',
	//   '17:00',
	//   '18:00',
	//   '19:00',
	//   '20:00'
	// ],
	//      startDate:Date.now(),
	//      formatDate:'d/m/Y H:m',
	//      minDate: Date.now(),
	//       maxDate: Date.UTC(now.getFullYear(), 11, 31),
	//       //formatDate:'Y/m/d',
	//      dayOfWeekStart: 1,
	// });

	function num2str(n, text_forms) {
		n = Math.abs(n) % 100;
		var n1 = n % 10;

		if (n > 10 && n < 20) {
			return text_forms[2];
		}

		if (n1 > 1 && n1 < 5) {
			return text_forms[1];
		}

		if (n1 == 1) {
			return text_forms[0];
		}

		return text_forms[2];
	}


	// 			$('#calc input, input[name="cad"]').change(function(){
	// 				var tut = $(this);
	// 				var cad_text = '';
	// 				if($(this).attr('name') == 'rooms') {
	// 					var count = $(this).val();

	// 					$(this).parents('.calc__count').find('span:eq(0)').text(num2str(count, ['Комната', 'Комнаты', 'Комнат']));
	// 					$('.room').text($(this).val() + ' ' + num2str(count, ['комната', 'комнаты', 'комнат']));
	// 				}
	// 				if($(this).attr('name') == 'restrooms') {
	// 					var count = $(this).val();
	// 					$(this).parents('.calc__count').find('span:eq(0)').text(num2str(count, ['Cанузел', 'Cанузла', 'Cанузлов']));
	// 					$('.san').text($(this).val() + ' ' + num2str(count, ['санузел', 'санузла', 'санузлов']));
	// 				}
	// 				$('.dop').html('');
	// 				var all = 0;
	// 				$('.hidden2').css('display', 'none');


	// 				var count_room = $('#calc input[name="rooms"]').val() - 1;
	// 				var count_san = $('#calc input[name="restrooms"]').val() - 1;
	// 				var price = 2000;
	// 				var type_room = $('input[name="radio-test"]:checked').val();




	// 					if(type_room == 2){
	// 					     $('.no-room').show();
	// 					    if(count_san > 0){
	// 						price = (count_san * 500) + price;
	// 					}

	// 						if(count_room  > 0){

	// 							price = (count_room * 800) + price;
	// 						}
	// 					    $('#wardrobe').removeAttr('checked');
	// 					    $('#wardrobe + .wrap').hide();
	// 					   // $('#chandelier').removeAttr('checked');
	// 					    $('#chandelier + .wrap').show();
	// 					    $('#vitegka').removeAttr('checked');
	// 					    $('#vitegka + .wrap').hide();
	// 						$('.type_room-left').text('Генеральная уборка');
	// 						if(count_room == 0){
	// 							price = price + 1500;
	// 						}
	// 						else {
	// 							price = price + count_room * 500 + 1500;
	// 						}
	// 					}
	// 					else if(type_room == 3){
	// 					    $('.no-room').show();

	// 					    if(count_san > 0){
	// 						price = (count_san * 500) + price;
	// 					}

	// 						if(count_room  > 0){

	// 							price = (count_room * 800) + price;
	// 						}
	// 					     $('.wrap').show();
	// 					     $('#wardrobe').removeAttr('checked');
	// 					    $('#wardrobe + .wrap').hide();
	// 					    $('#chandelier').removeAttr('checked');
	// 					    $('#chandelier + .wrap').hide();
	// 					    $('#vitegka').removeAttr('checked');
	// 					    $('#vitegka + .wrap').hide();

	// 						$('.type_room-left').text('Уборка после ремонта');
	// 						// console.log(type_room);
	// 						// console.log(count_room);
	// 						price = price + count_room * 1000 + 1700;
	// 					}
	// 					else if(type_room == 4){
	// 					     $('.wrap').show();
	// 					     $('.no-room').hide();
	// 						$('.type_room-left').text('Без комнат');
	// 						// console.log(type_room);
	// 						// console.log(count_room);
	// 						price = price - 2000 ;
	// 					}
	// 					else {
	// 					     $('.no-room').show();
	// 					    if(count_san > 0){
	// 						price = (count_san * 500) + price;
	// 					}

	// 						if(count_room  > 0){

	// 							price = (count_room * 800) + price;
	// 						}
	// 					     $('.wrap').show();
	// 						$('.type_room-left').text('Стандартная уборка');
	// 					}

	// 						$('#calc input[type="checkbox"]:checked').each(function(){

	// 					$('.hidden2').css('display', 'block');
	// 					if($(this).attr('name') == 'okna'){
	// 						var count = $('input[name="count_okna"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'okna2'){
	// 						var count = $('input[name="count_okna2"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'paint-roller'){
	// 						var count = $('input[name="count_paint-roller"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'more-man'){
	// 						var count = $('input[name="more-man-roller"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'plates'){
	// 						var count = $('input[name="count_plates"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '('+ count + ' ч.)</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'iron'){
	// 						var count = $('input[name="count_iron"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '('+ count + ' ч.)</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'buildings'){
	// 						var count = $('input[name="count_buildings"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '('+ count + ' метр.)</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'chandelier'){
	// 						var count = $('input[name="count_chandelier"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'fridge'){
	// 						var count = $('input[name="count_fridge"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 						else if($(this).attr('name') == 'oven'){
	// 						var count = $('input[name="count_oven"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 						else if($(this).attr('name') == 'mowen'){
	// 						var count = $('input[name="count_mowen"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else if($(this).attr('name') == 'wardrobe'){
	// 						var count = $('input[name="count_wardrobe"]').val();
	// 						all  = all + (count * parseInt($(this).val()));
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '(x'+ count + ')</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}
	// 					else {
	// 						all  = all + parseInt($(this).val());
	// 						$('.dop').prepend('<div class="list"><span class="left">' + $(this).next('.wrap').find('label').data('title') + '</span><span class="right">' + $(this).val() + ' </span><div class="clear"></div></div>');
	// 					}

	// 				});

	// 				  //  price = price * 1.5;

	// 					all = all + price;

	// 					if($('input[name="cad"]').prop('checked')){

	// 					cad_text = '\nВыезд за КАД';
	// 				    	all = 500 + all;

	// 					}


	// 					$('.end .price').text(price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	// 					$('.all .price').text(all.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

	// 					$('.ajax_form2 input[name="price"]').val(all);


	// 					$('.ajax_form2 input[name="options"]').val($('.dop').html() + '\n '   + cad_text);

	// 					if(type_room == 4){
	// 					    $('.ajax_form2 input[name="title"]').val($('.type_room-left').html());

	// 					    	$('input[name="aside"]').val( $('.type_room-left').html() + '\n' + $('.dop').html() + '\n' + $('.all').html()  + cad_text);
	// 					}else {

	// 					    $('.ajax_form2 input[name="title"]').val($('.type_room-left').html() + '\n ' + $('.room').html() + '\n ' + $('.san').html() );

	// 					    	$('input[name="aside"]').val($('.room').html() + '\n' + $('.san').html() + '\n' + $('.type_room-left').html() + '\n' + $('.dop').html() + '\n' + $('.all').html()  + cad_text);
	// 					}

	// 			});

	// 			$('input[name="aside"]').val($('.room').html() + '\n'  +  $('.san').html() + '\n' + $('.type_room-left').html() + '\n' + $('.dop').html() + '\n' + $('.all').html());


	// 					  $('.ajax_form2 input[name="title"]').val($('.type_room-left').html() + ' \n ' + $('.room').html() + ' \n ' + $('.san').html() );
	// 			$('input[name="cad"]').change(function(){
	// 				if(this.checked){
	// 					var price = parseInt($('.all .price').text().replace(/\s+/g, ''));

	// 					price = 500 + price;
	// 					$('.all .price').text(price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	// 				}else {
	// 					var price = parseInt($('.all .price').text().replace(/\s+/g, ''));
	// 					price = price - 500;
	// 					$('.all .price').text(price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	// 				}
	// 			});
});