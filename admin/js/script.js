$(document).ready(function(){	
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
	
	/* 기간 설정 */
	$('.set_period a').click(function(){
		$(this).toggleClass('open');
		$(this).parents('.set_period').siblings('.option_box').slideToggle();
	});
	
	/* table */
	$('.board_tb tbody td.tcount').each(function(index, element){
		var ctext = $(element).text(),
			clength = ctext.length;
		
		if ( clength > 61 ){
			$(element).addClass('vat');
			$(element).closest('tr').find('th').addClass('vat');
		}
	});
});