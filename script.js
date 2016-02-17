$(function () {
    $("#content").hide(); //hides item
    
    $("h1").on("click", function() {
        $("#content").show();
        $("p").hide(); 
        $("img").hide();
        $("h1").remove(); //gets ride of the h1
        $("#content").before("Click on one of the title's of my favorite things."); //tells user how it works
        //$("h1").replaceWith("Click on one of the title's of my favorite things."); //works like like 8 and 9.
        });
    //This peice is to display the content and image, it also hides the other content and images.
    $("h2").on("click", function() {
        $("p").hide();
        $("img").hide();
        $(this).next().next().show();
        $(this).next().show();
        $("h1").remove();
    });
});