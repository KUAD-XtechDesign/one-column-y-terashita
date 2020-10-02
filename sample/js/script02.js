$(function(){
  
  //id="img01"の要素をクリックした時、id="content01"の要素がスライドダウン表示される
  $("#img01").on("click",function(){
    $("#content01").slideDown();
  })

  //class="close_button"の要素をクリックした時、id="content01"の要素がスライドアップ非表示される
  $(".close_button").on("click",function(){
    $("#content01").slideUp();
  })

});