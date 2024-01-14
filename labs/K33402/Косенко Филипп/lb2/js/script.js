$(document).ready(function(){
    $('.slider__inner').slick({
      speed:1200,
      adapiveHeight:true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/logo/chevron left solid.png" alt="left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/logo/chevron right solid.png" alt="right"></button>',
      responsive: [
        {
          breakpoint: 700,
          settings: {
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            dots: true
          }
        }],
    });
    
    

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__activ)', function() {
      $(this)
        .addClass('catalog__tab__activ').siblings().removeClass('catalog__tab__activ')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function slideClass(item){
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    slideClass('.catalog-item__link');
    slideClass('.catalog-item__list-back');

    function slideThem(item){
      $(item).each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.advantages').toggleClass('them__nigth');
          $('.slider').toggleClass('them__nigth');
          $('.catalog').toggleClass('them__nigth');
          $('.reviews').toggleClass('them__nigth');

        });
      });
    };

    slideThem('.header__logo')


    $("img.advantages_img").each(function () {
      var $img = $(this);
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      $.get(imgURL, function (data) {
          var $svg = $(data).find("svg");
          if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
              $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
          }
          $img.replaceWith($svg);
      }, "xml");
  });


  $('[data-modal=consultation]').on('click', function(){
    $('.overlay , #consultation').fadeIn();
  });
  
  
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  })
  
  $('.modal__exit').on('click', function(){
    $('.overlay , #consultation, #order, #sencs').fadeOut();
  });

  });


