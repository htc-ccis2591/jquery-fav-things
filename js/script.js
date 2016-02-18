$(document).ready(function()
	{
		
		$("button").on("click", function()                    
                      
			{
                $("button").remove();                         
            
                $("#page").append('<section><h4>Coffee</h4><article><img src="images/Coffee.jpg" alt="description_text" width="567" height="300"><p>Coffee is a great way to start your day. With the various flavors, I never have to drink the same one two days in a row.</p></article></section>');
            
                $("#page").append('<section><h4>Jellybeans</h4><article><img src="images/purple-comic-jellybean-hi.jpg" alt="description_text" width="567" height="560"/><p>I have a jellybean addiction! Nuff said!!!</p></article></section>');
            
                $("#page").append('<section><h4>Jim\'s secret recipe Crockpot Baked Beans</h4><article><img src="images/Beans.jpg" alt="description_text" width="567" height="300"/><p> My secrect recipe Crockpot Baked Beans is my greatest food creation, it\'s requested for parties and family get togethers. It takes 24 hours to cook. No you can\'t have the recipe.</p></article></section>');
                
                $("#page").append('<section><h4>The Lake</h4><article><img src="images/TheLake.jpg" alt="description_text" width="567" height="400"/><p>This one combines the boat, the camper and the Lake all in one group, it\'s just flat out relaxing. We get out on the lake, anchor and just relax. Of course when our kids are there it\'s tubing tubing tubing.</p>        </article></section>');
            
                $("#page").append('<section><h4>George The Cat</h4><article><img src="images/George.jpg" alt="description_text" width="567" height="800"/><p>George The Cat is my little buddy.  </p></article><section>');
                
                //$("h4").hide();
    	        $("article").hide();
                //$("h4").show(); 
            
                $("h4").on("click", function()          
                    {
                        $(this).siblings().toggle();

                    });
            
			});
   
       

            
    });

