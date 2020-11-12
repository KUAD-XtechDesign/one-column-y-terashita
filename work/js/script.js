$(function(){
  
  $(".img_button").on("click",function(){
      $(this).siblings(".content").slideToggle();
  })
  
  $(".close_button").on("click",function(){
      $(this).parent(".content").slideUp();
  })

  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio
  
  $(window).on("scroll resize load",function(){
    windowH = $(this).height()
    documentH = $(document).height()
    documentW = $(document).width()
    scrollTop = $(this).scrollTop()
    scrollRatio = scrollTop/(documentH-windowH)
      
    separate = documentH / 3;
  
    if(scrollTop < separate){
      $("body").removeClass().addClass("one")
    }else if(scrollTop < separate * 2){
      $("body").removeClass().addClass("two")
    }else{
      $("body").removeClass().addClass("three")
    }
  
    console.log(windowH,documentH,scrollTop)
  
    $("#wave").css("background-position-x",scrollTop/10)
    $("#line").css("width",scrollRatio * documentW)
  
  })
  

});