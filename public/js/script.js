$(document).ready( function(){
	$('form').on('submit', function(event) { 
		event.preventDefault();
		
		var tel_pattern=/^\d+$/;
		var prov=tel_pattern.test($(this).find('input[name=tel]').val());

		var mail_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var prov_m=mail_pattern.test($(this).find('input[name=mail]').val());
		
		if ($(this).find('input[type=text]').val() == '') { $(this).find('input[name=name]').addClass('alert'); }
		if (prov != true) { $(this).find('input[name=tel]').addClass('alert'); }
		if ($(this).find('input[name=mail]').val() == '' || prov_m != true) { $(this).find('input[name=mail]').addClass('alert'); }
		if ($(this).find('textarea').val() == '') { $(this).find('textarea').addClass('alert'); }	
		
		if ($(this).find('input[type=text]').val() != '') { $(this).find('input[name=name]').removeClass('alert'); }
		if (prov == true) { $(this).find('input[name=tel]').removeClass('alert'); }
		if ($(this).find('input[name=mail]').val() != '' & prov_m == true) { $(this).find('input[name=mail]').removeClass('alert'); }
		if ($(this).find('textarea').val() != '') { $(this).find('textarea').removeClass('alert'); }	
		
		if (($(this).find('input[name=name]').val() != '' & $(this).find('input[name=tel]').val() != '' & (prov == true)) || ($(this).find('input[name=subject]').val() == 'вопрос' & $(this).find('input[name=mail]').val() != '' & $(this).find('textarea').val() != '' & prov_m == true)) {
		
		var form = $(this);
		
		$(form).find('input[type=submit]').attr("disabled", true);
		
		$.ajax('sendmessage.php', {
			type:'POST',
			cache:false,
			data: form.serialize(),
			success: function(result) {
				if(result == "true") {
					
					$(form).find('input[type=submit]').val('');
					$(form).find('input[type=submit]').css({'background':'url("img/success.png") no-repeat transparent', 'background-size':'cover'}).fadeTo();					
			}
			
		}	
	});
	} 
});
	

});