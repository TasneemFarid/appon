$(function() {
  
  $('.ss_slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });
  
  $('.feedback_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });

  new VenoBox({
    selector: '.my-video-links',
  });

  // $(".team_text").hide();

  // $(".team_item").hover(
  //   function(){
  //   $(".team_text").stop().show();
  // },
  //   function(){
  //   $(".team_text").stop().hide();
  // });

});


