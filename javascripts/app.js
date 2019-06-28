//loader behaviour
window.addEventListener("DOMContentLoaded", function(){
	var loader = document.querySelector(".loader");
	loader.classList.add("fadeOut");
	setTimeout(
		function(){
		loader.style.display = "none";
	}, 100);
});

// To change color of navbar
function changeNavColor() {
	var topbar = document.querySelector(".topbar");
	if (window.scrollY > 100) {
		topbar.style.backgroundColor = "rgba(252, 252, 252, 0.95)";
	}
	else {
		topbar.style.backgroundColor = "transparent";
	}
}
window.addEventListener("scroll", changeNavColor, false);

// appearance of drop down menu responsive
var flag = 0;
function dropDownMenuControl() {
	var dropDown = document.querySelector(".dropdown");
	if (flag == 0){
		dropDown.style.display = "flex";
		dropDown.classList.remove("bounceOutUp");
		dropDown.classList.add("bounceInDown");
		flag = 1;
	}
	else{
		dropDown.classList.remove("bounceInDown");
		dropDown.classList.add("bounceOutUp");
		setTimeout(
			function(){
			dropDown.style.display = "none";
		}, 1000);
		flag = 0;
	}
}

function gotoTopShoworHide(){
	var gotoTopButton = document.querySelector(".gotoTopButton");
	if (window.scrollY < 500){
		gotoTopButton.style.display = "none";
	}
	else{
		gotoTopButton.style.display = "flex";
	}
}
window.addEventListener("scroll", gotoTopShoworHide, false);

function gotoTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

var gotoTopButton = document.querySelector(".gotoTopButton");
gotoTopButton.addEventListener("click", gotoTop, false);