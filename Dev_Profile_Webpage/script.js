

var svgws = "http://www.w3.org/2000/svg";
const SVG = document.querySelector('#spiralSVG');
var width = 400;
var height = 400;
var numOfCircles = 300;
  
var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
var golden_angle = phi*2*Math.PI;            // golden angle
var lg_rad = width * .45;

var circleRad = '2';
var cx = 0;
var cy = 0;

for(var i = 1; i <= numOfCircles; ++i) {
    var ratio = i/numOfCircles;
    var angle = i*golden_angle;
    var spiral_rad = ratio * lg_rad;
    var x = cx + Math.cos(angle) * spiral_rad;
    var y = cy + Math.sin(angle) * spiral_rad;
    var animRadX;
    var animRadY;

    let animationDelay = i / 100;
    let animationDuration = 0.5;

    var animationOut = document.createElementNS(svgws,'animateTransform');
    var animationRotateInPlace = document.createElementNS(svgws,'animateTransform')
    var animationOrbit = document.createElementNS(svgws, 'animateTransform')
    var g = document.createElementNS(svgws,'g');
    var gTransform = document.createElementNS(svgws,'g');
    var circle = document.createElementNS(svgws,'circle');

    //Rotate in place animation
    animationRotateInPlace.setAttributeNS(null, 'attributeName', 'transform');
    animationRotateInPlace.setAttributeNS(null, 'type', 'rotate');
    animationRotateInPlace.setAttributeNS(null, 'from', '360');
    animationRotateInPlace.setAttributeNS(null, 'to', '0');
    animationRotateInPlace.setAttributeNS(null, 'dur', '5s');
    animationRotateInPlace.setAttributeNS(null, 'repeatCount', 'indefinite');

    //Orbit rotate
    animationOrbit.setAttributeNS(null, 'attributeName', 'transform');
    animationOrbit.setAttributeNS(null, 'type', 'rotate');
    animationOrbit.setAttributeNS(null, 'from', '0');
    animationOrbit.setAttributeNS(null, 'to', '360');
    animationOrbit.setAttributeNS(null, 'dur', '1s');
    animationOrbit.setAttributeNS(null, 'repeatCount', 'indefinite');
    
    //Creating the animation
    animationOut.setAttributeNS(null, 'attributeName', 'transform');
    animationOut.setAttributeNS(null, 'type', 'translate');
    animationOut.setAttributeNS(null, 'from', `${cx} ${cy}`);
    animationOut.setAttributeNS(null, 'to', `${x} ${y}`);
    animationOut.setAttributeNS(null, 'begin', `${animationDelay}s`);
    animationOut.setAttributeNS(null, 'dur', `${animationDuration}s`);
    animationOut.setAttributeNS(null, 'repeatCount', '1');
    animationOut.setAttributeNS(null, 'fill', 'freeze');

    //Creating <g> gTransform
    gtransform.setAttributeNS(null, 'transform', ``)

    //Placing the circles
    circle.setAttributeNS(null, 'cx', cx);
    circle.setAttributeNS(null, 'cy', cy);
    circle.setAttributeNS(null, 'r', circleRad);
    circle.setAttributeNS(null, 'fill', 'black');
    circle.setAttributeNS(null, 'class', 'Circle');

    gTransform.appendChild()
    g.appendChild(animationRotateInPlace);
    g.appendChild(gTransform)

    // g.appendChild()
    circle.appendChild(animationOut);
    SVG.appendChild(circle);
}