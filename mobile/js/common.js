$(document).ready(function(){
	/* gnb */
	var togglemenu = function(){
		$('.gnb_top').toggleClass('active');
		$('.gnb_menu').toggleClass('active');
	};
	
	$('.btn_menu').click(togglemenu);
	
	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		$('#gnb').addClass('fixed');
	}
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$('#gnb').addClass('fixed');
		} else {
			$('#gnb').removeClass('fixed');
		}
	});
	
	if( $('#gnb').next().hasClass('visual') ){
		$('#gnb').find('.logo').addClass('t2');
	}
	
	/* tab */
	$('[data-tab]').click(function() {
		$(this).parent().find('.active').removeClass('active');
		$(this).parents('.tabs').next().find('.tab_content').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.tabs').next().find('#' + $(this).attr('data-tab')).addClass('active');
	});
	
	/* accordion */
	$('.accordion .q_area').click(function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
	
	/* file upload */	
	var fileTarget = $('.filebox .upload_hidden');
    fileTarget.on('change', function(){
        if(window.FileReader){
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
			$(this).siblings('.btn_del').css('display', 'block');
        } 
        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };
        $(this).siblings('.upload_name').val(filename);
		
		$('.filebox .btn_del').on('click', function(){
		 	$(this).siblings('.upload_name').val('');
			$(this).siblings('.upload_display').css('display', 'none');
			$(this).css('display', 'none');
		});
    });
	
	/* 하단 약관 */
	$('a[data-content]').click(function(){
		var t_id = $(this).attr('data-content');
		$('a[data-content]').removeClass('active');
		$(this).addClass('active');
		$('.view_box').addClass('active');
		$('.view_box').find('.terms_ct').css('display', 'none');
		$('.view_box').find('#' + t_id).css('display', 'block');
	});
});