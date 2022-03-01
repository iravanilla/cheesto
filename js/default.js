var AjaxForm = {

	initialize: function (afConfig) {
		if (!jQuery().ajaxForm) {
			document.write('<script src="' + afConfig.assetsUrl + 'js/lib/jquery.form.min.js"><\/script>');
		}
		if (!jQuery().jGrowl) {
			document.write('<script src="' + afConfig.assetsUrl + 'js/lib/jquery.jgrowl.min.js"><\/script>');
		}

		$(document).ready(function () {
			$.jGrowl.defaults.closerTemplate = '<div>[ ' + afConfig.closeMessage + ' ]</div>';
		});

		$(document).on('submit', afConfig.formSelector, function (e) {
			$(this).ajaxSubmit({
				dataType: 'json',
				data: {
					pageId: afConfig.pageId
				},
				url: afConfig.actionUrl,
				beforeSerialize: function (form, options) {
					form.find(':submit').each(function () {
						if (!form.find('input[type="hidden"][name="' + $(this).attr('name') + '"]').length) {
							$(form).append(
								$('<input type="hidden">').attr({
									name: $(this).attr('name'),
									value: $(this).attr('value')
								})
							);
						}
					})
				},
				beforeSubmit: function (fields, form) {
					if (typeof (afValidated) != 'undefined' && afValidated == false) {
						return false;
					}
					form.find('.error').html('');
					form.find('.error').removeClass('error');
					form.find('input,textarea,select,button').attr('disabled', true);
					return true;
				},
				success: function (response, status, xhr, form) {
					form.find('input,textarea,select,button').attr('disabled', false);
					response.form = form;
					$(document).trigger('af_complete', response);
					if (!response.success) {
						AjaxForm.Message.error(response.message);
						if (response.data) {
							var key, value;
							for (key in response.data) {
								if (response.data.hasOwnProperty(key)) {
									value = response.data[key];
									form.find('.error_' + key).html(value).addClass('error');
									form.find('[name="' + key + '"]').addClass('error');
								}
							}
						}
					} else {
						AjaxForm.Message.success(response.message);
						form.find('.error').removeClass('error');
						form[0].reset();
						//	goog_report_conversion('EkfCCLf-lHIQ5LjAngM');
						if (form.attr('id') == 'get-form-order') {
							yaCounter36558600.reachGoal('GET_MAIN');
							gtag('event', 'lead', {
								'event_category': 'order',
								'event_action': 'send_main',
							});

						} else if (form.attr('id') == 'get-form-window') {
							yaCounter36558600.reachGoal('GET_FORM_WINDOW');
							gtag('event', 'clickdopphone', {
								'event_category': 'order',
								'event_action': 'send',
							});
							ga('send', 'event', 'GET_FORM', 'WINDOW', {
								'nonInteraction': 1
							});
						} else if (form.attr('id') == 'get-form-sertificate') {
							yaCounter36558600.reachGoal('GET_FORM_CERTIFICATE');
							gtag('event', 'clickdopphone', {
								'event_category': 'order',
								'event_action': 'send',
							});
							ga('send', 'event', 'GET_FORM', 'CERTIFICATE', {
								'nonInteraction': 1
							});
						} else if (form.attr('id') == 'short-calc') {
							gtag('event', 'lead', {
								'event_category': 'order',
								'event_action': 'send_foot',
							});
							yaCounter36558600.reachGoal('GET_FOOT');
						} else if (form.attr('id') == 'calc-form') {
							gtag('event', 'lead', {
								'event_category': 'calc',
								'event_action': 'send',
							});
							//     gtag('event', 'lead', { 'event_category': 'calc', 'event_action': 'send', });
							//     yaCounter36558600.reachGoal('GET_CALC');

							//  	$('#calc')[0].reset();

							//         	$('aside').html('<h3>Ваш заказ:</h3><div><span class="room">1 комната</span> и <span class="san">1 санузел</span></div><div class="end list"><span class="left">Стандартная уборка</span> <span class="right"><span class="price">1 500</span> руб.</span><div class="clear"></div></div><br><div class="hidden">Дополнительно:</div><div class="dop"></div><div class="cad"><input type="checkbox" value="500" name="cad" id="cad"><label for="cad">Выезд за КАД</label></div><div class="all list"><span class="left">Итого</span>  <span class="right"><span class="price">1 500</span> руб.</span><div class="clear"></div></div><a href="#order" class="btn order popup-with-zoom-anim">Оформить заказ</a>');

						}

						$.magnificPopup.close();
						$.magnificPopup.open({
							items: {
								src: '#seccuss'
							},
							type: 'inline'
						}, 0);
						return true;
					}
				}
			});
			e.preventDefault();
			return false;
		});

		$(document).on('reset', afConfig.formSelector, function (e) {
			$(this).find('.error').html('');
			AjaxForm.Message.close();
		});
	}

};


AjaxForm.Message = {
	success: function (message, sticky) {
		if (message) {
			if (!sticky) {
				sticky = false;
			}
			$.jGrowl('Данные успешно отправлены. Мы скоро перезвоним для подтверждения заказа', {
				theme: 'af-message-success',
				sticky: true,
				position: 'center',
				life: 10000
			});
		}
	},
	error: function (message, sticky) {
		if (message) {
			if (!sticky) {
				sticky = false;
			}
			$.jGrowl(message, {
				theme: 'af-message-error',
				sticky: false,
				position: 'center'
			});
		}
	},
	info: function (message, sticky) {
		if (message) {
			if (!sticky) {
				sticky = false;
			}
			$.jGrowl(message, {
				theme: 'af-message-info',
				sticky: sticky
			});
		}
	},
	close: function () {
		$.jGrowl('close');
	}
};