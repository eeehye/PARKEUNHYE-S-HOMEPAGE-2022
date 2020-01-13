/* 포폴 메뉴 */
$(document).ready(function () {

  // 고정 메뉴
  window.onscroll = function(){
var sec1 = document.querySelector('#main_lnb');
var menu = document.querySelector('#main_gnb');
var sec1_top = sec1.offsetTop;
var b = window.pageYOffset;
var i = document.getElementById("bear1");

if(sec1_top <= b){
  menu.classList.add('fixed');

} else{
  menu.classList.remove('fixed');
}
}

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
