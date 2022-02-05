$(function() {
     $(".carousel").carousel( { interval: 2000 } );
     $("#carouselButton").click(function(){
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
   
       } else if ($("#carouselButton").children("i").hasClass("fa-play")) {
         $(".carousel").carousel("cycle");
         $("#carouselButton").children("i").removeClass("fa-play");
         $("#carouselButton").children("i").addClass("fa-pause");               
       } else {
         // This will keep it from breaking in case someone makes a bad script
         // Wish I had some error reporting though.
         $(".carousel").carousel("cylce");
         $("#carouselButton").children("i").addClass("fa-pause");              
       }
   });
 });
