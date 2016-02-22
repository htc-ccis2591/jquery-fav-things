//Full document creation function
$(function () { //OPEN

    var body = $('body');



    //adds the bigchange button. 
    //var btn$Favall =$('#deploybtn');

    //$(body).append('<button type="button" id="deploybtn">DEPLOY THE FAVORITES</button>');


    $('#deploybtn').click(createthestuff);
    $('#deploybtn').click(btndestroy);

    function btndestroy() {
        $("p").remove();
    }



    function createthestuff() {


        var $body = $('body');

        $('body').append('<div id="main"></div>');

        var main = $('#main');


        var buttons = ('<button type="button" id="animationbtn">Animation</button><button type="button" id="tablebtn">Tabletops</button><button type="button" id="comicsbtn">Comics</button><button type="button" id="conbtn">Conventions</button><button type="button" id="gamebtn">Gaming</button>');



        $(main).append(buttons);
    
    /*
    
        <div id='animations'>   
        <p class="fave">Animation</p>
        <img src="fmab.gif"><img src="cherno.gif"><img src='wakfu.gif'>
        <p class='description'>I've a great fondndess for all sorts of animation, from hand drawn, to CG, to flash</p>
        </div>
            
        <div id='tabletop'><p class="fave">Tabletops</p><img src='finderfight.jpeg' height="300"><img src='dice.jpg' height='300'><img src='shadowrun.jpg' height="300"><p class='description'>I enjoy the social experience of tabletop gaming, as it allows me my friends, and a maybe a few newbies, to enjoy a social story telling experience, with adventure, combat,  and a whole lot of randomness. Usually this goes more like Monty Python than Lord Of The Rings though.  </p></div>
        
        
        
        <div id="comics"><p class="fave">Comics</p><img src="arch.jpg" height="300"><img src="switch-2.jpg" height ="300"><img src="bokuno.jpg" height="300"><p class="description">I read a LOT of comics, especially since I discovered the advent of webcomics, and have since kept a huge number on my reading list. Current favorites </p></div>
        
            
        <div id='cons'>
        <p class="fave">Conventions</p>
        <img src='con1.jpg' height="300"><img src='con2.jpg' height='300'><img src='con3.jpg' height="300">
        
        <p class='description'>Cons are amazing. It is liek for a breif period, nerds truly do rule, and in the hotel of choice, everything goes. Weird costumes, wild parties, and more than crazy occurences wind up happening at these things.  </p>
        </div>
        
        <div id='games'>
        <p class="fave">Gaming</p>
        <img src='masseffect.gif' height="300"><img src='pokemon.png' height ='300'><img src='yordles.jpg' height='300'>
        <p class='description'>GAMES. I could play all games, all day, and never get bored, and spend farrr too much time in them (MY CURRENT STEAM LIBRARY IS 210+ ALL HAIL THE HUMBLE BUNDLE AND STEAM SALE) . My current  favorites are Pokemon, Mass Effect, and League.  </p>
        </div>
    
    
    
    */

    var anim = '<div><h2>Anime Section</h2></div><button type="button" id="animshow">Show Animation</button>';
    var $animcontent = $('<div id="animations"><p class="fave">Animation</p><img src="fmab.gif"><img src="cherno.gif"><img src="wakfu.gif"><p class="description">I\'ve a great fondndess for all sorts of animation, from hand drawn, to CG, to flash</p></div>');
    var comics = '<div><h2>Comics Section</h2></div><button type="button" id="comicshow">Show Comics~!</button>';
    var $comiccontent = $('<div id="comics"><p class="fave">Comics</p><img src="arch.jpg" height="300"><img src="switch-2.jpg" height ="300"><img src="bokuno.jpg" height="300"><p class="description">I read a LOT of comics, especially since I discovered the advent of webcomics, and have since kept a huge number on my reading list. Current favorites </p></div>');
    var tabletops = '<div><h2>Tabletop Section</h2></div><button type="button" id="showtbts">Show Tabletops</button>';
    var $tablecontent = $('<div id="tabletop"><p class="fave">Tabletops</p><img src="finderfight.jpeg" height="300"><img src="dice.jpg" height="300"><img src="shadowrun.jpg" height="300"><p class="description">I enjoy the social experience of tabletop gaming, as it allows me my friends, and a maybe a few newbies, to enjoy a social story telling experience, with adventure, combat,  and a whole lot of randomness. Usually this goes more like Monty Python than Lord Of The Rings though.</p></div>');
    var cons = '<div><h2>Conventions Section</h2></div><button type="button" id="showcons">Show Cons</button>';
    var $concontent = $('<div id="cons"><p class="fave">Conventions</p><img src="con1.jpg" height="300"><img src="con2.jpg" height="300"><img src="con3.jpg" height="300"><p class="description">Cons are amazing. It is liek for a breif period, nerds truly do rule, and in the hotel of choice, everything goes. Weird costumes, wild parties, and more than crazy occurences wind up happening at these things.</p></div>');

    var gaming = '<div><h2>Gaming Section</h2><button type="button" id="gameshow">Show Gaming</button></div>';
    var $gamecontent = $('<div id="games"><p class="fave">Gaming</p><img src="masseffect.gif" height="300"><img src="pokemon.png" height ="300"><img src="yordles.jpg" height="300"><p class="description">GAMES. I could play all games, all day, and never get bored, and spend farrr too much time in them (MY CURRENT STEAM LIBRARY IS 210+ ALL HAIL THE HUMBLE BUNDLE AND STEAM SALE) . My current  favorites are Pokemon, Mass Effect, and League.</p></div>');

    //Deploymentbuttons   


    $('#animationbtn').click(function () {
        
        $('#main').append(anim);
        $('#main').append($animcontent);
        $('#animationbtn').remove();
        $('#animshow').click(function () {
            $animcontent.toggle();
        });
    });

    $('#tablebtn').click(function () {
        $('#main').append(tabletops);
        $('#main').append($tablecontent);
        $('#tablebtn').remove();
        $('#showtbts').click(function () {
            $tablecontent.toggle();

        });
    });

    $('#comicsbtn').click(function () {
        $('#main').append(comics);
        $('#main').append($comiccontent);
        $('#comicsbtn').remove();
        $('#comicshow').click(function () {
            $comiccontent.toggle();

        });

    });

    $('#conbtn').click(function () {
        $('#main').append(cons);
        $('#main').append($concontent);
        $('#conbtn').remove();
        $('#showcons').click(function () {
            $concontent.toggle();

        });

    });

    $('#gamebtn').click(function () {
        $('#main').append(gaming);
        $('#main').append($gamecontent);
        $('#gamebtn').remove();
        $('#gameshow').click(function () {
            $gamecontent.toggle();
        });
    });
    }
}); //CLOSE