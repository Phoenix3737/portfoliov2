window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

var hotbod = document.querySelector("body");

function doStuff() {
	hotbod.className += " animate";
}

window.onload = function () {
	doStuff();
};