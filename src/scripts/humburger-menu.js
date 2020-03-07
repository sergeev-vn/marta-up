$(function() {
  $('.menu__btn').on('click', () => {
    $('.menu__btn').toggleClass('active');

    $('.menu__btn').hasClass('active')
      ? (
          $('.header__sidebar').css('transform', 'translateX(-100%)'),
          ($('body').css('overflow', 'hidden'))
        )
      : (
          $('.header__sidebar').css('transform', 'translateX(0)'),
          ($('body').css('overflow', ''))
        )
  });
});
