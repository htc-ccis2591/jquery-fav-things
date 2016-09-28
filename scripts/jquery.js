//Jquery document ready function
$(function () {
    //create variables
    var $Body = $('body');    
    var $btnFavThings = $('<input type="button" id="btnDisplayFavThings" value="Click To View My Favorite Things" class="btn btn-primary" />');
    var previousHeaderClicked = null;
    function createContainerElements() {
        // Create div container 
        var $DivContainer = $('<div id="divContainer" class="container"></div>');
        // Append the containing div element to the body element
        $Body.append($DivContainer);
        $DivContainer.append($('<div id="divRow" class="row"></div>'));
    }
    // this function is used to create a group of elements that will be appended to the div Row element.
    // the elements are appended to the div row element
    function createFavThingElement(h2Value, imgName) {
        $("#divRow").append('<div class="col-lg-6 col-lg-offset-3 text-center"><h2 class="FaveThings">' + h2Value + '</h2><img src="Images/' + imgName + '" class="imageHide"/></div>');
    }
    // this function is used to create the click event handler for the h2 Fave Things elements
    function createFavThingsEventHandler() {
        $(".FaveThings").on("click", function () {
            // If the current element clicked the same as the previous one clicked.. call the slide toggle method on the image element
            if (this === previousHeaderClicked) {
                $(this).next().slideToggle(300, "swing")
            }
            else {
                
                $(".previousImage").slideUp(300).removeClass("previousImage");
                
                $(this).next().slideDown(700).addClass("previousImage");
            }
            // assign current h2 element clicked to the previousHeaderClicked variable
            previousHeaderClicked = this;
        });
    }
    // Remove Paragraph Tag from DOM
    $('p').remove();
   
    $Body.append($btnFavThings);
   
    $btnFavThings.on("click", function () {
        // remove the button from the DOM
        $btnFavThings.remove();
        // call the createContainerElements function to create the containing divs
        createContainerElements();
        //call the function to create a Favorite Things 3 times.  Each time passing in a favorite thing h2 value and an image name
        createFavThingElement("snow","snow.jpg");
        createFavThingElement("rain", "rain.png");
        createFavThingElement("leaves", "leaves.jpg");
        // call the create event handler function
        createFavThingsEventHandler();
        // Select all the images and hide them
        $('.imageHide').hide();
        // hide the div row container element and then fade it in
        $("#divRow").hide().fadeIn(1000);
    });
});