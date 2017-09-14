
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
        setTimeout(appearsAndTurns, 1800);
    });

    $('.wheel-content').on("click", function(e){
    	e.preventDefault;
    	wheel.css({'animation': 'none'});
    	$('.disease-card').css({'animation': 'opacity 1.5s linear', 'visibility':'visible', 'transform': 'translatey(125%) translatex(15%)'});
    	setTimeout(function(e){
    		$('.more').css({'animation': 'opacity 1s linear','display':'block', 'transform': 'translateY(21%) translateX(26%)'})
    	}, 4000);
    });

// function appearsAndTurns(){
// 	wheel.css({'animation': 'rotate 1s infinite linear'});
// }
	
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
				$('.scroll-arrow').css({'display': 'flex'});
			},600);
			
		}
		if(!form1Activated && form1.getBoundingClientRect().top < 200){
			form1Activated = true;
			cLeft.style.visibility = 'visible';
			form1.style.opacity = '1';
			cRight.style.visibility = 'visible';
			form1.style.transform = 'translatey(5%) translatex(15%)';
		}
		if(form1Activated && form1.getBoundingClientRect().top > 200){
			form1Activated = false;
			cLeft.style.visibility = 'hidden';
			form1.style.opacity = '0';
			cRight.style.visibility = 'hidden';
			form1.style.transform = 'translatey(0%) translatex(-70%)';
		}
		if(!form2Activated && form2.getBoundingClientRect().top < 200){
			form2Activated = true;
			form2.style.opacity = '1';
			form2.style.transform = 'translatey(0%) translatex(0%) ';
			cLeftS.style.visibility = 'visible';
		}
		if(form2Activated && form2.getBoundingClientRect().top > 200){
			form2Activated = false;
			form2.style.opacity = '0';
			form2.style.transform = 'translatey(20%) translatex(50%)';
			cLeftS.style.visibility = 'visible';
		}
		if(!form3Activated && form3.getBoundingClientRect().top < 200){
			form3Activated = true;
			form3.style.opacity = '1';
			form2.style.transform = 'translatex(15%) translatey(5%)';
			cCenter.style.visibility = 'visible';
		}
		if(form3Activated && form3.getBoundingClientRect().top > 200){
			form3Activated = true;
			form3.style.opacity = '0';
			form3.style.transform = 'translatey(0%) translatex(-70%)';
			cCenter.style.visibility = 'visible';
		}
		if(scrolled > cCenter.getBoundingClientRect().bottom+280){
			form4.style.opacity = '1';
			form4.style.animation = 'fromBottom 3.5s ease';
		}
	}
		console.log(cLeft.getBoundingClientRect().top);
		console.log(form1.getBoundingClientRect().top);
		console.log(pageYOffset);
		console.log(pageXOffset);
		console.log(cLeftS.getBoundingClientRect().bottom);
		console.log(cCenter.getBoundingClientRect().bottom);
});
