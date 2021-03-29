$(document).ready(function(){
	$('.dropdown-menu').click(function(e){
		e.stopPropagation();
	});

	$('.gt-subcategories-back').click(function(){
		$(this).removeClass('active');
		$(this).parent().find('li.active').removeClass('active');
	});

	$('.gt-categories .btn-category').click(function(){
		$(this).siblings('.dropdown-menu').find('li.active').removeClass('active');
	});

	// if($(window).width() < 768){
	// }
	$('.gt-categories .dropdown-menu li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.gt-subcategories-back').addClass('active');
	});


	$(".toHirefadeList").each(function(){
    	var listItems = $(this).children('.thfadeItem'),
    		listLen = listItems.length,
    		i = 0,

    		changeList = function () {
	            listItems.eq(i).fadeOut(300, function () {
	                i += 1;
	                if (i === listLen) {
	                    i = 0;
	                }
	                listItems.eq(i).fadeIn(300);
	            });
	        };
	        listItems.not(':first').hide();
	        setInterval(changeList, 5000);
    });

    // $('.topHires-list').delay(500).addClass('transAct');
    $('.topHires-list').delay(1000).addClass('scaleAct');


    if($('.owl-services').length > 0){
		$('.owl-services').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    dots: false,
		    navText: ['<img src="images/owl-arrow-left.svg" alt="icon" />', '<img src="images/owl-arrow-right.svg" alt="icon" />'],
		    responsive:{
		        0:{
		            items:1
		        },
		        460:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        1100:{
		            items:4
		        }
		    }
		})
	}
});