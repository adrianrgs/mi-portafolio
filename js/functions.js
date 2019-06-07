/* ===============================
            PRELOADER
    ===============================*/

    $(window).on('load', function () {
      $('#status').fadeOut();
      $('#preloader').delay(1000).fadeOut();
  });

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

/*   $('.header__hero').css({
    'transform' : 'translate(0, -' + wScroll / 15 + '%)'
  }) */

  /* $('.header__titulo').css({
    'transform' : 'translate(' + wScroll / 6 + '% , ' + wScroll / 6 + '%)'
  }) */

  $('.header__textos').css({
    'transform' : 'translate(0, ' + wScroll / 3.3 + '%)'
  })

/*   $('.header__retrato').css({
    'transform' : 'translate(-' + wScroll / 15 + '%, ' + wScroll / 11 + '%)'
  }) */

  $('.header__retrato').css({
    'transform' : 'translate(0%, ' + wScroll / 11 + '%)'
  })

  $('.header__retrato-imagen').css({
    'transform' : 'translate(0, ' + wScroll / 12 + '%)'
  })

  if($(window).width() <= 734) {
    $('.header__textos').css({
      'transform' : 'translate(' + wScroll / 12 + '%,'+ wScroll / 2.5 + '%)'
    })
  }

  if($(window).width() <= 600) {
    $('.header__textos').css({
      'transform' : 'translate(0, -' + wScroll / 12 + '%)'
    })

    $('.header__retrato').css({
      'transform' : 'translate(0, ' + wScroll / 11 + '%)'
    })
  }
})

/* Sticky Navigation */
/* $('.js--section-features').waypoint(function(direction){
  if(direction == "down"){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px'
}) */

/**Mobile NAVIGATION */

/* $('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);

  if (icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round')
  } else {
    icon.removeClass('ion-close-round')
    icon.addClass('ion-navicon-round');
  }
}) */


// MODALS

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var window = window;

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

$(window).click(function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

// MODAL 2


var modal2 = document.getElementById('myModal-2');
var btn2 = document.getElementById("myBtn-2");
var span2 = document.getElementsByClassName("close-2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

$(window).click(function(event){
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
})