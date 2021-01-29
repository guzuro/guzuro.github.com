$(document).ready(function () {
   $('.team__image').on("click", function () {
      $('.team__image').removeClass('team__image_active').eq($(this).index()).addClass('team__image_active')

      $('.team__block').removeClass('team__block_active').eq($(this).index()).addClass('team__block_active')
   })


   $('.carousel').carousel({
      interval: 5000000
    })
    
});

