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




