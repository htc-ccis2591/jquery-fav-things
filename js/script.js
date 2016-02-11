$(function() {

        // build info for all fave items
        var fav1HTML =  '<div class="fav_number" id="fav1">'+
                        '<p class="num showClass">1</p><p class="favName showClass">Critters</p>'+
                        '<h2 class="centered hideClass">Pets are like potato chips, you can never have just one.</h2>'+
                        '<img class="centered hideClass" src="images/kittenlittle.png" height="300px" width="300px">'+
                        '<p class="centered hideClass">I have two new little kittens,  Luca and Linus. They are adorable little monsters.'+ 
                        'I also have two mice named Ellie and Lucy.  The four of them get along splendidly.</p></div>';

        var fav2HTML = '<div class="fav_number" id="fav2">'+
                        '<p class="num showClass">2</p><p class="favName showClass">Framily</p>'+
                        '<h2 class="centered hideClass">A friend is someone who knows you and loves you just the same.</h2><img class="centered hideClass" src="images/family.png" height="300px" width="300px" >'+
                        '<p class="centered hideClass">I would not be who I am today without all my family and friends. I love every chance I get to visit with and catch up or play games. </p></div>';

        var fav3HTML = '<div class="fav_number" id="fav3">'+
                        '<p class="num showClass">3</p><p class="favName showClass">Travel</p>'+
                        '<h2 class="centered hideClass">Not all those who wander are lost.</h2><img class="centered hideClass" src="images/newzealand.png" height="300px" width="300px" >'+
                        '<p class="centered hideClass">I love to travel!  My favorite trip so far has been a road trip through the south island of New Zealand with a stop over in Fiji. I hope to be able to visit every state and every continent in my lifetime.</p></div>';

        var fav4HTML = '<div class="fav_number" id="fav4">'+
                        '<p class="num showClass">4</p><p class="favName showClass">Baseball</p>'+
                        '<h2 class="centered hideClass">Go Cubs Go!</h2><img class="centered hideClass" src="images/baseball.png" height="300px" width="300px" >'+
                        '<p class="centered hideClass">As a transplant from the Chicago area, I am a big Cubs fan - for better or worse.  This goes well with my love of travel, but I hope to visit all the baseball stadiums in the US. So far I have 9 of 30 with at least 5 more lined up this summer!</p></div>';

        var fav5HTML = '<div class="fav_number" id="fav5">'+
                        '<p class="num showClass">5</p><p class="favName showClass">Reading</p>'+
                        '<h2 class="centered hideClass">Reading a good book is like taking a journey...</h2><img class="centered hideClass" src="images/hpBooks.jpg" height="300px" width="300px">'+
                        '<p class="centered hideClass">I love to read!  I have read and enjoyed booked from many genres but the Harry Potter series is probably my all time favorite.  There are too many others that I like to list here!.</p></div>';

        var fav6HTML = '<div class="fav_number" id="fav6">'+
                        '<p class="num showClass">6</p><p class="favName showClass">Creativity</p>'+
                        '<h2 class="centered hideClass">Creativity is intelligence having fun!</h2><img class="centered hideClass" src="images/bacon.jpg" height="300px" width="300px"  >'+
                        '<p class="centered hideClass">I love to be creative in many ways.  I love trying to cook new things, knitting and crocheting, painting, making paper crafts and decorations, planning parties, taking photographs and many more! </p></div>';


        addFavoriteThings = function (){
            //add title
            $('body').append('<h1 class="centered">Click to see more details!</h1>');
            //add >=5 items
            $('body').append(fav1HTML);
            $('body').append(fav2HTML);
            $('body').append(fav3HTML);  
            $('body').append(fav4HTML);
            $('body').append(fav5HTML);
            $('body').append(fav6HTML);

            //built function to switch display on clicks
            //needs to be made after the items are added to the dom
            var $favItems = $('.fav_number');   
            $favItems.on('click', function () {            
                $(this).children('.showClass').removeClass('showClass').addClass('tempClass');
                $(this).children('.hideClass').removeClass('hideClass').addClass('showClass');
                $(this).children('.tempClass').removeClass('tempClass').addClass('hideClass');
            })
        }

      
        
        
        
        //Welcome page interaction
        $ (function() {
            var $welcome = $('#welcome_button');   
            $welcome.on('click', function () {
                //when button is clicked remove
                $('#welcome_div').remove();
                //call add fave things to add to dom
                addFavoriteThings(); 
            })    
        })


})