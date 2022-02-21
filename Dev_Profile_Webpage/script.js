

//Loop Timer

const forLoopTimer = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var i;

var svgws = "http://www.w3.org/2000/svg";
var width = 400;
var height = 400;
var numOfCircles = 300;
  
var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
var golden_angle = phi*2*Math.PI;            // golden angle
var lg_rad = width * .45;

var circleRad = '2';
var cx = width/2;
var cy = height/2;

const startLoop = async () => {
    for(i = 1; i <= numOfCircles; ++i) {

        var ratio = i/numOfCircles;
        var angle = i*golden_angle;
        var spiral_rad = ratio * lg_rad;
        var x = cx + Math.cos(angle) * spiral_rad;
        var y = cy + Math.sin(angle) * spiral_rad;
        var circle = document.createElementNS(svgws,'circle');
        var animation = document.createElementNS(svgws,'animateTransform');

        //Creating the animation
        animation.setAttributeNS(null, 'attributeName', 'transform');
        animation.setAttributeNS(null, 'type', 'translate');
        animation.setAttributeNS(null, 'from', `${cx} ${cy}`);
        animation.setAttributeNS(null, 'to', `${x} ${y}`);
        animation.setAttributeNS(null, 'begin', '0s');
        animation.setAttributeNS(null, 'dur', '0.5s');
        animation.setAttributeNS(null, 'repeatCount', '1')

        //Placing the circles
        circle.setAttributeNS(null, 'cx', 0);
        circle.setAttributeNS(null, 'cy', 0);
        circle.setAttributeNS(null, 'r', circleRad);
        circle.setAttributeNS(null, 'fill', 'black');
        circle.setAttributeNS(null, 'class', 'Circle');

        // circle.appendChild(animation);
        // document.getElementById('spiralSVG').appendChild(circle);

        animateCircles(circle, animation, x, y)

        await forLoopTimer(1000); //Loop Timer
    }
}

startLoop();

function animateCircles(circle, animation, x, y) {
    var animation = document.createElementNS(svgws,'animateTransform');

        //Creating the animation
        animation.setAttributeNS(null, 'attributeName', 'transform');
        animation.setAttributeNS(null, 'type', 'translate');
        animation.setAttributeNS(null, 'from', `${cx} ${cy}`);
        animation.setAttributeNS(null, 'to', `${x} ${y}`);
        animation.setAttributeNS(null, 'begin', '0s');
        animation.setAttributeNS(null, 'dur', '0.5s');
        animation.setAttributeNS(null, 'repeatCount', '1')
    
    circle.appendChild(animation);
    document.getElementById('spiralSVG').appendChild(circle);
}