$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.08;

		$('body').css ({
			'background-position': '0px -' + posicion + 'px'
		});
	});
});
