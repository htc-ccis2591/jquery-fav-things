$(document).ready(function()
	{
        $("h4").hide();
    	$("article").hide();		
		$("button").on("click", function()                    
                      
			{
                $("button").remove();                
                $("h4").show();                          
			});
       
        $("h4").on("click", function()          
			{
                $(this).siblings().toggle();
               
			});
            
    });

