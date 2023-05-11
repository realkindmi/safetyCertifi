var scroll = $(window).scrollTop();
if (scroll > 80) {
    $('header').addClass('fixed');
}
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

if ($('body header').next().css('background-color') == "rgb(255, 248, 51)") {
    $('header .active').addClass('invert');
}
if ($('.dimmed').is(':visible')) {
    $('html, body').css('overflow-y', 'hidden');
}


$('[data-content]').click(function () {
    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active')
    $(this).parents('.container').find('.terms-content').hide();
    $('#' + $(this).attr('data-content')).show();
});

$(".file-upload input").change(function () {
    if ($(this).val() == "") {
        $(this).parent().find('.btn-remove').hide();
    } else {
        $(this).parent().find('.btn-remove').show();
    }
    $(this).parent().attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
});
$('.btn-remove').click(function() {
    $(this).hide();
    $(this).parent().find('input[type=file]').val("");
    $(this).parent().attr("data-text", "");
});

$('[data-tab').click(function() {
    $(this).parent().find('.active').removeClass('active');
    $(this).parent().next().find('.tab-content').removeClass('active')
    $(this).addClass('active');
    $(this).parent().next().find('#' + $(this).attr('data-tab')).addClass('active')
});

$('.accordion h3').click(function () {
    if ($(this).hasClass('active')) {
        $(this).parent().find('.active').removeClass('active');
    } else {
        $(this).parent().find('.active').removeClass('active');        
        $(this).addClass('active');                
        $(this).next().addClass('active');
    }
});