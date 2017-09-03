var slide1 = document.querySelector('#slide1');
var slide2 = document.querySelector('#slide2');
var slide3 = document.querySelector('#slide3');
var slide4 = document.querySelector('#slide4');
var menu = document.querySelector('.menu-container');
var background = document.querySelector('.background');
var content = document.querySelector('.content');
var activeImage = null;
var activeSide = null;
var activeText = null;
slides = [slide1, slide2, slide3, slide4];
setHeightToScreen();
setWidthToScreen();

window.addEventListener('resize', function(e){
	setHeightToScreen();
	setWidthToScreen();

});
	
function setHeightToScreen(){
	var windowHeight = document.documentElement.clientHeight - 3;
	menu.style.height = windowHeight +'px';
	background.style.height = windowHeight +'px';
}
function setWidthToScreen(){
	var windowWidth = document.documentElement.clientWidth;
	background.style.width = windowWidth +'px';
}
console.log(document.documentElement.clientWidth);

slides.forEach(function(slide){
	slide.addEventListener('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation()
		var image = slide.querySelector('img');
		var text = slide.querySelector('.text');
		var smallText = slide.querySelector('.text__sm');
		if(activeSide){
			removeMedia(slide,image, text, smallText, activeSide);
		}
		openSlide(slide, image, text, smallText);
	});
	slide.addEventListener('mouseleave', function(e){
		e.preventDefault();
		e.stopPropagation()
		var image = slide.querySelector('img');
		var text = slide.querySelector('.text');
		var smallText = slide.querySelector('.text__sm');
		removeMedia(slide,image, text, smallText, activeSide);
	});
});

function addMedia(slide, image, text, smallText){
	// slide.style.width = '100%';
	image.classList.remove('hidden');
	image.classList.add('visible');
	// if(image.naturalWidth > image.naturalHeight){
		slide.style.width = "175%";
		image.style.width = image.naturalWidth + 'px';	
	// } else{
	// 	slide.style.height = image.naturalHeight + 'px';
	// }
	// image.style.width = image.naturalWidth+ 'px';
	text.classList.remove('hidden');
	text.classList.add('visible');
	setTimeout(addText(smallText), 900);
	activeImage = image;
	activeSide = slide;
	activeText = text;
	// console.log(document.documentElement.clientHeight);
	// console.log(image.naturalWidth);
}
function addText(smallText){
	smallText.classList.remove('hidden');
	smallText.classList.add('visible');
	smallText.classList.add('bounce');
};
function removeMedia(slide, image, text, smallText){
	slide.style.width = '175%';
	image.classList.remove('visible');
	image.classList.add('hidden');
	text.classList.remove('visible');
	text.classList.add('hidden');
	smallText.classList.remove('visible');
	smallText.classList.add('hidden');
	smallText.classList.remove('bounce');
	activeSide.style.width = '25%';
	activeSide = null;
	activeImage = null;
	activeText = null;
}
function openSlide(slide, image, text, smallText){
	if (activeImage && activeSide) {
		removeMedia(slide, image, text, smallText, activeSide);
	}
	if (activeSide !== slide){
		addMedia(slide, image, text, smallText);
	} else {
		activeSide = null;
		activeImage = null;
		activeText = null;
	}
}

// при нажатии на бургер
// элементам добавляется класс анимации
// меню раскрывается на весь экран

var burger = document.querySelector('.burger');
var sideMenu = document.querySelector('.side-menu');
var navMenu = document.querySelector('.menu');
var burgerLine = document.querySelector('.burger-line');
var burgerLineTop = document.querySelector('.burger-lineTop');
var burgerLineBottom = document.querySelector('.burger-lineBottom');
var sideMenuWidth = document.documentElement.clientWidth - 40;

burger.addEventListener('click', function(e){
	e.preventDefault;
	sideMenu.style.width = sideMenuWidth +'px';
	sideMenu.style.height = document.documentElement.clientHeight +'px';
	sideMenu.classList.add('side-menu_opened');
	burgerLine.classList.add('blA');;
	burgerLineTop.classList.add('bltA');
	burgerLineBottom.classList.add('blbA');
	navMenu.classList.remove('hidden');
	navMenu.classList.add('visible');
});
