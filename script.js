$(document).ready(function () {

    var $body = $("body").addClass("body");
    var $message = $('#fav-things').addClass("h3");
    $('#favorite-things').append('<p><button>Click me</button></p>');
    var $button = $(':button');
    console.log($button.get(0));

    //after button is clicked add paragraph to list items and change color to white
    $button.on("click", function () {
        $button.hide();
        $('#favorite-things').append('<p>Now click each item to expand</p>').first().addClass("white");

        //create Boating div with heading
        var $boatingDiv = $('<div> </div>');
        $boatingDiv.attr("id", "boating-div");
        $('#favorite-things').append($boatingDiv);
        var $boatingH3 = $boatingDiv.append('<h3>Going boating with my family</h3>').addClass("h3");


        //create Skydiving div with heading
        var $skydiveDiv = $('<div> </div>');
        $skydiveDiv.attr("id", "diving-div");
        $('#favorite-things').append($skydiveDiv);
        var $divingH3 = $skydiveDiv.append('<h3>Skydiving</h3>').addClass("h3");

        //create Video Games div with heading
        var $videogameDiv = $('<div> </div>');
        $videogameDiv.attr("id", "gaming-div");
        $('#favorite-things').append($videogameDiv);
        var $gamesH3 = $videogameDiv.append('<h3>Video Games</h3>').addClass("h3");

        //create America div with heading
        var $AmericaDiv = $('<div> </div>');
        $AmericaDiv.attr("id", "america-div");
        $('#favorite-things').append($AmericaDiv);
        var $AmericaH3 = $AmericaDiv.append('<h3>America</h3>').addClass("h3");
        //create div paragraph and hide
        var $boatingP = $('<p>I love boating during the summer, it is a nice way to enjoy Minnesotas 10,000 lakes. We usually go to Big island on Lake Minnetonka to relax. Tubing and water skiing is something I enjoy doing on the lake. </p>');
        $boatingDiv.append($boatingP);
        //make sure paragraph hides till heading is clicked
        $boatingP.hide();

        //create div paragraph and hide
        var $divingP = $('<p>Fun fact about me: I am scared of heights, although I discovered a new favorite activity while jumping out of a plane. </p>');
        $skydiveDiv.append($divingP);
        //make sure paragraph hides till heading is clicked
        $divingP.hide();

        //create div paragraph and hide
        var $gamingP = $('<p>Gaming is my life when I am fresh out of things to do. Favorite games at the moment are Halo 5: Guardians, Metal Gear Solid V and the Battlefield series. </p>');
        $videogameDiv.append($gamingP);
        //make sure paragraph hides till heading is clicked
        $gamingP.hide();

        //create div paragraph and image and hide both
        var $americaP = $('<p>I love this country and wouldnt wanna live anywhere else. </p>');
        $AmericaDiv.append($americaP);
        $americaP.addClass("p");
        var $americaImg = $('#america-div').append($("<img id='flag' src='flag.jpg'>"));
        $americaP.hide();
        $('#flag').hide();

        $boatingH3.on("click", function () {
            $boatingP.show();
            $boatingDiv.children().last().addClass("p");


        });


        $divingH3.on("click", function () {
            $divingP.show();
            $skydiveDiv.children().last().addClass("p");
        });


        $gamesH3.on("click", function () {
            $gamingP.show();
            $videogameDiv.children().last().addClass("p");
        });

        $AmericaH3.on("click", function () {
            $americaP.show();
            $('#flag').show();




        });

    });






});