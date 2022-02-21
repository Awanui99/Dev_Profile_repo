


var svgws = "http://www.w3.org/2000/svg";
var width = 400;
var height = 400;
var numOfCircles = 200;
  
var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
var golden_angle = phi*2*Math.PI;            // golden angle
var lg_rad = width * .45;

var sm_rad = 6;
var cx = width/2;
var cy = height/2;

for(var i = 1; i <= numOfCircles; ++i) {

    var ratio = i/numOfCircles;
    var angle = i*golden_angle;
    var spiral_rad = ratio * lg_rad;
    var x = cx + Math.cos(angle) * spiral_rad;
    var y = cy + Math.sin(angle) * spiral_rad;
    var circle = document.createElementNS(svgws,'circle');

    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', '2')
    circle.setAttributeNS(null, 'fill', 'black');
    circle.setAttributeNS(null, 'class', 'Circle');
    document.getElementById('spiralSVG').appendChild(circle);
}