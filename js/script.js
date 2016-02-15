$(function() {
    
    /////////////////////////////////////////
    ////  HTML text for added sections  /////
    /////////////////////////////////////////
    
        // build info for all fave items
        var fav1HTML =  '<div class="fav_number" id="fav1">'+
                        '<p class="num showClass">1</p><p class="favName showClass">Critters</p>'+
                        '<h2 class="centered hideClass">Pets are like potato chips, you can never have just one.</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/kittenlittle.png"><img class="centeredImg" src="images/mouse.jpg"></div>'+
                        '<p class="centered hideClass">I have two new little kittens,  Luca and Linus. They are adorable little monsters.'+ 
                        'I also have two mice named Ellie and Lucy.  The four of them get along splendidly.</p>'+
                        '</div>';

        var fav2HTML = '<div class="fav_number" id="fav2">'+
                        '<p class="num showClass">2</p><p class="favName showClass">Framily</p>'+
                        '<h2 class="centered hideClass">A friend is someone who knows you and loves you just the same.</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/family.png" ></div>'+
                        '<p class="centered hideClass">I would not be who I am today without all my family and friends. I love every chance I get to visit with and catch up or play games. </p></div>';

        var fav3HTML = '<div class="fav_number" id="fav3">'+
                        '<p class="num showClass">3</p><p class="favName showClass">Travel</p>'+
                        '<h2 class="centered hideClass">Not all those who wander are lost.</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/newzealand.png" ></div>'+
                        '<p class="centered hideClass">I love to travel!  My favorite trip so far has been a road trip through the south island of New Zealand with a stop over in Fiji. I hope to be able to visit every state and every continent in my lifetime.</p></div>';

        var fav4HTML = '<div class="fav_number" id="fav4">'+
                        '<p class="num showClass">4</p><p class="favName showClass">Baseball</p>'+
                        '<h2 class="centered hideClass">Go Cubs Go!</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/baseball.png" ></div>'+
                        '<p class="centered hideClass">As a transplant from the Chicago area, I am a big Cubs fan - for better or worse.  This goes well with my love of travel, but I hope to visit all the baseball stadiums in the US. So far I have 9 of 30 with at least 5 more lined up this summer!</p></div>';

        var fav5HTML = '<div class="fav_number" id="fav5">'+
                        '<p class="num showClass">5</p><p class="favName showClass">Reading</p>'+
                        '<h2 class="centered hideClass">Reading a good book is like taking a journey...</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/hpBooks.jpg" ></div>'+
                        '<p class="centered hideClass">I love to read!  I have read and enjoyed booked from many genres but the Harry Potter series is probably my all time favorite.  There are too many others that I like to list here!.</p></div>';

        var fav6HTML = '<div class="fav_number" id="fav6">'+
                        '<p class="num showClass">6</p><p class="favName showClass">Creativity</p>'+
                        '<h2 class="centered hideClass">Creativity is intelligence having fun!</h2>'+
                        '<div class="imgdiv hideClass"><img class="centeredImg" src="images/bacon.jpg" ></div>'+
                        '<p class="centered hideClass">I love to be creative in many ways.  I love trying to cook new things, knitting and crocheting, painting, making paper crafts and decorations, planning parties, taking photographs and many more! </p></div>';

    
    
    /////////////////////////////////////////
    /////  build the helper functions  //////
    /////////////////////////////////////////
    
    var slideshowInterval;
    
    function fadeInImg(imgdiv){
            // grab the first image    
            var currImg = $(imgdiv).children('img:first');
            // start the image hidden, fade in, hold it, fade out
            currImg.fadeTo(300, 1 ).delay(3000).fadeTo(300, 0 );
            // move img to the back of the stack
            $('.imgdiv' ).append( currImg );   
        };

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
            
             $('img').hide();
             
            //built function to switch display on clicks
            //needs to be made after the items are added to the dom
            var $favItems = $('.fav_number');   
            
                $favItems.on('click', function () {   
                    $(this).children('.showClass').removeClass('showClass').addClass('tempClass');
                    $(this).children('.hideClass').removeClass('hideClass').addClass('showClass');
                    $(this).children('.tempClass').removeClass('tempClass').addClass('hideClass');
                    //make first image visible and grab div
                    $(this).children('.imgdiv').children('img:last').show().fadeTo(0, 1);
                    var slideshow = $(this).children('.imgdiv');
                    var slides = $(slideshow).children('img');
                    //if details are open, set up interval for looping otherwise clear it
    
                     if (slideshow.hasClass('showClass') && slideshow.children().length > 1 ){
                        //loop every 3000 milliseconds
                                        
                        ///// interval attempt  - weird scoping trouble when all of the divs have imgdiv class.  when only first fav has the imgdiv class it works nicely. 
                        
                       console.log(this.slideshowInterval);
                        
                        // If the timer already exists on this element, stop it. 
                        if ( this.slideshowInterval ) {
                            console.log('clearing in one');
                            clearInterval( this.slideshowInterval );
                        }
                        
                           console.log(this.slideshowInterval);
                         
                        // Now make a new one timer and save it on the DOM element
                        this.slideshowInterval = setInterval( function() {
                            $shown = $(slideshow).children('img:visible');
                            $shown.hide().fadeOut(1600);
                            $shown.siblings().fadeIn(1600);

                            //fadeInImg(slideshow);
                        }, 3000 );

                    } else {
                        clearInterval( this.slideshowInterval );
                        console.log('clearing in two');
                    }
                    
                     ////// each attempt, grabs and fades both images together, doesn't repeat
                    /*                                                                   
                    if (slideshow.hasClass('showClass')){ 
                        
                        $.each(slides, function (index, value){
                        $(value).show().fadeTo(0, 1).fadeTo(100, 1 ).delay(1000).fadeTo(100, 0 );    
                        });
                    }
                    */
                    
                    
                    ////// while loop attempt - disasterous, creates endless loop.
                    /*
                    var slideInd = 0;
                    var totalSlides =  slides.length;
                    while (slideshow.hasClass('showClass')) {
                        var thisSlide =  $(slides[slideInd]);
                        console.log(thisSlide);
                        thisSlide.show().fadeTo(0, 1).fadeTo(100, 1 ).delay(3000).fadeTo(100, 0 ).hide();
                        slideInd = (slideInd+1) % totalSlides;
                    }*/
                    

                })
        }

      
        
    //////////////////////////////////////////////////////
    ////  Run Page from initial welcome screen click  ////
    //////////////////////////////////////////////////////
        
        
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