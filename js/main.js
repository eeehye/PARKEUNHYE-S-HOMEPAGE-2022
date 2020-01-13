/* 포폴 메뉴 */
$(document).ready(function () {

  // 고정 메뉴
  $(window).scroll(function(){
    var menu_top = document.querySelector('#main_gnb').offsetTop;
    var win_scroll = document.documentElement.scrollTop;
    if(win_scroll > menu_top){
      $('#main_gnb').addClass('fixed');
    } else {
      $('#main_gnb').removeClass('fixed');
    }

    console.log(menu_top, win_scroll);
    
  })

  $('.menu ul li').click(function () {
    $('#pp_wrap').addClass('none');
  });
  $('.homepage').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t1').addClass('show');
    $('.homepage').addClass('show');
  });
  $('.web').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t2').addClass('show');
    $('.web').addClass('show');
  });
  $('.mobile').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t3').addClass('show');
    $('.mobile').addClass('show');
  });
  $('.sns').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t4').addClass('show');
    $('.sns').addClass('show');
  });
  $('.book').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t5').addClass('show');
    $('.book').addClass('show');
  });
  $('.project').click(function () {
    $('.menu ul li').removeClass('show');
    $(this).removeClass('show');
    $('.po_wrap').removeClass('show');
    $('.po_wrap.t6').addClass('show');
    $('.project').addClass('show');
  });
});
