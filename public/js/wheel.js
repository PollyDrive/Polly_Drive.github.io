
$(document).ready( function(){
	var wheel = $('.wheel-container');
	var wheelItem = document.querySelector('.wheel-item');
	var cLeft = document.querySelector('.content-left');
	var cLeftS = document.querySelector('.content-left2');
	var cRight = document.querySelector('.content-right');
	var cCenter = document.querySelector('.content-center');
	var form1 = document.querySelector('.form1');
	var form2 = document.querySelector('.form2');
	var form3 = document.querySelector('.form3');
	var form4 = document.querySelector('.form4');
	var header = document.querySelector('.header');
	var header_sm = document.querySelector('.header_sm');
	var form1Activated = false;
	var form2Activated = false;
	var form3Activated = false;
	var form4Activated = false;

    $(".button-disease").on("click", function (e) {
        e.preventDefault();
        var wheelCont = $('.wheel-content');
        wheelCont.css({'display': 'flex'});
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.push-button').on("click", function(e){
    	e.preventDefault;
    	appearsAndTurns();
    	// wheel.css({'animation': 'none'});
    	// $('.disease-card').css({'animation': 'opacity 1.5s linear', 'visibility':'visible'});
    	// setTimeout(function(e){
    	// 	$('.more').css({'animation': 'opacity 1s linear','display':'block', 'transform': 'translateY(21%) translateX(26%)'})
    	// }, 4000);
    });

function appearsAndTurns(){
	wheel.css({'animation': 'rotate 1s infinite linear'});
	$('.push-button').on("click", function(e){
		wheel.css({'animation': 'none'});
		var result = $('.result');
        result.css({'display': 'block'});
        var resultId  = $(result).attr('href'),
        top = $(this).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	})
}
	
	window.onscroll = function(){
		var scrolled = window.pageYOffset;
		if(scrolled > 40){
			header.classList.remove('header');
			header.classList.add('header_up');
			$('.scroll-arrow').css({'display': 'none'})
		}
		if(scrolled < 40){
			header.classList.remove('header_up');
			header.classList.add('header');
			setTimeout(function(e){
				$('.scroll-arrow').css({'display': 'flex'})
			},300);
		}
		if(!form1Activated && form1.getBoundingClientRect().top <= 500){
			form1Activated = true;
			cLeft.style.opacity = '1';
			form1.style.opacity = '1';
			cRight.style.opacity = '1';
			form1.style.transform = 'translatey(50%) translatex(15%)';
		}
		if(form1Activated && form1.getBoundingClientRect().top > 200){
			form1Activated = false;
			// cLeft.style.opacity = '0';
			form1.style.transform = 'translatey(50%) translatex(-30%)';
			form1.style.opacity = '0';
			cRight.style.opacity = '0';
			
		}
		if(!form2Activated && form2.getBoundingClientRect().top < 300){
			form2Activated = true;
			form2.style.opacity = '1';
			form2.style.transform = 'translatey(35%) translatex(0%) ';
			cLeftS.style.opacity = '1';
		}
		if(form2Activated && form2.getBoundingClientRect().top > 200){
			form2Activated = false;
			form2.style.opacity = '0';
			form2.style.transform = 'translatey(30%) translatex(20%)';
			cLeftS.style.opacity = '0';
		}
		if(!form3Activated && form3.getBoundingClientRect().top < 100){
			form3Activated = true;
			form3.style.opacity = '1';
			form3.style.transform = 'translatex(15%) translatey(5%)';
			cCenter.style.opacity = '1';
		}
		if(form3Activated && form3.getBoundingClientRect().top > 300){
			form3Activated = false;
			form3.style.opacity = '0';
			form3.style.transform = 'translatey(0%) translatex(-70%)';
			cCenter.style.opacity = '0';
		}
		if(!form4Activated && form4.getBoundingClientRect().top < 300){
			form4Activated = true;
			form4.style.opacity = '1';
			form4.style.transform = 'translatey(15%)';
		}
		if(form4Activated && form4.getBoundingClientRect().top > 300){
			form4Activated = false;
			form4.style.opacity = '0';
			form4.style.transform = 'translatey(35%)';
		}
	}
});
