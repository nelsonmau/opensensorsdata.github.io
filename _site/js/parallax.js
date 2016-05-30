var pContainerHeight = $('.home-logo').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.home-img').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

  }
});
