var c = document.getElementById("svgarea");
var ns = "http://www.w3.org/2000/svg"

var rid = 0;
var height = svgarea.getAttribute("height");
var width = svgarea.getAttribute("width");

var animateDot = function(e) {
	var x = 0;
	window.cancelAnimationFrame(rid);
	var circle = document.createElementNS(ns, "circle");
	circle.setAttributeNS(null, "cx", height/2);
	circle.setAttributeNS(null, "cy", height/2);
	circle.setAttributeNS(null, "fill", "red");
	var growDot = function(e) {
		c.innerHTML = "";
		console.log(rid);	
		circle.setAttributeNS(null, "r",  x);
		c.appendChild(circle);
		x++;
		if (x > height/2){
			return shrinkDot();		
		}
		rid = window.requestAnimationFrame(growDot);
	};
	var shrinkDot = function(e) {
		c.innerHTML = "";
		console.log(rid);	
		circle.setAttributeNS(null, "r",  x);
		c.appendChild(circle);
		x--;
		if (x <= 0){
			return growDot();		
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
