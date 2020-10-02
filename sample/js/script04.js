$(function(){
  
  //class="img_button"の要素をクリックした時、その要素の兄弟要素のclass="content"がスライドトグル表示/非表示される
  $(".img_button").on("click",function(){
    $(this).siblings(".content").slideToggle();
  })

  //class="close_button"の要素をクリックした時、その要素の親要素のclass="content"がスライドアップ非表示される
  $(".close_button").on("click",function(){
    $(this).parent(".content").slideUp();
  })

});