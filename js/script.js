$(function(){
	
	$("a#btn-1").on('click', function() {
		
		$(this).remove();
		myItems();
	});
	
	function myItems() {
	var text = {1:"Family",2:"Elephants",3:"Coffee",4:"AR Rahman",5:"Crafts",6:"Cooking"};
	var imageName = {1:"family.jpg",2:"elephant.jpg",3:"coffee.jpg",4:"ar-rahman.jpg",5:"crafts-1.jpg",6:"cooking.jpg"};
	var desc = {1:'I love my family! They inspire me! They support me!',2:'I love to collect indian elephant statues, figurines, and artwork. They are displayed all around my house.',3:'I am a coffee addict. Have to have it specified times of a day to keep going.',4:'He is an Indian music composer. He won Oscar for Slumdog Millionaire. Not a day goes by without hearing his music', 5:'I am a crafter. I scrapbook. I make jewelry. I like to spray paint which drives my husband crazy. Crafting is a stress releiver for me.',6:'I Love to cook.'};
		
		$.each(text, function(key, value){ 
			var $newtext = $("<h2>" + value + "</h2>");
			var $newimage = $("<img>").attr({class:"img-circle", src:imageName[key], width:"140", height:"140"});
			var $info = $("<p>" + desc[key] + "</p>");
			var $newdiv = $("<div/>");
			$newdiv.addClass("col-lg-4");
			$(".row").append($newdiv);
			$newdiv.append($newtext,$newimage,$info);
        });
		
		$("p").addClass("lead");
		$("p").hide();
		$("p#title-item").show();
			
	$("h2").on('click', function(){
		 $this = $(this);
		 $detImage = $(this).next();
		 $favDetail = $($detImage).next();
		 $favDetail.show();
		 $("#fav-things").hide();
		 $("#fav-detail").append($this,$detImage, $favDetail);
	});
		
	}

});