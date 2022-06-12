(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

var $ = jQuery;


(function(){


  ///////////////////////////////
  // Set Home Slideshow Height
  ///////////////////////////////

  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height(); 
    jQuery('#header').height(windowHeight);
  }

  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////

  function centerHomeBannerText() {
      var bannerText = jQuery('#header > .center');
      var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;   
      bannerText.css('padding-top', bannerTextTop+'px');    
      bannerText.show();
  }

  function setHeaderBackground() {    
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 
    
    if (scrollTop > 300 || jQuery(window).width() < 700) { 
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');    
    }
  }




  ///////////////////////////////
  // Initialize
  ///////////////////////////////

  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();

  //Resize events
  jQuery(window).smartresize(function(){
    setHomeBannerHeight();
    centerHomeBannerText();
  });
  
})();


  ///////////////////////////////
  // Smooth Scroll
  ///////////////////////////////


smoothScroll.init();




  ///////////////////////////////
  // Animate Css
  ///////////////////////////////
var $ = jQuery;

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

$(document).ready(function(){
    $('#scrollToContent').each(function() {
        animationHover(this, 'pulse');
    });
});



  ///////////////////////////////
  // Header Fixed
  ///////////////////////////////



var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#services').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#services').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



}


function handleClick(selector_name) {
  $(".service-card").css({marginLeft: 0, marginRight: 0, width: "25%"});
  $(".service-card-1").css({marginLeft: "5%", marginRight: "5%", width: "30%"});
  $(".service-card-2").css({marginLeft: 0, marginRight: 0, width: "35%"});
  $(".service-card-2").show();
  
  const numbList = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii']
  numbList.forEach(element => {
    $(`.service-card-inner-${element}-desc`).hide();
    $(`.service-card-inner-${element}`).css({backgroundColor: "white", color: "black"});
  });


  $(selector_name).css({backgroundColor: "black", color: "white"});
  
  $(`${selector_name}-desc`).css({display: "inline-block", height: "300px",	width: "100%"});
}

 document.onscroll = scroll;


  ///////////////////////////////
  // Testimonial Slide
  ///////////////////////////////



 $(document).ready(function() {
 
  $("#testimonial-container").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem:true,
  });


  $(".service-card-1").hide();
  $(".service-card-2").hide();
  $(".service-card").css({marginLeft: "25%", marginRight: "25%", width: "50%"});
  $(".service-card").on('click', () => {
    $(".service-card").css({marginLeft: 0, marginRight: 0, width: "45%"});
    $(".service-card-1").css({marginLeft: "10%", marginRight: 0, width: "45%"});
    $(".service-card-1").show();
    $(".service-card").css({backgroundColor: "black", color: "white"});
  });


  $(".service-card-inner-i").on('click', () => handleClick(".service-card-inner-i"));
  $(".service-card-inner-ii").on('click', () => handleClick(".service-card-inner-ii"));
  $(".service-card-inner-iii").on('click', () => handleClick(".service-card-inner-iii"));
  $(".service-card-inner-iv").on('click', () => handleClick(".service-card-inner-iv"));
  $(".service-card-inner-v").on('click', () => handleClick(".service-card-inner-v"));
  $(".service-card-inner-vi").on('click', () => handleClick(".service-card-inner-vi"));
  $(".service-card-inner-vii").on('click', () => handleClick(".service-card-inner-vii"));
 
});


  ///////////////////////////////
  // google map
  ///////////////////////////////

function initialize()
{
var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true,
  scrollwheel: false
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);



