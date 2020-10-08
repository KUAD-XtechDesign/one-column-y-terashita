$(function(){
  
  $(".img_button").on("click",function(){
      $(this).siblings(".content").slideToggle();
  })
  
  $(".close_button").on("click",function(){
      $(this).parent(".content").slideUp();
  })
  
});