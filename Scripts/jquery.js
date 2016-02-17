//Jquery document ready function
$(function (){

    //Cache the body element
    var $Body = $('body');

    // Create and cache button element;
    var $btnFavThings = $('<input type="button" id="btnDisplayFavThings" value="Click To View My Favorite Things" class="btn btn-primary" />');
    
    // Variable that will be used to store a reference to the last h2 element clicked
    var previousHeaderClicked = null;
    
    // Function used to Create Container elements
    function createContainerElements(){
        // Create div container element and store in variable. Element has a bootstrap class of container
        var $DivContainer = $('<div id="divContainer" class="container"></div>');
        // Append the containing div element to the body element
        $Body.append($DivContainer);
        // create a div element with a bootstrap class of "row" and append to the div container element 
        $DivContainer.append($('<div id="divRow" class="row"></div>'));
    }
    
    // this function is used to create a group of elements that will be appended to the div Row element.
    // A div element is created that has two children..  an h2 and img.
    // The value of the h2 and the name of the image are passed into the function
    // the elements are appended to the div row element
    function createFavThingElement(h2Value, imgName){        
        $("#divRow").append('<div class="col-lg-6 col-lg-offset-3 text-center"><h2 class="FaveThings">' + h2Value + 
                            '</h2><img src="Images/' + imgName + '" class="imageHide"/></div>');
    }
    
    // this function is used to create the click event handler for the h2 Fave Things elements
    function createFavThingsEventHandler () {
        $(".FaveThings").on("click", function() {
        
        // If the current element clicked the same as the previous one clicked.. call the slide toggle method on the image element
        if (this === previousHeaderClicked){           
            $(this).next().slideToggle(300, "swing")      
        } else {
            // select the img element with the class previousImage.  Hide the img with the slideUp method and remove the previousImage class
            $(".previousImage").slideUp(300).removeClass("previousImage"); 

            // select the current h2 element.  The next method returns the img sibling.  The img is shown with the slideDown method and the previousImage class is added
            $(this).next().slideDown(700).addClass("previousImage");           
        }
        // assign current h2 element clicked to the previousHeaderClicked variable
        previousHeaderClicked = this;
        }); 
    }

    // Remove Paragraph Tag from DOM
    $('p').remove();
    
    //Append button element to the body
    $Body.append($btnFavThings);
        
    // Fav Things button event handler for click event
    $btnFavThings.on("click", function() {
        // remove the button from the DOM
        $btnFavThings.remove();
        // call the createContainerElements function to create the containing divs
        createContainerElements();
        
        //call the function to create a Favorite Thing 5 times.  Each time passing in a favorite thing h2 value and an image name
        createFavThingElement("My Son Ryland", "Ryland.jpg");
        createFavThingElement("Traveling", "Airplane.jpg");
        createFavThingElement("Baseball", "Baseball.jpg");
        createFavThingElement("Pizza", "Pizza.jpg");
        createFavThingElement("Music", "Music.jpg");
        
        // call the create event handler function
        createFavThingsEventHandler();
        
        // Select all the images and hide them
        $('.imageHide').hide();
        
        // hide the div row container element and then fade it in
        $("#divRow").hide().fadeIn(1000);
    });      
});
    
    