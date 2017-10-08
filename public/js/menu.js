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
var activeSmallText = null;
var slides = [slide1, slide2, slide3, slide4];
setHeightToScreen();
setWidthToScreen();
var article = document.querySelector('.article')

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

slides.forEach(function(slide){
	var image = slide.querySelector('img');
	var text = slide.querySelector('.text');
	var smallText = slide.querySelector('.text__sm');
	var slideName = slide.querySelector('.slide-name');
	slide.addEventListener('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation();
		openSlide(slide, image, text, smallText);
	});
	slide.addEventListener('mouseleave', function(e){
		e.preventDefault();
		e.stopPropagation();
		removeMedia();
	});
	slideName.addEventListener('click', function(e){
		e.preventDefault();
		// removeMedia();
		// hideSlidesAndAddArticle();
		console.log(menu);
	})
});

setTimeout(function(){
	var opened = new Event('mouseenter');
	slide2.dispatchEvent(opened);
}, 300);

function hideSlidesAndAddArticle(){
	// activeImage.classList.remove('visible');
	// activeImage.classList.add('hidden');
	// activeText.classList.remove('visible');
	// activeText.classList.add('hidden');
	// activeSmallText.classList.remove('visible');
	// activeSmallText.classList.add('hidden');
	// activeSmallText.classList.remove('bounce');
	// menu.style.width = '8%';
	// menu.style.transition= 'all 0.8s ease-in-out';
	// article.style.visibility = 'visible';
	// article.style.animation = 'bottomToTop 1.5s linear';
	// background.classList.add('side-menu__background');
	// quoteText.classList.add('hidden');
	// // activeImage.style.width = '125%';
	// activeText.style.top = '10%';
	// activeSide.classList.add('active');
	// activeText.classList.add('hidden');
}

function addMedia(slide, image, text, smallText){
	image.classList.remove('hidden');
	image.classList.add('visible');
	slide.style.width = menu.offsetWidth * 1.1 + 'px';
	image.style.width = image.naturalWidth + 'px';
	text.classList.remove('hidden');
	text.classList.add('visible');
	setTimeout(addText(smallText), 900)
	activeImage = image;
	activeSide = slide;
	activeText = text;
	activeSmallText = smallText;
}
function addText(smallText){
	smallText.classList.remove('hidden');
	smallText.classList.add('visible');
	smallText.classList.add('bounce');
}

function removeMedia(){
	activeImage.classList.remove('visible');
	activeImage.classList.add('hidden');
	activeText.classList.remove('visible');
	activeText.classList.add('hidden');
	activeSmallText.classList.remove('visible');
	activeSmallText.classList.add('hidden');
	activeSmallText.classList.remove('bounce');
	activeSide.style.width = '25%';
	activeSide = null;
	activeImage = null;
	activeText = null;
	activeSmallText = null;
}
function openSlide(slide, image, text, smallText){
	var theSame = activeSide === slide
	if (!theSame && activeSide) {
		removeMedia();
	}
	if (!theSame) {
		addMedia(slide, image, text, smallText);
	}
}

// при нажатии на бургер
// элементам добавляется класс анимации
// меню раскрывается на весь экран

var burger = document.querySelector('.burger');
var arrow = document.querySelector('.arrow');
var sideMenu = document.querySelector('.side-menu');
var sideMenuClosed = document.querySelector('.side-menu_closed');
var sideMenuClosedWidth = sideMenuClosed.offsetWidth;
var sideMenuClosedHeight = sideMenuClosed.offsetHeight;
var navMenu = document.querySelector('.menu-list');
var burgerLine = document.querySelector('.burger-line');
var burgerLineTop = document.querySelector('.burger-lineTop');
var burgerLineBottom = document.querySelector('.burger-lineBottom');
var sideMenuOpenedWidth = menu.offsetWidth/2 + sideMenu.offsetWidth;
var quoteText = document.querySelector('.emptyspaceTextBottom');

burger.addEventListener('click', openSideMenu)

function openSideMenu(e){
	var closed = new Event('mouseleave');
	e.preventDefault;
	sideMenu.classList.remove('side-menu_closed');
	sideMenu.classList.add('side-menu_opened');
	background.classList.add('side-menu__background');
	background.style.width = document.documentElement.clientWidth +'px';
	sideMenu.style.width = sideMenuOpenedWidth +'px';
	sideMenu.style.height = document.documentElement.clientHeight +'px';
	slide2.dispatchEvent(closed);
	burgerLine.classList.add('blA');
	burgerLineTop.classList.add('bltA');
	burgerLineBottom.classList.add('blbA');
	navMenu.classList.remove('hidden');
	navMenu.classList.add('visible');
	article.style.visibility = 'hidden';
	burger.removeEventListener('click', openSideMenu)
	burger.addEventListener('click', closeSideMenu)

}

function closeSideMenu(e){
	e.preventDefault;
	sideMenu.classList.remove('side-menu_opened');
	sideMenu.classList.add('side-menu_closed');
	sideMenu.style.width = sideMenuClosedWidth + 'px';
	sideMenu.style.height = sideMenuClosedHeight + 'px';
	background.classList.remove('side-menu__background');
	navMenu.classList.add('hidden');
	navMenu.classList.remove('visible');
	burgerLine.classList.remove('blA');
	burgerLineTop.classList.remove('bltA');
	burgerLineBottom.classList.remove('blbA');
	burger.removeEventListener('click', closeSideMenu)
	burger.addEventListener('click', openSideMenu)
}

/*при нажатии на имя статьи 
активный слайд развигается на всю ширину
неактивные слайды дизейблятся
текст поднимается наверх
слайд меняет высоту до середины экрана?
rotatex90deg

добавляется*/


