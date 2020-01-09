
  
  /* 포폴 메뉴 */
$(document).ready(function () {
    $('.web').click(function(){
      $('.menu ul li').removeClass('show');
      $(this).removeClass('show');
      $('.po_wrap').removeClass('show');
      $('.po_wrap.t1').addClass('show');
      $('.web').addClass('show');
  });
  $('.mobile').click(function(){
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t2').addClass('show');
    $('.mobile').addClass('show');
});
  $('.homepage').click(function(){
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t3').addClass('show');
    $('.homepage').addClass('show');
});
  $('.sns').click(function(){
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t4').addClass('show');
    $('.sns').addClass('show');
});
  $('.book').click(function(){
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t5').addClass('show');
    $('.book').addClass('show');
});
  $('.project').click(function(){
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t6').addClass('show');
    $('.project').addClass('show');
});
});

