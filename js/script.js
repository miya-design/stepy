$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    })
});

$(function(){
    new WOW().init();

});

$('.menu_works').click(function() {
    $("html,body").animate({scrollTop:$(".portfolio_section").offset().top});
    $('#overlay').removeClass("open");
    $('html div').removeClass("blur");
    $("#toggle").toggleClass("active");
  });


$(function(){

    $('.nav-item').hover(function(){
        $(this).css('background','gray');
    }, function(){
        $(this).css('background','transparent');
    
    });
});