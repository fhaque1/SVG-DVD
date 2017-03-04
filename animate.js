var c = document.getElementById("svgarea");
var ns = "http://www.w3.org/2000/svg"

var rid = 0;
var height = svgarea.getAttribute("height");
var width = svgarea.getAttribute("width");
var small = Math.min(height, width);

var animateDot = function(e) {
	var x = 0;
	window.cancelAnimationFrame(rid);
	var circle = document.createElementNS(ns, "circle");
	circle.setAttributeNS(null, "cx", width/2);
	circle.setAttributeNS(null, "cy", height/2);
	circle.setAttributeNS(null, "fill", "blue");
	var dir = 1;
	var growDot = function(e) {
		c.innerHTML = "";
		console.log(rid);	
		circle.setAttributeNS(null, "r",  x);
		c.appendChild(circle);
		x += dir;
		if (x > small/2 || x <= 0){
			dir *= -1;		
		}
		rid = window.requestAnimationFrame(growDot);
	};
	growDot();
};

var stopIt = function(e) {
	window.cancelAnimationFrame(rid);
};


var dvd = document.getElementById('dvd');
//dvd.addEventListener('click', animateDVD);

var sb = document.getElementById('sb');
sb.addEventListener('click', stopIt);

var circ = document.getElementById('circle');
circ.addEventListener('click', animateDot);
