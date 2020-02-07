$(function(){
     
     var oppose=window.innerHeight-$('.body_ennemies').offset().top;
     var adjacent = $('.body_defender').offset().left;
     
     var hypothenus = Math.sqrt((oppose*oppose)+(adjacent*adjacent));
     
      

});