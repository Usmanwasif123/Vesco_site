/*=========================================================================
                        SERVICES
==========================================================================*/
$(function () {
    // animated on sroll
  new WOW().init();
});
/*=========================================================================
                        WORK
==========================================================================*/
$(function(){
    
 $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
      }
   });
});
/*=========================================================================
                        TEAM
==========================================================================*/
$(function(){
    
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
               // breakpoint from 0 up
               0 : {
                    item: 1
               },
               // breakpoint from 480 up
               480 : {
                    item: 3
               },
               // breakpoint from 768 up
               768 : {
                    item: 5
               }
          }
        
    });
});
/*=========================================================================
                        TESTIMONIALS
==========================================================================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
      
});
});
/*=========================================================================
                        STATS
==========================================================================*/
$(function () {
   $(".counter").counterUp({
        delay: 10,
        time: 2000
});
});
/*=========================================================================
                        CLIENT
==========================================================================*/
$(function () {
     $("#clients-list").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
               // breakpoint from 0 up
               0 : {
                    item: 1
               },
               // breakpoint from 480 up
               480 : {
                    item: 2
               },
               // breakpoint from 768 up
               768 : {
                    item: 3
               },
               // breakpoint from 992 up
               992 : {
                   item: 4
               }
          }
     });
});
/*=========================================================================
                        NAVIGATION
==========================================================================*/
//show/hide transparent black navigation
$(function () {
 $(window).scroll(function(){
   if($(this).scrollTop() < 50 ) {
 //hide nav
$("nav").removeClass("just-top-nav");
} 
else {
//show nav
$("nav").addClass("just-top-nav");
}       
});   
});
// smooth scrolling
$(function () {
 $("a.smooth-scroll").click(function(event){
  event.preventDefault();  
//get/return id like #about, #work and etc
 var section = $(this).attr("href");
     
   $('html, body').animate({
     scrollTop: $(section).offset().top - 64}, 1250);
});
}); 

//Close mobile menu on click
$(function(){
   
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
    
});