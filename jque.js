//Full document creation function
$(function(){//OPEN

var $Body = $('#body');


  
  //adds the bigchange button. 
  var btn$Favall =$('#deploybtn');
    



    btn$Favall.click(createthestuff);

function createthestuff(){
    
    console.log('plzwork');
    var $Main = $('<div id="main" class="Main"></div>');
    
    $Body.append=($Main);
    
    var $Buttons=('<button type="button" id="animationbtn">Animation</button><button type="button" id="tablebtn">Tabletops</button><button type="button" id="comicsbtn">Comics</button><button type="button" id="conbtn">Conventions</button><button type="button" id="gamebtn">Gaming!</button>')
    $Main.append=($Buttons)
    var $TL = ('<div id="TL" class="Thinglist"></div>')
    $Main.append($TL)
    
    
    
    var $anim
    var $comics
    var $tabletops
    var $cons
    var $gaming
}
    
    
});//CLOSE