// Вывод анимации блока цены
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.8]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.price-text');

for (let elm of elements) {
	observer.observe(elm);
}


function openImageWindow(src) {
	var image = new Image();
	image.src = src;
	var width = image.width;
	var height = image.height;
	window.open(src, "Image", "width=" + width + ",height=" + height);
}

// Кнопка заказа звонка

 let input = document.querySelector('.form-input');
 const button = document.querySelector('.button-fone');
 const forma = document.querySelector('.formaback');

 $('.telButton.anim').css({'position':'absolute','top':'-100px','right':'50px','transition': "top 0.9s cubic-bezier(.65, 1.95, .03, .32) 0.5s"});	
	telButtonReturn();
	
	$(window).scroll(function() {
		telButtonReturn();
	});
	
	$(window).resize(function() {		
		telButtonReturn();	
	});
	
	function telButtonReturn() {
		var wHeight = getWindowHeight();	
		var sHeight = $(window).scrollTop();		
		var result = wHeight + sHeight - 100;	
		$('.telButton.anim').css({'position':'absolute','top' : result + 'px','right':'50px'});
	}
	
	function getWindowHeight() {	
		var windowHeight;
		windowHeight = $(window).height();
		return windowHeight;
	}


	
$('.telButton .telButton_background').hover(
	function() {
		var v = $('.telButton_hover');
		if(!v.hasClass('fHovered')) {
			v.stop().css('display','block').animate({'opacity':1},1000).addClass('fHovered');
		}
	},
	function () {
		var v = $('.telButton_hover');
		if(v.hasClass('fHovered')) {
			v.stop().animate({'opacity':0},1000,function() {
				$(this).css('display','none');
			}).removeClass('fHovered');
		}
	}
	
);
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
$('.telButton .telButton_background').hover(
	function() {
		var v = $('.telButton_hover');
		if(!v.hasClass('fHovered')) {
			v.stop().css('display','block').animate({'opacity':1},1000).addClass('fHovered');
		}
	},
	function () {
		var v = $('.telButton_hover');
		if(v.hasClass('fHovered')) {
			v.stop().animate({'opacity':0},1000,function() {
				$(this).css('display','none');
			}).removeClass('fHovered');
		}
	}
	
);

