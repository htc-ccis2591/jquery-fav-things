$(function () {
    //button to hide and show items
    $("button").click(function () {
        $("#container").hide();
        $("button").click(function () {
            $("#container").show();
        });

    });

    //Create a variable,change text and adding a click event to display List of interest. 
    $(":header").on("click", function () {
        $("#container").show();
        $("h2").hide();
        var myfavorites = "Things I like best."
        var newItem = "Good food nice Restaurant"
        $("h1").html(myfavorites);
        $("section.conclude").text(newItem);

        //hide all the items and fade them in one at a time.
        $("li").hide().each(function (i) {
            $(this).delay(500 * i).fadeIn(1800);


        });

    });
    //hide/show list with toggle effect applying some css properties to list as they display.
    $("#container").on("dblclick", function () {
        $("#container").hide().toggle("slow")
        $("li").css({
            "backgroundColor": "#c5a996",
            "padding": "60",
            "border": "1px solid #fff",
            "color": "# 000 ",
            "font-family": "Georgia"
        });


    });
});