$(function() {
     $(".carousel").carousel( { interval: 2000 } );
     $("#carouselButton").click(function(){
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
   
       } else {
         $(".carousel").carousel("cylce");
         $("#carouselButton").children("i").removeClass("fa-play");
         $("#carouselButton").children("i").addClass("fa-pause");              
       }
    });
});

$(function(){
    $("#loginButton").click(function(){
        alert("Function part 2 is running");

        $("#loginModal").modal("show");
    });
       
    $("#reserveButton").click(function(){
        alert("Function part 2 is running");

        $("#reserveModal").modal("show");
    });
});
