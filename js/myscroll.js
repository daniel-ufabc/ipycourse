var fromTop = 65;

// Adapted from the script of Tushar Gupta (JSFiddle: http://jsfiddle.net/cse_tushar/Dxtyu/141/)
$(document).ready(function () {


  $(document).on("scroll", onScroll);

  //smoothscroll

  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");


    $('a').each(function () {
      $(this).parent().removeClass('active');
    })
    $("#homelink").addClass('active');

    var target = document.getElementById("homelink").hash;
    //menu = target;
    //$target = $(target);

    $('html, body').stop().animate({
      'scrollTop': 0
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  $('a[href^="#"]:not([href="#"])').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    /*
    $('a').each(function () {
      $(this).parent().removeClass('active');
    })
    $(this).parent().addClass('active');
    */

    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - fromTop + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

// fix first link ...
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#navbar a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos + fromTop && refElement.position().top + refElement.height() > scrollPos + fromTop) {
      $('#navbar ul li').removeClass("active");
      currLink.parent().addClass("active");
    }
    else{
      currLink.parent().removeClass("active");
    }
  });
}
