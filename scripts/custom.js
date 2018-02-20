$(document).ready(function(){
  $(window).scroll(function(){
      $(".hero-text").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});
