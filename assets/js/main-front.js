//JQUERY REQUIRED
$( document ).ready(function() {
    $('.accordion-button').on('click', function(){
      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).next().css("max-height",0);
      }
      else{
        $(this).addClass("active");
        var panelScrollHeight = $(this).next().prop("scrollHeight");
        $(this).next().css("max-height",panelScrollHeight+1);
      }
    });
});
