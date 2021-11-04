
$(document).ready(function () {
    $('.responsive-toggle').click(function () {
        $('.responsive-menu').stop().slideToggle();
       
        return false;
       
    });
    $(window).resize(function(){
        $('.responsive-menu').slideUp();
        
    });
    $(window).scroll(function(){
        $('.responsive-menu').slideUp();
       
    });
    // $('.icon-toggle').click(function(){
    //     $(this).children().stop().toggleClass('open');
    //     $(this).parent().next('.sub-menu').stop().slideToggle();

    //     return false;
    // });

});
