var tugma = document.querySelector('#myBtn');

window.onscroll = function () { showButton() };


//  Function #1

function showButton() {
	if (document.body.scrollTop > 1500|
		document.documentElement.scrollTop > 1500) {
		tugma.style.display = "block";
		// tugma.style.fontSize = "40px";
	} else {
		tugma.style.display = "none";
	}
}

//  Function #2

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

