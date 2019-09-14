$(function() {
	var o = $('.lang-menu');
	e = $('#search');
    var swiper_one = new Swiper(".box-shadow-home", {
        loop: !0,
		loop: false,
        spaceBetween: 30,
		centeredSlides: !0,
        autoplay: {
            delay: 5600,
            disableOnInteraction: !1
        },
    });

     var swiper_two = new Swiper('.sliter-2', {
        slidesPerView: 4,
        slidesPerGroup: 1,
		autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination-product',
            clickable: true,
            preventClicksPropagation: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });
	
	var swiper_two = new Swiper('.slider-block-product .swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.pagination-block',
            clickable: true,
            preventClicksPropagation: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });

    $('a[href="#search"]').on("click", function(e) {
        e.preventDefault(), $("#search").addClass("open"), $('#search > form > input[type="search"]').focus()
    });
    $("#search, #search button.close").on("click keyup", function(e) {
        e.target != this && "close" != e.target.className && 27 != e.keyCode || $(this).removeClass("open")
    });
    $("form").submit(function(e) {
        return e.preventDefault(), !1
    });
	jQuery('.prev').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 1) {
			number = a - 1;
		} else {
			number = 1;
		}
		show_number.text(number);

	});

	jQuery('.next').on('click', function (e) {
		e.stopImmediatePropagation();
		var btn_group_parent = $(this).closest('.btn-group');
		var number = 0;
		var show_number = btn_group_parent.find('.show-number');
		var a = show_number.text();
		a = parseInt(a);
		if (a > 0) {
			number = a + 1;
		}
		show_number.text(number);
	});

	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	};

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	};

	$('.lang-toggle').on('click', function() {
		o.toggleClass('lang-menu-active');
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".lang-toggle").length) {
		  o.removeClass( "lang-menu-active" );
		}
		e.stopPropagation();
	});
	$('.categoti-menu-btn').click(function(){
		if ($('.categoti-menu').css('display') == 'none')
		{
			$('.categoti-menu').css('display','block');
		} else { $('.categoti-menu').removeAttr("style"); }
	})

	$( window ).resize(function(){
	    var width = $( window ).width();
	    if(width >= 1190) {
			$('.categoti-menu').removeAttr("style");
		}
	});
	
	function height_match(target){
        var big_height = 0;

        $(target).each(function(){
            if(big_height < $(this).height()){
                big_height = $(this).height();
            }
        })      

        $(target).css('height', big_height);
    }

    height_match('.productimg');
	
});