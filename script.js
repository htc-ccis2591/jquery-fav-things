//$("<p>Click a menu item to view a picture.</p>").insertAfter("h2");
$(function() {
    $("#detail").append('<img src="" alt="">');
    var $h2 = $('h2');
    $h2.on("click", function(){
    $h2.children().remove();
        $('h2').append('<ul>');
        var $ul = $('ul');
        $('ul').append('<li class = "fav-item">Camping<img src="camping_fullsize_story1.jpg"></li>');
        $('ul').append('<li class = "fav-item">Music<img src="infra.jpg"></li>');
        $('ul').append('<li class = "fav-item">Snowboarding<img src="12-2012-Swanson-8.jpg"></li>');
        $('ul').append('<li class = "fav-item">Disc Golfing<img src="IMG_0954.jpg"></li>');
        $('ul').append('<li class = "fav-item">Football<img src="nfl.jpg"></li>');
        $("img").hide();
      //  $('ul').children();
        $("li.fav-item").on("click", function(){
                    $(this).addClass('clicked').next().show();
                    $(".li.clicked").siblings().hide();
                    $("img.clicked").show();
                    $("#li.clicked").on("click", function(){
                            $(this).next().hide();
                        
                    });
                        
                        
                    
/*                     var imgSrc = $(this).siblings().attr("src");
                    $("#detail-image").attr("src", imgSrc).show();*/

        });
    });
});
/*    $(function() {
        var $li = $('li');
        $li.on("click", function(){
            $(this).siblings().remove();
            $(this).next().show();

                            var imgSrc = $(this).siblings().attr("src");
                            $("#detail-image").attr("src", imgSrc).show();
                            $("#detail").show();*/

            
/*        });

        
    });*/

