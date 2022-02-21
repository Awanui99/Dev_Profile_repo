

let xLocArray = [];
let yLocArray = [];
let circleArray = [];
let animationArray = []
let counter = 0;

var svgws = "http://www.w3.org/2000/svg";
var width = 400;
var height = 400;
var numOfCircles = 100;
  
var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
var golden_angle = phi*2*Math.PI;            // golden angle
var lg_rad = width * .45;

var circleRad = '2';
var cx = width/2;
var cy = height/2;

for(var i = 1; i <= numOfCircles; ++i) {
    var ratio = i/numOfCircles;
    var angle = i*golden_angle;
    var spiral_rad = ratio * lg_rad;
    var x = cx + Math.cos(angle) * spiral_rad;
    var y = cy + Math.sin(angle) * spiral_rad;

    xLocArray.push(x.toFixed(2));

    yLocArray.push(y.toFixed(2));
}

//Create circle function
function createNewCircle() {
    var circle = document.createElementNS(svgws,'circle');
    var animation = document.createElementNS(svgws,'animateTransform');

    var x = xLocArray[counter];
    var y = yLocArray[counter];

    //Placing the circles
    circle.setAttributeNS(null, 'cx', 0);
    circle.setAttributeNS(null, 'cy', 0);
    circle.setAttributeNS(null, 'r', circleRad);
    circle.setAttributeNS(null, 'fill', 'black');
    circle.setAttributeNS(null, 'class', 'Circle');

    //Creating the animation
    animation.setAttributeNS(null, 'attributeName', 'transform');
    animation.setAttributeNS(null, 'type', 'translate');
    animation.setAttributeNS(null, 'from', `${cx} ${cy}`);
    animation.setAttributeNS(null, 'to', `${x} ${y}`);
    animation.setAttributeNS(null, 'begin', '0s');
    animation.setAttributeNS(null, 'dur', '1s');
    animation.setAttributeNS(null, 'repeatCount', 'indefinite');

    //Sending to draw
    drawCircles(circle, animation);

    counter += 1;
    console.log(counter);
    if (counter === numOfCircles) {
        clearInterval(timer);
    }
}

//Draw function
function drawCircles(circle, animation) {
    // Appending all elements
    circle.appendChild(animation);
    document.getElementById('spiralSVG').appendChild(circle);

}

setInterval(createNewCircle, 1000);