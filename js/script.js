
    /* Page Design:
       1: Opens on welcome page with 'Click me!' button. 
            -This is all found in the HTML.
       2: When the button is clicked, the welcome page is removed and favorites are added to the page.
            -Page then consists of 6 favorite divs.
                 -There are two states open and closed.  All divs start closed. 
                    -Open has a header, a slideshow div with images, and a paragraph with more info.
                    -Closed has a number and a name. 
                 -Clicking on each section should toggle between the open and closed states. 
    */
    

$(function() {

    /////////////////////////////////////////
    ////  HTML text for added sections  /////
    /////////////////////////////////////////

    // build info for all fave items

    var fav1HTML = '<div class="fav_number" id="fav1">' +
        '<p class="num showClass">1</p><p class="favName showClass">Critters</p>' +
        '<h2 class="centered hideClass">Pets are like potato chips, you can never have just one.</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/kittenlittle.png"><img class="centeredImg" src="images/mouse.jpg" ><img class="centeredImg" src="images/sittingpretty.png"><img class="centeredImg" src="images/cuddlemice.png"><img class="centeredImg" src="images/helpme.png" ><img class="centeredImg" src="images/kittensOG.png"></div>' +
        '<p class="centered hideClass">I have two new little kittens,  Luca and Linus. They are adorable little monsters.' +
        'I also have two mice named Ellie and Lucy.  The four of them get along splendidly.</p>' +
        '</div>';

    var fav2HTML = '<div class="fav_number" id="fav2">' +
        '<p class="num showClass">2</p><p class="favName showClass">Framily</p>' +
        '<h2 class="centered hideClass">A friend is someone who knows you and loves you just the same.</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/family.png" ><img class="centeredImg" src="images/cabin.png"><img class="centeredImg" src="images/bbq.png"><img class="centeredImg" src="images/CRAFT.png"><img class="centeredImg" src="images/gophers.png"><img class="centeredImg" src="images/fair.png"></div>' +
        '<p class="centered hideClass">I would not be who I am today without all my family and friends. I love every chance I get to visit with and catch up or play games. </p></div>';

    var fav3HTML = '<div class="fav_number" id="fav3">' +
        '<p class="num showClass">3</p><p class="favName showClass">Travel</p>' +
        '<h2 class="centered hideClass">Not all those who wander are lost.</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/newzealand.png" ><img class="centeredImg" src="images/states.png"><img class="centeredImg" src="images/sedona.png"><img class="centeredImg" src="images/glacier.png"><img class="centeredImg" src="images/fiji.png"><img class="centeredImg" src="images/sweden.png"></div>' +
        '<p class="centered hideClass">I love to travel!  My favorite trip so far has been a road trip through the south island of New Zealand with a stop over in Fiji. I hope to be able to visit every state and every continent in my lifetime.</p></div>';

    var fav4HTML = '<div class="fav_number" id="fav4">' +
        '<p class="num showClass">4</p><p class="favName showClass">Baseball</p>' +
        '<h2 class="centered hideClass">Go Cubs Go!</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/ball.png" ><img class="centeredImg" src="images/mesa.png"><img class="centeredImg" src="images/stadiums.png"><img class="centeredImg" src="images/champions.png"><img class="centeredImg" src="images/baseball.png"></div>' +
        '<p class="centered hideClass">As a transplant from the Chicago area, I am a big Cubs fan - for better or worse.  This goes well with my love of travel, but I hope to visit all the baseball stadiums in the US. So far I have 9 of 30 with at least 5 more lined up this summer!</p></div>';

    var fav5HTML = '<div class="fav_number" id="fav5">' +
        '<p class="num showClass">5</p><p class="favName showClass">Reading</p>' +
        '<h2 class="centered hideClass">Reading a good book is like taking a journey...</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/belle.jpg" ><img class="centeredImg" src="images/hpBooks.jpg" ><img class="centeredImg" src="images/classics.jpg" ><img class="centeredImg" src="images/got.jpg" ><img class="centeredImg" src="images/gringotts.png" ></div>' +
        '<p class="centered hideClass">I love to read!  I have read and enjoyed booked from many genres but the Harry Potter series is probably my all time favorite.  There are too many others that I like to list here!.</p></div>';

    var fav6HTML = '<div class="fav_number" id="fav6">' +
        '<p class="num showClass">6</p><p class="favName showClass">Creativity</p>' +
        '<h2 class="centered hideClass">Creativity is intelligence having fun!</h2>' +
        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/booties.png" ><img class="centeredImg" src="images/paperweight.png" ><img class="centeredImg" src="images/minions.png" ><img class="centeredImg" src="images/glass.png" ><img class="centeredImg" src="images/bacon.jpg" ><img class="centeredImg" src="images/chocolate.png" ></div>' +
        '<p class="centered hideClass">I love to be creative in many ways.  I love trying to cook new things, knitting and crocheting, painting, making paper crafts and decorations, planning parties, taking photographs and many more! </p></div>';



    /////////////////////////////////////////
    /////  build the helper functions  //////
    /////////////////////////////////////////

    var slideshowInterval;

    addFavoriteThings = function() {
        //add title
        $('body').append('<h1 class="centered">Click to see more details!</h1>');
        //add >=5 items
        $('body').append(fav1HTML);
        $('body').append(fav2HTML);
        $('body').append(fav3HTML);
        $('body').append(fav4HTML);
        $('body').append(fav5HTML);
        $('body').append(fav6HTML);

        $('img').hide();

        //function to switch display on clicks
        //needs to be made after the items are added to the dom
        var $favItems = $('.fav_number');

        $favItems.on('click', function() {
            $(this).children('.showClass').removeClass('showClass').addClass('tempClass');
            $(this).children('.hideClass').removeClass('hideClass').addClass('showClass');
            $(this).children('.tempClass').removeClass('tempClass').addClass('hideClass');
            //make first image visible and grab div
            $(this).children('.imgdiv').children('img:first').show().fadeTo(0, 1);
            var slideshow = $(this).children('.imgdiv');
            var slides = $(slideshow).children('img');
            //if details are open, set up interval for looping otherwise clear it

            if (slideshow.hasClass('showClass') && slideshow.children().length > 1) {

                // If the timer already exists on this element, stop it. Then rehide all the slides but the first. 
                if (this.slideshowInterval) {
                    clearInterval(this.slideshowInterval);
                    slides.hide();
                    slideshow.children('img:first').show().fadeTo(0, 1);
                }


                // Now make a new one timer and save it on the DOM element, interval will loop every 3 seconds
                this.slideshowInterval = setInterval(function() {
                    // grab the image that is currently shown and hide it
                    $shown = $(slideshow).children('img:visible');
                    $shown.hide().fadeOut(1600);
                    // check if the current image is the last sibling
                    if ($shown.is(':last-child')) {
                        // if it is grab the first and fade in
                        slideshow.children('img:first').fadeIn(1600);
                    } else {
                        // if it is not grab the next sibling and fade in
                        $shown.next().fadeIn(1600);
                    }

                }, 3000);

            } else {

                // When a section is closed, stop it. Then rehide all the slides but the first. 
                clearInterval(this.slideshowInterval);
                slides.hide();
                slideshow.children('img:first').show().fadeTo(0, 1);
            }

        })
    }



    //////////////////////////////////////////////////////
    ////  Run Page from initial welcome screen click  ////
    //////////////////////////////////////////////////////


    //Welcome page interaction
    $(function() {
        var $welcome = $('#welcome_button');
        $welcome.on('click', function() {
            //when button is clicked remove
            $('#welcome_div').remove();
            //call add fave things to add to dom
            addFavoriteThings();
        })
    })


})