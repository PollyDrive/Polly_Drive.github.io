
$(document).ready( function(){
	var wheel = $('.wheel');
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
	var wheelCont = $('.wheel-content');
	var headerCont = $('.header-container');
	var wheelScreenActive = false;
	wheelIsActive = false;
	setHeightToScreen(headerCont);
	setWidthToScreen(headerCont);

function setHeightToScreen(elem){
	var windowHeight = document.documentElement.clientHeight;
	elem.css({height: windowHeight});
}
function setWidthToScreen(elem){
	var windowWidth = document.documentElement.clientWidth;
	elem.css({width: windowWidth});
}

$(".button-disease").on("click", function (e) {
    e.preventDefault();
    wheelCont.css({'display': 'flex', 'opacity': '1'});
    var id  = $(this).attr('href'),
    top = $(id).offset().top + 50;
    $('body,html').animate({scrollTop: top}, 1000);
    setTimeout(function(e){
		 $('.push').css({'opacity': '1', 'display': 'block'});
		wheelScreenActive = true;
    },200) 
});
	
function turnOn(){
	wheel.css({'animation': 'rotate 1s infinite linear'});
	return
}; 
$('.push-button').on("click", function(e){
	if(wheelIsActive){
		wheel.css({animationPlayState: 'paused'});
		setTimeout(function(e){
	        $('.result').css({'display': 'block', 'height': '677px'});
	        var resultId  = $(result).attr('href'),
	        top = $('#result').offset().top + 300;
	        $('body,html').animate({scrollTop: top}, 1000);
	        // $('.push-button').css({'bottom':'15%'});
	        $('.push').css({'opacity': '0', 'display': 'none'});
		},1000);
		wheelIsActive = false;
	}else{
		e.preventDefault;
    	turnOn();
    	wheelIsActive = true;
	}
});
		
    



$('.result-button').on('click', function(e){
	$('.result').css({'height': '0'});
	setTimeout(function(){
		$('.push').css({'opacity': '1', 'display': 'block'});
	},400)
	
});
	
	window.onscroll = function(){
		var scrolled = window.pageYOffset;
		if(scrolled > 30){
			$('.scroll-arrow').css({'display': 'none'})
			header.classList.remove('header');
			header.classList.add('header_up');
			cLeft.style.opacity = '1';
			
		}
		if(scrolled < 30){
			header.classList.remove('header_up');
			header.classList.add('header');
			// setTimeout(function(e){
				$('.scroll-arrow').css({'display': 'flex'})
			// },300);
		}
		if(!form1Activated && form1.getBoundingClientRect().top <= 400){
			form1Activated = true;
			form1.style.opacity = '1';
			cRight.style.opacity = '1';
			form1.style.transform = 'translatey(20%) translatex(15%)';
		}
		if(form1Activated && form1.getBoundingClientRect().top > 200){
			form1Activated = false;
			// cLeft.style.opacity = '0';
			form1.style.transform = 'translatey(0) translatex(-50%)';
			form1.style.opacity = '0';

			
		}
		if(!form2Activated && form2.getBoundingClientRect().top < 400){
			form2Activated = true;
			form2.style.opacity = '1';
			form2.style.transform = 'translatey(25%) translatex(0%) ';
			cLeftS.style.opacity = '1';
		}
		if(form2Activated && form2.getBoundingClientRect().top > 200){
			form2Activated = false;
			form2.style.opacity = '0';
			form2.style.transform = 'translatey(5%) translatex(15%)';

		}
		if(!form3Activated && form3.getBoundingClientRect().top < 550){
			form3Activated = true;
			form3.style.opacity = '1';
			form3.style.transform = 'translatex(15%) translatey(5%)';
			cCenter.style.opacity = '1';
		}
		if(form3Activated && form3.getBoundingClientRect().top > 200){
			form3Activated = false;
			form3.style.opacity = '0';
			form3.style.transform = 'translatex(-70%) translatey(5%) ';

		}
		if(!form4Activated && form4.getBoundingClientRect().top < 285){
			form4Activated = true;
			form4.style.opacity = '1';
			form4.style.transform = 'translatey(15%)';
			cCenter.style.opacity = '1';
		}
		if(form4Activated && form4.getBoundingClientRect().top > 300){
			form4Activated = false;
			form4.style.opacity = '0';
			form4.style.transform = 'translatey(35%)';
			wheelCont.css({'display': 'none', 'opacity': '0'});
			 $('.push').css({'opacity': '0', 'display': 'none'});
		}
		// if(wheelScreenActive && scrolled >= 2190){
		// 	console.log(form4.getBoundingClientRect().bottom);
		// 	wheelCont.css({'zIndex': '-1'});
		// }
		// if(wheelScreenActive && scrolled <= 2190){
		// 	wheelCont.css({'zIndex': '1'});
		// 	console.log(form4.getBoundingClientRect().bottom);
		// 	wheelScreenActive = false;
		// }
	}
});
