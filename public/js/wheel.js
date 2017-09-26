var biases = [];

$.ajax({
  type: "GET",
  url:"./js/readyArray.json",
  dataType: "json",
  success: function(data){
  	biases = data;
  },
  fail: function() {
  	//посмотреть
  }
});

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
$('#header_logo').on('click', function(e){
	e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 1000);
    $('.wheel-content').css({'opacity': '0'})
    $('.result').css({'height': '0'})
    $('body').css({'overflow': 'auto'});
});

$(".button-disease").on("click", function (e) {
    e.preventDefault();
    wheelCont.css({'display': 'flex', 'opacity': '1'});
    var id  = $(this).attr('href');
    var top = $(id).offset().top + 50;
    $('body,html').animate({scrollTop: top}, 1000);
    setTimeout(function(e){
		 $('.push').css({'opacity': '1', 'display': 'block'});
		wheelScreenActive = true;
    },200) 
});
	
function turnOn(){
	wheel.css({'animation': 'rotate 1s infinite linear'});
}; 
$('.push-button').on("click", function(e){
	if(wheelIsActive){
		var yourBiase = Math.floor(Math.random() * biases.length);
		$('#biaseName').html( biases[yourBiase].name);
		$('#biaseDescription').html( biases[yourBiase].description );
		wheel.css({animationPlayState: 'paused'});
		$('.push-button').html('Результат...');
		$('.push-button').css({'pointerEvents': 'none'});
		// $('.result').css({'height': '0', 'display': 'none'});
		$('.result').css({'display': 'block'})
		setTimeout(function(e){
	        $('.result').css({'height': '677px'});
	        var top = $('#resultId').offset().top;
	        console.log(top);
	        $('body,html').animate({scrollTop: top}, 900);
	        $('.push').css({'opacity': '0', 'display': 'none'});
	        // $('body').css({'overflow': 'auto'});
	        $('.push-button').html('Запустить колесо');
	        $('.push-button').css({'pointerEvents': 'all'});
	        $('body').css({'overflow': 'hidden'})
		},600);
		wheelIsActive = false;
	}else{
		e.preventDefault;
    	turnOn();
    	wheelIsActive = true;
    	$('.push-button').html('Остановить колесо');
	}
});

$('.result-button').on('click', function(e){
	$('.push').css({'opacity': '1', 'display': 'block'});
	$('.result').css({'height': '0'});
	setTimeout(function(e){
		$('body').css({'overflow': 'auto'});
		//$('.result').css({'display':'none'});
	},1000)	
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
			form1.style.transform = 'translatey(20%) translatex(25%)';
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
			if(wheelIsActive){
				wheel.css({animation: 'none'});
				$('.push-button').html('Запустить колесо');
				wheelIsActive = false;
			}
		}
	}
});
