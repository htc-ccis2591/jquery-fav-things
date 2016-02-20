
$(function() {
    var $h2 = $('h2');
    var $mPage = $('#mPage');
    $h2.on("click", function(){
    $mPage.after('<div class = "favItems"></div>');
        $h2.remove();
        $mPage.append('<h3>Although it is difficult to narrow it down, here are just a few of my favorite things</h3>');
        var $favItems = $('<h4>Camping</h4><img src="camping_fullsize_story1.jpg"><h4>Music</h4><img src="infra.jpg"><h4>Snowboarding</h4><img src="12-2012-Swanson-8.jpg"><h4>Disc Golf</h4><img src="IMG_0954.jpg"><h4>Football</h4><img src="nfl.jpg">');       
        $("div.favItems").append($favItems);
        $("img").hide();

                var $h4 = $('h4');
                $h4.on("click", function(){
                        $(this).addClass('clicked').next().show();
                        $(this).next().siblings().hide();
                    $("img").on("click", function(){
                        $(this).hide();
                        $h4.removeClass('clicked');
                        $h4.show();
                        
                    });                      
                        
        
            });

    });


    
    
});
