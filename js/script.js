
$(function(){
   $('.thing').on('click', function(){
       var stuff = $(this).next().html();
       
       $('.rightside').children().html(stuff);
       
       console.log(stuff);
   }); 
});