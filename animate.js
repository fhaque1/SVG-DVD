var c = document.getElementById("svgarea");
var ns = "http://www.w3.org/2000/svg"

var rid = 0;
var height = svgarea.getAttribute("height");
var width = svgarea.getAttribute("width");
var small = Math.min(height, width);
var speed = 1;

var animateDot = function(e) {
	c.innerHTML = "";
	var x = 0;
	var dir = speed;
	window.cancelAnimationFrame(rid);
	var circle = document.createElementNS(ns, "circle");
	circle.setAttributeNS(null, "cx", width/2);
	circle.setAttributeNS(null, "cy", height/2);
	circle.setAttributeNS(null, "fill", "blue");
	circle.setAttributeNS(null, "r",  x);
	c.appendChild(circle);
	var dot = function(e) {
		console.log(rid);	
		circle.setAttribute("r",  x);	
		x += dir;
		if (x > small/2 || x <= 0){
			dir *= -1;		
		}
		rid = window.requestAnimationFrame(dot);
	};
	dot();
};

var animateDVD = function(e) {
	c.innerHTML = "";
	var recx = 150;
	var recy = 75;
	var x = Math.random()*(width-recx);
	var y = Math.random()*(height-recy);;
	var dx = speed;
	var dy = speed;
	window.cancelAnimationFrame(rid);
	var rect = document.createElementNS(ns, "rect");
	rect.setAttributeNS(null, "width", recx);
	rect.setAttributeNS(null, "height",recy);
	rect.setAttributeNS(null, "fill", "blue");
	rect.setAttributeNS(null, "x", x);
	rect.setAttributeNS(null, "y", y);
	c.appendChild(rect);
	var dvd = function(e) {
		console.log(rid);
		rect.setAttribute("x",x);
		rect.setAttribute("y",y);
		x += dx;
		y += dy;
		if(x <= 0 || x >= width-recx){
			dx *= -1;
		}
		if(y <= 0 || y >= height-recy){
			dy *= -1;
		}
		rid = window.requestAnimationFrame(dvd);
	};
	dvd();
};

var stopIt = function(e) {
	window.cancelAnimationFrame(rid);
};

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', animateDVD);

var sb = document.getElementById('sb');
sb.addEventListener('click', stopIt);

var circ = document.getElementById('circle');
circ.addEventListener('click', animateDot);