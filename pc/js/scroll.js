$(document).ready(function(){
	if( $('body.main > section').hasClass('active') == false){
		$('body.main > section').first().addClass('active');
	}
	
	var initFn = function(){
		var scrollTop = $(this).scrollTop();
		var index = 0;
		$('body.main > section').each(function() {
			var top_distance = $(this).offset().top;
		
			if ( (top_distance - 500) <= scrollTop ) {
                $('body.main > section').eq(index).addClass('active');
					
				index++;
			}
		});
	}
	
	initFn();
	$(window).scroll(function() {
		initFn();
	});
});