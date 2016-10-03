$(document).ready(function(){
    $("p").after("<div class='span13'><button id='startviewing'>Click here to see my favorite things</button></div>");
    $("p").remove();
    
    $("#startviewing").click(function(){
        var $newListItem = $("<li id='one' class='favorite-item text-center'>1969 Roadrunner</li>");
        var $newListItem2 = $("<li id='two' class='favorite-item text-center'>Fresh cut grass</li>")
        var $newListItem3 = $("<li id='three' class='favorite-item text-center'>Star Trek movies</li>")
        var $newListItem4 = $("<li id='four' class='favorite-item text-center'>White sandy beaches</li>")
        var $newListItem5 = $("<li id='five' class='favorite-item text-center'>Summer</li>")
        var $infopanel1 = $("<div class='panel-body1'</div>")
        var $infopanel2 = $("<div class='panel-body2'</div>")
        var $infopanel3 = $("<div class='panel-body3'</div>")
        var $infopanel4 = $("<div class='panel-body4'</div>")
        var $infopanel5 = $("<div class='panel-body5'</div>")
      
        $("#startviewing").remove();
        $(".span13").remove();
        
        $("body").append("<h1 class='text-center'>My Favorite Things</h1>");
        $("body").append("<ul id='favoriteList' ></ul>");
        $("ul").append($newListItem);
        $("li").last().after($newListItem2);
        $("li").last().after($newListItem3);
        $("li").last().after($newListItem4);
        $("li").last().after($newListItem5);
        $("li").css("list-style", "none");
        // set up the favorite number 1
        //$( "li:nth-child(1)" ).after($infopanel);
        //var x = $( "li:nth-child(1)" );
   		$("ul li#one").last().after($infopanel1);     
   		$("ul li#two").last().after($infopanel2);     
   		$("ul li#three").last().after($infopanel3);     
   		$("ul li#four").last().after($infopanel4);     
   		$("ul li#five").last().after($infopanel5);  
   		
		$(".panel-body1").append("<p id='favorite1'>The 1969 Plymouth Roadrunner is my favorite car of all time</p>");   
 		$("#favorite1").last().after("<img id='image1' class='img-responsive' src='' alt='' />");
		$("#image1").attr('src','images/roadrunner.jpg');
		$(".panel-body1").hide();
		
  		$(".panel-body2").append("<p id='favorite2'>The smell of fresh cut grass has always made me happy.</p>"); 
 		$("#favorite2").last().after("<img id='image2' class='img-responsive' src='' alt='' />");
		$("#image2").attr('src','images/fresh-cut-grass.jpg');
		$(".panel-body2").hide();

  		$(".panel-body3").append("<p id='favorite3'>Star Trek movies are exciting and they keep you on the edge of your seat.</p>"); 
  		$("#favorite3").last().after("<img id='image3' class='img-responsive' src='' alt='' />");
		$("#image3").attr('src','images/star-trek-movies.jpg');
		$(".panel-body3").hide();

  		$(".panel-body4").append("<p id='favorite4'>Walking on a white sandy beach in Florida makes me happy.</p>"); 
 		$("#favorite4").last().after("<img id='image4' class='img-responsive' src='' alt='' />");
		$("#image4").attr('src','images/florida-beaches.jpg');
		$(".panel-body4").hide();
		
		
  		$(".panel-body5").append("<p id='favorite5'>Summer brings many things.  Warm days, thunderstorms, and flowers are just a few.</p>"); 
 		$("#favorite5").last().after("<img id='image5' class='img-responsive' src='' alt='' />");
		$("#image5").attr('src','images/minnesota-summer.jpg');
		$(".panel-body5").hide();

		   		
    // add the click funtion for each menu item
        $("li").on("click", function(){
        	var isVisible1 = $(".panel-body1").is(':visible');
        	var isVisible2 = $(".panel-body2").is(':visible');
        	var isVisible3 = $(".panel-body3").is(':visible');
        	var isVisible4 = $(".panel-body4").is(':visible');
        	var isVisible5 = $(".panel-body5").is(':visible');
        	
            if (this.innerText === "1969 Roadrunner"){
            	if (isVisible1){
                  	$(".panel-body1").hide();
            	} else {
            		$(".panel-body1").show();
            		}
            }
           if (this.innerText === "Fresh cut grass"){
            	if (isVisible2){
                  	$(".panel-body2").hide();
            	} else {
            		$(".panel-body2").show();
            		}
            }
          if (this.innerText === "Star Trek movies"){
            	if (isVisible3){
                  	$(".panel-body3").hide();
            	} else {
            		$(".panel-body3").show();
            		}
            }
          if (this.innerText === "White sandy beaches"){
            	if (isVisible4){
                  	$(".panel-body4").hide();
            	} else {
            		$(".panel-body4").show();
            		}
            }
         if (this.innerText === "Summer"){
            	if (isVisible5){
                  	$(".panel-body5").hide();
            	} else {
            		$(".panel-body5").show();
            		}
            }




                
            
            });
       });
});