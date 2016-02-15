$(function() {
    $('h2').hide();
    $('p').hide();
    $('img').hide();
    
    $('#begin').on('click', function(){
        $('header').fadeOut(500);
        $('img').show();
      });
    
    $('.favorite').on('click', function(){
        $(this).siblings().slideToggle();
    });

    
    
    
    
    
    
    
});