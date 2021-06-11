$(function(){
  $('.animBarDiv').hover(function() {
      $('.animalsBar').stop(false, true).fadeIn(200);
  },function() {
      $('.animalsBar').stop(false, true).fadeOut(200);
  })
});





