                   $(function() {
                       /*
                       var imgs = $('img');
                       console.log(imgs);
                                      
                       $.each(imgs, function (index, value){
                           console.log($(value));
                           var thisimg = $(value);
                           console.log(thisimg)
                           thisimg.hide().fadeIn(1000).delay(1000).fadeOut(1000);
                       });
                       */


                       var slideshowInterval;
                       $('img').hide();
                       $('img:first').show().fadeTo(100, 1).fadeTo(0, 0).delay(2000).fadeTo(100, 0);

                       function fadeInImg() {
                           // grab the first image    
                           var currImg = $('.test img:first');
                           // start the image hidden, fade in, hold it, fade out
                           currImg.fadeTo(100, 1).delay(2000).fadeTo(100, 0);
                           // move img to the back of the stack
                           $('.test').append(currImg);
                       };

                       //continuously call function every 4000 milliseconds
                       slideshowInterval = setInterval(function() {
                           $('img').hide();
                           $('img:first').show().fadeTo(0, 0);
                           fadeInImg();
                       }, 3000);

                   })