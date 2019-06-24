$('.nested-accordion').find('.comment').slideUp();
$('.nested-accordion').find('h3').click(function(){
  $(this).next('.comment').slideToggle(100);
  $(this).toggleClass('selected');
});
