$(function () {

    var $divs = $("div");
    //var $game = $("#game");
    //var $movie = $("#movie");
    //var $food = $("#food");
    var $game = $divs.get(0);
    var $movie = $divs.get(1);
    var $food = $divs.get(2);

    console.log($divs);
    console.log($divs[0]);
    console.log($divs.get(0));

    $("h1").html("Click to Reveal a List of Secrets");
    $divs.addClass("hide");
    $($game).attr("id", "game");
    $($movie).attr("id", "movie");
    $($food).attr("id", "food");

    $("h1").on("click", function () {
        $divs.removeClass("hide");
        $("h1").after("<p>Click on each heading to display information.</p>")
        $($game).append("<h2>Video Games</h2>");
        $($movie).append("<h2>Movies</h2>");
        $($food).append("<h2>Food</h2>")

    })

    $($game).on("click", function () {
        $($game).append("<p>I enjoy playing Role Playing Games(RPG) such as the Final Fantasy series, First Person Shooting/Shooter(FPS) games such as Call of Duty(COD) and Black Ops(BO), arcade games such as Metal Slug.</p>")
    })

    $($movie).on("click", function () {
        $($movie).append("<p>I enjoyy watching movies of all genres, action, horror, comedies, documentaries, drama, sci-fi, thrillers, and anime.</p>")
    })


    $($food).on("click", function () {
        $($food).append("<p>I love, LOVE food! I mean, who doesn't!? I enjoy food off all nationalities from Asian, Mexican, Thai, Greek, Italian, and American food.")
    })
});