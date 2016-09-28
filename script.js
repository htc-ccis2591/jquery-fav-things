//paragraph
var $Who = ("<p>Pho was originally sold at dawn and dusk by roaming street vendors, who shouldered mobile kitchens on carrying poles.From the pole hung two wooden cabinets, one housing a cauldron over a wood fire, the other storing noodles, spices, coodware, and space to prepare a bowl of pho.</p>");
var $What = ("<p>Pho is a Vietnamese noodle soup consisting of broth, rice noodles, a few herbs, and meat, primarily made with either beef or chicken. There are two main styles of pho in Vietnam. The Hanoi and Saigon styles of pho differ by noodle width, sweetness of broth, and choice of herbs.</p>");
var $Where = ("<p>Pho is a popular street food in Vietnam and the specialty of a number of restaurant chains around the world. In the aftermath of the Vietnam War, Vietnamese refugees brought pho to many countries. Restaurants specilizing in pho appeared in numerous Asian enclaves and Little Saigons, such as in Paris, and in major cities in the United States, Canada, and Australia.</p>");
var $When = ("<p>Pho originated in the early 20th century in northern Vietnam, and was popularized throughout the rest of the world by refugees after the Vietnam War. Because pho's origins are poorly documented, there is significant disagreement over the cultural influences that led to its development in Vietnam, as well as the etymology of the word itself.</p>");
var $Why = ("<p>The broth for beef pho is generally made by simmering beef bones, oxtails, flank steak, charred onion, charred ginger and spices give an intense flavor that are addicted.</p>");
var $arr = [$What, $Where,  $Why, $Who, $When];

//set new title
$(document).prop('title', 'My Favorite Food');
//set id for button
$('body').first().children().first().attr('id', 'My-Favorite-Food');
//set new text for <p>
$("#My-Favorite-Food").text('Click Here for My Favorite Food!!');
//background image
$('body').css('background-image', 'url("image/pho_beef_5.jpg")');
//add new ul
$('body').append("<ul></ul>");
$('ul').append("<li><h3>What is Pho?</h3></li>");
$('ul').append("<li><h3>Where is Pho?</h3></li>");
$('ul').append("<li><h3>Why is Pho?</h3></li>");
$('ul').append("<li><h3>Who make Pho?</h3></li>");
$('ul').append("<li><h3>When did Pho?</h3></li>");
//set id for ul
$('li').attr('class', 'Questions');
//border
$(".Questions").css({"width": "150px",
                     "margin": "15px"});
//cursor: pointer
$(".Questions, #My-Favorite-Food").css('cursor', 'pointer');
//hide ul + <p>
$(".Questions").hide();
//create empty text string
$("<span>test</span>").insertBefore('ul');
$('span').css({"margin": "30px 25% 10%px 50%",
               "float": "right",
               "border-color":"yellowgreen",
               "width": "70%",
               "height": "70px",
               "border-style":"dotted",
               "border-width":"10px",
               "padding": "20px",
               "display": "none"})
//'My-Favorite-Food' on-click
$("#My-Favorite-Food").on("click", function () {
    $(this).remove();
    $(".Questions").show();
    $('p').hide();
}); 
//'question' on-click
$(".Questions").on("click", function () {
    $('span').show();
    $('span').text($(this).first().children().next().text());
}); 

//li to array
$( "li" ).each(function(i) {
    $(this).append($arr[i])
    $($arr).hide();
});














