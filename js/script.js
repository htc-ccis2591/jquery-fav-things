
$(function(){
    
    var $thingItems;
    
    // This click event adds all html appearing after the "Click here" heading   
    $('a').on('click', function(){
        
        // dump the original heading so it can't be clicked anymore
        $('h2').text('Click on an item below to learn more.')
        
        // Add the divs that provide the left and right columnngs
        var $newDiv = $('<div class="leftside"></div>');
        $('body').append($newDiv);
        $newDiv = $('<div class="rightside"></div>');
        $('body').append($newDiv);
        
        // Add inner divs within the columns to provide pretty formatting
        $newDiv = $("<div class='innerdiv'></div>");
        $('div').not('.innerdiv').append($newDiv);
        
        //Get and add 6 fave items
        for (var i=1; i<7; i++){
            var fave = $buildFave(i);
            
            // Add the name of the favorite thing and give it a thing class
            var $newThing = $('<p>' + fave[0] + '</p>');
            $('.leftside div:last-child').append($newThing);
            //$('.innerdiv p:last-child').addClass('thing');
            $('p:last').addClass('thing');
            
            // Add the span element that will hold and hide the description and picture
            $newThing = $('<span></span>');
            $('.leftside div:last-child').append($newThing);
            
            // Add the image
            $newThing = $("<img src ='./images/" + fave[2] + "' >");
            $('.leftside span:last-child').append($newThing);
            
            // Add the description of the thing
            $newThing = $('<p>' + fave[1] + '</p>');
            $('.leftside span:last-child').append($newThing);
        }
        
        // give all paragraphs in a span the desc class
        $('span').children('p').addClass('desc');
        $('span').children('p').removeClass('thing');
         
        // give all the spans the class that hides them (and their contents)
        $('span').addClass('hideMe');
        
        // add all thing paragraphs to the global-scoped variable
        $thingItems = $('.thing');
        
        
        // This click even will display info and picture about the clicked fave thing
        $($thingItems).on('click', function(){
           var stuff = $(this).next().html();

           $('.rightside').children().html(stuff);

            console.log('clicked it');

        }); 
    });
    
    
    // Creates the name, description, and image name for each favorite thing
    function $buildFave(i){
        
        var fave, desc, imageName;
        imageName = './images/';
        
        switch (i) {
            case 1:
                fave = 'Sailing';
                desc = 'This is Windsong II. She\'s a bit short and a bit fat so she doesn\'t like to sail '
                + 'well when heeled. But because she\'s small she is also cheap to rent. And we know where '
                + 'everything is on board so we love here anyway.';
                imageName = 'sailboat.png';
                break;
            case 2:
                fave = 'Playing guitar';
                desc = 'I\'m not very good but good enough to entertain myself. I have a nice Mexican Strat '
                + 'and one of my favorite pastimes is to crank it up and play rock star. I can bumble along '
                + 'with most of what comes on KQRS. Only when the kids are gone, though. They hate the '
                + 'noise.';
                imageName = 'strat.png';
                break;
            case 3:
                fave = 'Learning Spanish and Russian';
                desc = 'Not fluent in either but I could survice in a Spanish-speaking country without too '
                + 'much trouble. Not so much in Russian. I can say \"Hi, how are you\" and I can ask you your '
                + 'name. I can also say something appropriate if you cut me off in traffic.';
                imageName = 'hello.png';
                break;
            case 4:
                fave = 'The Beatles';
                desc = 'There\'s nothing that needs to be said about this one. If they aren\'t on your '
                + 'list then you have something seriously wrong with you.';
                imageName = 'beatles.png';
                break;
            case 5:
                fave = 'Pizza';
                desc = 'Thin crust, thick crust. Hot and fresh for dinner, cold and leftover for breakfast. '
                + 'Sausage, ppepperoni, maybe some onion. I generally like it plain and simple. Jetshas been '
                + 'my favorite but lately I\'ve developed a taste for the Med from Papa Murphy\'s. Either one '
                + 'with a good \(or bad\) Merlot and I\'m happy as a clam.';
                imageName = 'pizza.png';
                break;
            case 6:
                fave = 'Salsa';
                desc = 'This is really three things but I love \'em all. The music, the dancing, and the stuff '
                + 'you put on your food.';
                imageName = 'salsa.png';
                break;
            default:
                fave = 'Nothing more';
                desc = 'No description';
                break;
                
        }
                
        return [fave, desc, imageName];
    }
    
    
});