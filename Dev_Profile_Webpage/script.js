

var svgws = "http://www.w3.org/2000/svg";
const SVG = document.querySelector('#spiralSVG');
var numOfCircles = 200;

//Used to create algorithm
    // var phi = (Math.sqrt(5)+1)/2 - 1;            // golden ratio
    // var golden_angle = phi*2*Math.PI;            // golden angle
    // var lg_rad = width * .45;

var circleRad = '2';
var cx = 0;
var cy = 0;

// for(var i = 0; i < numOfCircles; ++i) {
//     // var ratio = i/numOfCircles;
//     // var angle = i*golden_angle;
//     // var spiral_rad = ratio * lg_rad;
//     // var x = cx + Math.cos(angle) * spiral_rad;
//     // var y = cy + Math.sin(angle) * spiral_rad;

//     // xArray.push(x.toFixed(2));
//     // yArray.push(y.toFixed(2));

//     // if (i === numOfCircles) {
//     //     console.log(xArray)
//     //     console.log(yArray)
//     // }
//     let x = xLocArray[i];
//     let y = yLocArray[i];

//     let animationDelay = i / 100;
//     let animationDuration = 0.5;

//     var animationOut = document.createElementNS(svgws,'animateTransform');
//     var circle = document.createElementNS(svgws,'circle');
    
//     //Creating the animation
//     animationOut.setAttributeNS(null, 'attributeName', 'transform');
//     animationOut.setAttributeNS(null, 'type', 'translate');
//     animationOut.setAttributeNS(null, 'from', `${cx} ${cy}`);
//     animationOut.setAttributeNS(null, 'to', `${x} ${y}`);
//     animationOut.setAttributeNS(null, 'begin', `${animationDelay}s`);
//     animationOut.setAttributeNS(null, 'dur', `${animationDuration}s`);
//     animationOut.setAttributeNS(null, 'repeatCount', '1');
//     // animationOut.setAttributeNS(null, 'fill', 'freeze');

//     //Placing the circles
//     circle.setAttributeNS(null, 'cx', cx);
//     circle.setAttributeNS(null, 'cy', cy);
//     circle.setAttributeNS(null, 'r', circleRad);
//     circle.setAttributeNS(null, 'fill', 'black');
//     circle.setAttributeNS(null, 'class', 'Circle');
    
//     circle.appendChild(animationOut);
//     SVG.appendChild(circle);
    
    
//     if (i === 0) {
//         myLoop();
//     }
// }

// var k = 1;
// let duration = 0.681 * 3;                                   

// function myLoop() {         
//   setTimeout(function() {   
//     let x = xLocArray[k];
//     let y = yLocArray[k];

//     let animationDelay =  k / (0.681 * 2);
//     let animationDuration =  0.681 * 6;//0.681 * 6;

//     var animationOrbit = document.createElementNS(svgws, 'animateTransform');
//     var animationOut = document.createElementNS(svgws,'animateTransform');
//     var animationOpacity = document.createElementNS(svgws,'animate');
//     var animationSize = document.createElementNS(svgws,'animate');
//     var g = document.createElementNS(svgws,'g');
//     var g2 = document.createElementNS(svgws,'g');
//     var centerCircle = document.createElementNS(svgws,'circle');
//     var circle = document.createElementNS(svgws,'circle');

//     //Orbit rotate
//     animationOrbit.setAttributeNS(null, 'attributeName', 'transform');
//     animationOrbit.setAttributeNS(null, 'type', 'rotate');
//     animationOrbit.setAttributeNS(null, 'values', '0;360');
//     animationOrbit.setAttributeNS(null, 'begin', `${animationDelay}s`);
//     animationOrbit.setAttributeNS(null, 'dur', `${animationDuration}s`);
//     animationOrbit.setAttributeNS(null, 'repeatCount', 'indefinite');
//     animationOrbit.setAttributeNS(null, 'class', 'orbit');

//     //Animate out/in circle
//     animationOut.setAttributeNS(null, 'attributeName', 'transform');
//     animationOut.setAttributeNS(null, 'type', 'translate');
//     animationOut.setAttributeNS(null, 'values', `0 0;${x} ${y};0 0`);
//     animationOut.setAttributeNS(null, 'begin', `${animationDelay}s`);
//     animationOut.setAttributeNS(null, 'dur', `${animationDuration}s`);
//     animationOut.setAttributeNS(null, 'repeatCount', 'indefinite');
//     animationOut.setAttribute('calcMode', 'spline');
//     animationOut.setAttribute('keytimes', '0;0.5;1');
//     animationOut.setAttribute('keySplines', '0.5 0 0.5 1; 0.5 0 0.5 1');

//     //Animating Size of circles
//     animationSize.setAttribute('attributeName', 'r');
//     animationSize.setAttribute('values', '1;4');
//     animationSize.setAttribute('begin', animationDelay);
//     animationSize.setAttribute('dur', animationDuration);
//     animationSize.setAttribute('repeatCount', 'indefinite');

//     // //Animating Opacity
//     // animationOpacity.setAttribute('attributeName', 'opacity');
//     // animationOpacity.setAttribute('values', '2;3');
//     // animationOpacity.setAttribute('begin', animationDelay);
//     // animationOpacity.setAttribute('repeatCount', 'indefinite');

