$(function()
 {
    var $div = $('div');
    var $this = $(this);
    var $btn = $('button');
    // Hide the 'p' and empy 'ul'
    $div.hide();
    // Whe the button is clicked this function runs
    $btn.on('click', function(){
        // Display the div (Two 'p' tags and empy 'ul')
        $div.toggle('slow');
        // Animation for getting the button and heading off the screen, and removing the button from the DOM.
        $('section').children('h2').animate({right: '1000px'}, function(){
            $btn.animate({right: '1000px'}).hide('fast', function(){$btn.remove()});
        }).hide('fast');
        // Creating the li by calling the functions below, and populating them with strings.
        createThing('Gaming',
                    'I started out playing DOS games on an old Windows 95 computer. Comander Keen, Duke Nukem, and DOOM were what I grew up on. Now I primarily game on PC, with Fallout 4, Hotline Miami, and Wolfenstein: The New Order being my go-to games lately.', 
                    'images\\pcmr.png');
        
        createThing('Reddit',
                    'One of the best websites out there, full of useless information you didn\'t know you couldn\'t live without! From painfully detailed to painfully stupid you can find it all on Reddit.',
                    'images\\reddit.png');
        
        createThing('Retro Consoles',
                    'Occasionally when I come across broken retro gaming platforms for a good deal I\'ll buy them and fix them up. I enjoy the nostalgic feel of playing games on the actual console. So far I have: 1 NES, 1 Famicom, 6 Original Gameboys, 1 GB Color, and 1 GB Advance.',
                    'images\\nes.png');
        // Since you cannot apply events to dynamic elements the on Click is applied to the ul with the child selector set to the created element
        $('ul').on('click', 'li', function()
        {
            var li = $(this);
            liBack(li);
            // Shows children of the li you clicked on
            li.children().toggle('slow');
        });

    });
    
    // This function creates my actual li and the elements inside them
    // It takes in 3 parameters title (The li Name), desc, (The description for that item), and the img (src link)
    function createThing(title, desc, img)
    {
        var lst = $('<li></li>').text(title);
        var par = $('<p class="hidden"></p>').text(desc);
        var src = $('<img class="hidden" src = "' + img + '">');
        // This places the 'p' tag and 'img' tag inside the 'li', and lastly appends the 'li' inside the 'ul'
        $('ul').append(lst.append( par,src));
    }
    
    // This function is just part of the click animation for 'li'
    function liBack($this){
        if($this.hasClass('clicked'))
        {
             $this.removeClass('clicked');
        }
        else
        {
            $this.addClass('clicked');
        }
    }
});



