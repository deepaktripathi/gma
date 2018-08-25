$(function(){
  var toggles = $('.toggle a'),
      codes = $('.code');
  
  toggles.on("click", function(event){
    event.preventDefault();
    var $this = $(this);
    
    if (!$this.hasClass("active")) {
      toggles.removeClass("active");
      $this.addClass("active");
      codes.hide().filter(this.hash).show();
    }
  });
  toggles.first().click();
});

$(window).load(function () {

    $("#aside").load("_shared/_aside.html");
    $("#footer").load("_shared/_footer.html");

    //loading shared content
    $("#header").load("_shared/_header.html", function () {
        $('.flexslider').flexslider({
            animation: "slide",
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    });
});

jQuery('.slider').lbSlider({
    leftBtn: '.sa-left',
    rightBtn: '.sa-right',
    visible: 3,
    autoPlay: true,
    autoPlayDelay: 4
});