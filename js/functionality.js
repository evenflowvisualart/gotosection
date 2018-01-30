$(document).ready(function(){

//arrow to top
    
    var $root= $('html, body');
      $('.fa-arrow-up').click(function(){
            $root.animate({scrollTop : 0},800);
            return false;
        });
    
//nav link to section
    
    $('.navigation li').find('a').click(function() {
    var section = $(this).attr('href');
   $root.animate({
        scrollTop: $(section).offset().top
     }, 800);
        return false;
    });
});
    

//navbar appear on scroll

//arrow appear on scroll

   
   $(window).scroll(function(){
        
        if ($(this).scrollTop() > 500) {

         $('.navbarscroll').fadeIn();  

        } else {

        $('.navbarscroll').fadeOut();

        }
    
        if ($(this).scrollTop() > 60) {
    
        $('.fa-arrow-up').fadeIn();

        } else {

        $('.fa-arrow-up').fadeOut();

      };
      
       

});
    




  