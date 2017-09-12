
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
    		$('.more').css({'animation': 'opacity 1s linear','display':'block', 'transform': 'translateY(-35%) translateX(217%)'})
    	}, 4000);
    });

function appearsAndTurns(){
	wheel.css({'animation': 'rotate 1s infinite linear'});
}
	
	window.onscroll = function(){
		var scrolled = window.pageYOffset;
		if(scrolled > header.getBoundingClientRect().bottom){
			header.classList.remove('header');
			header.classList.add('header_up');
		}
		if(scrolled < header.getBoundingClientRect().bottom){
			header.classList.remove('header_up');
			header.classList.add('header');
		}
		if(scrolled > header.getBoundingClientRect().bottom + 100){
			cLeft.style.visibility = 'visible';
			form1.style.display = 'block';
			cRight.style.visibility = 'visible';
			form1.style.animation = 'left 2.5s ease';
		}
		if(scrolled > cLeft.getBoundingClientRect().bottom){
			form2.style.display = 'block';
			form2.style.animation = 'right 2.5s ease';
			form2.style.transition = 'all 0.5s ease';
			cLeftS.style.visibility = 'visible';
		}
		if(scrolled > cLeftS.getBoundingClientRect().bottom +50){
			form3.style.display = 'block';
			form3.style.animation = 'left 2.5s ease';
			cCenter.style.visibility = 'visible';
		}
		if(scrolled > cCenter.getBoundingClientRect().bottom){
			form4.style.display = 'block';
			form4.style.animation = 'fromBottom 3.5s ease';
		}
	}
});
