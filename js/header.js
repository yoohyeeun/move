$(document).ready(function(){

  const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active")

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active")
  });

});