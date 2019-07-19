if (document.documentElement.clientWidth <= 320) {
 $(".category-list-name").before("<div class='item-box'><div class='item'>Наименование</div></div>");
 $(".category-list-supply").before("<div class='item-box'><div class='item'>Вероятность поставки</div></div>");
 $(".category-list-stock").before("<div class='item-box'><div class='item'>В наличии</div></div>");
 $(".category-list-term").before("<div class='item-box'><div class='item'>Ожидаемый срок</div></div>");
 $(".category-list-price").before("<div class='item-box'><div class='item'>Цена</div></div>");
}

if (document.documentElement.clientWidth <= 320) {
 $(".title-universal-model").before("<div class='item-box__active'><div class='item__active'>Модель</div></div>");
 $(".title-universal-mod").before("<div class='item-box__active'><div class='item__active'>Модификация</div></div>");
 $(".title-universal-data").before("<div class='item-box__active'><div class='item__active'>Дата выпуска</div></div>");
 $(".title-universal-info").before("<div class='item-box__active'><div class='item__active'>Информация</div></div>");
}

/*category active*/
$('.category-item-text-hover').click(function(){
    $(".bosch-category__active").slideDown('slow');
});
/*categgory active*/
    $('.button-close').on("click", function(){
      $('.bosch-category__active').hide()
 });

(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

/*category*/
    $(function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 20000,
        values: [ 0, 8500 ],
        slide: function( event, ui ) {
          $( "#price-min" ).val( ui.values[ 0 ] );
          $( "#price-max" ).val( ui.values[ 1 ] );
        }
      });
      $( "#price-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
      $( "#price-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );

      // Изменение местоположения ползунка при вводиде данных в первый элемент input
      $("input#price-min").change(function(){
        var value1=$("input#price-min").val();
        var value2=$("input#price-max").val();
          if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          $("input#price-min").val(value1);
        }
        $("#slider-range").slider("values",0,value1); 
      });
          
      // Изменение местоположения ползунка при вводиде данных в второй элемент input  
      $("input#price-max").change(function(){
        var value1=$("input#price-min").val();
        var value2=$("input#price-max").val();

        if(parseInt(value1) > parseInt(value2)){
          value2 = value1;
          $("input#price-max").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
      });
    });
/*button LK*/
     $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
          value = value - 1;
        } else {
          value = 0;
        }

        $input.val(value);

      });

      $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
          value = value + 1;
        } else {
          value =100;
        }

        $input.val(value);
      });
/*menu-filters*/
$('.button-img-filters').click(function(){
  if ( document.querySelector('.filters').style.display == "block" ) {
    $(".filters").slideUp('slow');
  } 
  else{
    $(".filters").slideDown('slow');

  }
});
/*footer-mobile-menu*/
    var menuElem = document.getElementById('nav');
    var menuElem2 = document.getElementById('acc');
    var menuElem3 = document.getElementById('buy-menu');
    var menuElem4 = document.getElementById('contact');
    var titleElem = menuElem.querySelector('.menu-mobile-title');
    var titleElem2 = menuElem2.querySelector('.menu-mobile-title');
    var titleElem3 = menuElem3.querySelector('.menu-mobile-title');
    var titleElem4 = menuElem4.querySelector('.menu-mobile-title');
    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };
    titleElem2.onclick = function() {
      menuElem2.classList.toggle('open');
    };
    titleElem3.onclick = function() {
      menuElem3.classList.toggle('open');
    };
    titleElem4.onclick = function() {
      menuElem4.classList.toggle('open');
    };
/*menu-table*/
$('.icon-menu').click(function(){
	if ( document.querySelector('.menu').style.display == "block" ) {
		$(".menu").slideUp('slow');
	} 
	else{
		$(".menu").slideDown('slow');
	}
});
/*menu-table-close*/
    $('.mobile-cancel').on("click", function(){
      $('.menu').hide()
 });
/*menu-data*/
$('.user-account-button-data').click(function(){
  if ( document.querySelector('.user-account-right-my-data').style.display == "block" ) {
    $(".user-account-right-my-data").slideUp('slow');
  } 
  else{
    $(".user-account-right-my-data").slideDown('slow');

  }
});
/*menu-orders*/
$('.user-account-button-ordes').click(function(){
  if ( document.querySelector('.user-account-right-my-orders').style.display == "block" ) {
    $(".user-account-right-my-orders").slideUp('slow');
  } 
  else{
    $(".user-account-right-my-orders").slideDown('slow');
  }
});

/*menu-favorites*/
$('.user-account-button-favorites').click(function(){
  if ( document.querySelector('.user-account-right').style.display == "block" ) {
    $(".user-account-right").slideUp('slow');
  } 
  else{
    $(".user-account-right").slideDown('slow');

  }
});
/*menu*/
$('.nomer-menu-all').click(function(){
  if ( document.querySelector('.user-account-menu-all').style.display == "block" ) {
    $(".user-account-menu-all").slideUp('slow');
  } 
  else{
    $(".user-account-menu-all").slideDown('slow');
  }
});


/*menu-search_vin-code*/
$('.menu-button-search').click(function(){
  if ( document.querySelector('.search').style.display == "block" ) {
    $(".search").slideUp('slow');
  } 
  else{
    $(".search").slideDown('slow');

  }
});

/*swiper*/
var swiper = new Swiper('.banners .swiper-container', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*user*/
$('.icon-user').click(function(){
		$(".popup").slideDown('slow');
});
/*user_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup').hide()
 });
/*vin*/
$('.vin').click(function(){
		$(".popup__vin").slideDown('slow');
});
/*vin_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup__vin').hide()
 });
 /*bid*/
$('.phone').click(function(){
		$(".popup__bid").slideDown('slow');
});
/*bid_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup__bid').hide()
 });
 /*bid-2*/
$('.phone-2').click(function(){
    $(".popup__bid").slideDown('slow');
});
/*bid_close*/
    $('.popup-connect__cross').on("click", function(){
      $('.popup__bid').hide()
 });
/*left-all-contacts*/
$(window).scroll(function() {
  var height = $('header').outerHeight();
    if($(this).scrollTop() >= height){
      $('.all-contacts').addClass('fixed');
  } else{
      $('.all-contacts').removeClass('fixed');
  }
});

