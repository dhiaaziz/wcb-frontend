//ref https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


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

    // $("html, body").animate({
    //  scrollTop: $('#'+window.location.hash).offset().top
    // }, 1000);
    // window.location.hash='';
});