//     //Visible Circles
//     circle.setAttributeNS(null, 'cx', cx);
//     circle.setAttributeNS(null, 'cy', cy);
//     circle.setAttributeNS(null, 'r', circleRad);
//     circle.setAttributeNS(null, 'fill', 'black');
//     circle.setAttributeNS(null, 'class', 'secondCircle');

//     //Center Circle
//     centerCircle.setAttributeNS(null, 'cx', cx);
//     centerCircle.setAttributeNS(null, 'cy', cy);
//     centerCircle.setAttributeNS(null, 'r', circleRad);
//     centerCircle.setAttributeNS(null, 'fill', 'none');
//     centerCircle.setAttribute('fillOpacity', '0%');

//     //Appending all elements
//     circle.appendChild(animationOut);
//     circle.appendChild(animationSize);
//     g2.appendChild(circle);
//     g.appendChild(animationOrbit);
//     g.appendChild(g2);
//     SVG.appendChild(centerCircle);
//     SVG.appendChild(g);

//     k++;                    
//     if (k < numOfCircles) {           
//       myLoop();             
//     }                       
//   },duration);
// }

// myLoop();

for(var k = 0; k < numOfCircles; k++) {
  let x = xLocArray[k];
  let y = yLocArray[k];

  let animationDelay = k / (0.681 * 1); //Controls the time between dots
  let orbitDelay = k / (0.618 * 2)  
  let animationDuration =  0.681 * 2; //Controls the speed of the circles
  let rotationSpeed = 0.681 * 3; //Controls the speed of Cycles

  var animationOrbit = document.createElementNS(svgws, 'animateTransform');
  var animationOut = document.createElementNS(svgws,'animateTransform');
  var animationOpacity = document.createElementNS(svgws,'animate');
  var animationSize = document.createElementNS(svgws,'animate');
  var g = document.createElementNS(svgws,'g');
  var g2 = document.createElementNS(svgws,'g');
  var centerCircle = document.createElementNS(svgws,'circle');
  var circle = document.createElementNS(svgws,'circle');

  //Orbit rotate
  animationOrbit.setAttributeNS(null, 'attributeName', 'transform');
  animationOrbit.setAttributeNS(null, 'type', 'rotate');
  animationOrbit.setAttributeNS(null, 'values', '360;0');
  animationOrbit.setAttributeNS(null, 'begin', `${orbitDelay}s`);
  animationOrbit.setAttributeNS(null, 'dur', `${rotationSpeed}s`);
  animationOrbit.setAttributeNS(null, 'repeatCount', 'indefinite');
  animationOrbit.setAttributeNS(null, 'class', 'orbit');

  //Animate out/in circle
  animationOut.setAttributeNS(null, 'attributeName', 'transform');
  animationOut.setAttributeNS(null, 'type', 'translate');
  animationOut.setAttributeNS(null, 'values', `0 0;${x} ${y};0 0`);
  animationOut.setAttributeNS(null, 'begin', `${animationDelay}s`);
  animationOut.setAttributeNS(null, 'dur', `${animationDuration}s`);
  animationOut.setAttributeNS(null, 'repeatCount', 'indefinite');
  animationOut.setAttribute('calcMode', 'spline');
  animationOut.setAttribute('keytimes', '0;0.5;1');
  animationOut.setAttribute('keySplines', '0.5 0 0.5 1; 0.5 0 0.5 1');

  //Animating Size of circles
  animationSize.setAttribute('attributeName', 'r');
  animationSize.setAttribute('values', '1;4');
  animationSize.setAttribute('begin', animationDelay);
  animationSize.setAttribute('dur', animationDuration);
  animationSize.setAttribute('repeatCount', 'indefinite');

  //Animating Opacity
  animationOpacity.setAttribute('attributeName', 'opacity');
  animationOpacity.setAttribute('values', '0.5;0.8;1');
  animationOpacity.setAttribute('begin', animationDelay);
  animationOpacity.setAttribute('dur', animationDuration);
  animationOpacity.setAttribute('repeatCount', 'indefinite');

  //Visible Circles
  circle.setAttributeNS(null, 'cx', cx);
  circle.setAttributeNS(null, 'cy', cy);
  circle.setAttributeNS(null, 'r', circleRad);
  circle.setAttributeNS(null, 'fill', 'black');
  circle.setAttributeNS(null, 'class', 'secondCircle');
  circle.setAttribute('opacity', '1');

  //Center Circle
  centerCircle.setAttributeNS(null, 'cx', cx);
  centerCircle.setAttributeNS(null, 'cy', cy);
  centerCircle.setAttributeNS(null, 'r', circleRad);
  centerCircle.setAttributeNS(null, 'fill', 'none');
  centerCircle.setAttribute('fillOpacity', '0%');

  //Appending all elements
  circle.appendChild(animationOut);
  circle.appendChild(animationSize);
  circle.appendChild(animationOpacity)
  g2.appendChild(circle);
  g.appendChild(animationOrbit);
  g.appendChild(g2);
  SVG.appendChild(centerCircle);
  SVG.appendChild(g);
}