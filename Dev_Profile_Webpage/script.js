
const svgns = "http://www.w3.org/2000/svg";
const SVG = document.querySelector('#spiralSVG');

const circle = document.createElementNS(svgns, 'circle');
circle.setAttributeNS(null, 'cx', '0');
circle.setAttributeNS(null, 'cy', '0');
circle.setAttribute('r', '1');

const circleCenter = document.createElementNS(svgns, 'circle');
circleCenter.setAttributeNS(null, 'cx', '0');
circleCenter.setAttributeNS(null, 'cy', '0');
circleCenter.setAttributeNS(null, 'r', '5');
circleCenter.setAttribute('fill', 'none');

var linearGradient = document.createElementNS(svgns, 'LinearGradient');
linearGradient.setAttribute("id", 'fade')
var stopBlack = document.createElementNS(svgns, 'stop');
stopBlack.setAttribute("offset", '0%');
stopBlack.setAttribute("stop-color", 'black');
var stopWhite = document.createElementNS(svgns, 'stop');
stopWhite.setAttribute("offset", '90%');
stopWhite.setAttribute("stop-color", 'white');

linearGradient.appendChild(stopBlack);
linearGradient.appendChild(stopWhite);


// var animationOutX = document.createElementNS(svgns, 'animate');
// animationOutX.setAttribute("id","myAnimationX"); 
// animationOutX.setAttribute("attributeType","XML"); 
// animationOutX.setAttribute("attributeName","cx"); 
// animationOutX.setAttributeNS(null,"values","0;100;0");
// animationOutX.setAttribute("begin","0s");
// animationOutX.setAttribute("dur","2s"); 
// animationOutX.setAttribute("repeatCount","indefinite");
// animationOutX.setAttribute("class","animationX");

var animationOutY = document.createElementNS(svgns, 'animate');
animationOutY.setAttribute("attributeType","XML"); 
animationOutY.setAttribute("attributeName","r"); 
animationOutY.setAttributeNS(null,"values","2;3");
animationOutY.setAttribute("begin","0s");
animationOutY.setAttribute("dur","2s"); 
animationOutY.setAttribute("repeatCount","indefinite");

//Rotate on orbit
var animateMotion = document.createElementNS(svgns, 'animate'); 
animateMotion.setAttribute("attributeType","XML"); 
animateMotion.setAttribute("attributeName","cy");
animateMotion.setAttributeNS(null,"values","0;100;0");
animateMotion.setAttribute("calcMode","spline"); 
animateMotion.setAttribute("dur","2s"); 
animateMotion.setAttribute("repeatCount","indefinite");
animateMotion.setAttribute("keyTimes","0; 0.5; 1");
animateMotion.setAttribute("keySplines","0.5 0 0.5 1; 0.5 0 0.5 1");

var gTranslate = document.createElementNS(svgns, 'g');
// gTranslate.setAttribute('transform', 'translate(100, 0)');

var g = document.createElementNS(svgns, 'g');

var gRotate = document.createElementNS(svgns, 'g');

var animationRotate = document.createElementNS(svgns, 'animateTransform'); 
animationRotate.setAttribute("id","myAnimationY"); 
animationRotate.setAttribute("attributeType","XML"); 
animationRotate.setAttribute("attributeName","transform");
animationRotate.setAttribute('type', 'rotate')
animationRotate.setAttributeNS(null,"values","0;360");
animationRotate.setAttribute("begin","0s");
animationRotate.setAttribute("dur","8s"); 
animationRotate.setAttribute("repeatCount","indefinite");

// circle.appendChild(animationOutX);
// circle.appendChild(animationOutY);
circle.appendChild(animateMotion);
circle.appendChild(animationOutY)
gTranslate.appendChild(circle);
g.appendChild(animationRotate);
g.appendChild(gTranslate);
SVG.appendChild(circleCenter);
SVG.appendChild(g);

SVG.addEventListener('mouseover', () => {
    SVG.pauseAnimations();
});

SVG.addEventListener('mouseleave', () => {
    SVG.unpauseAnimations();
});