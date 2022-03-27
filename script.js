

const navAbout = document.querySelector('#nav-about');
const navProjects = document.querySelector('#nav-projects');
const navContact = document.querySelector('#nav-contact');

const wrapper = document.querySelector('#main-wrapper');
const aboutDiv = document.querySelector('#Thumbnail');
const projectsDiv = document.querySelector('#Projects');
const contactContainer = document.querySelector('#contactContainer');
var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

// NAVBAR ACTIVESTATE CHANGE
wrapper.onscroll = () => {
    
    if (wrapper.scrollTop >= (projectsDiv.offsetTop - 150) && wrapper.scrollTop <= (contactContainer.offsetTop - 150)) {
        navAbout.classList.remove('navbar-active');
        navContact.classList.remove('navbar-active');
        navProjects.classList.add('navbar-active');
    }
    else if (wrapper.scrollTop >= (contactContainer.offsetTop - 150)) {
        navAbout.classList.remove('navbar-active');
        navContact.classList.add('navbar-active');
        navProjects.classList.remove('navbar-active');
    }
    else {
        navAbout.classList.add('navbar-active');
        navContact.classList.remove('navbar-active');
        navProjects.classList.remove('navbar-active');
    }
}

// BUTTONS
navAbout.addEventListener('click', () => {
    doScrolling(aboutDiv);
});
navProjects.addEventListener('click', () => {
    doScrolling(projectsDiv)
});
navContact.addEventListener('click', () => {
    doScrolling(contactContainer)
});

// NORMAL SMOOTH SCROLL FUNC
let doScrolling = function (element, navButton) {

    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

// WORK AROUND SCROLL LOOP
// let prevElement = 0;
// let counter = 0;

// const workAroundScrollFunc = function(element) {

//     let elementYPos = element.getBoundingClientRect().y;

//     if (element.offsetTop === prevElement.offsetTop) {
//         return
//     }

//     else if ( wrapper.scrollTop > element.offsetTop) {
//         let timer = setInterval(() => {
//             wrapper.scrollBy(0, (Math.floor(elementYPos * 0.02) + 48));

//             counter++

//             if (wrapper.scrollTop <= element.offsetTop) {
//                 clearInterval(timer);
//                 counter = 0;
//             }
//         }, 1)
//     }
//     else if (wrapper.scrollTop < element.offsetTop) {
//         let timer = setInterval(() => {
//             wrapper.scrollBy(0, (Math.floor(elementYPos * 0.02) - 48));

//             counter++

//             if (wrapper.scrollTop >= element.offsetTop) {
//                 clearInterval(timer);
//                 counter = 0;
//             }
//         }, 1)
//     }
//     prevElement = element
// }

// // Smoothscroll Support check
// if (isSmoothScrollSupported === true) {
//     doScrolling = smoothScrollFunc;
// }
// else {
//     doScrolling = workAroundScrollFunc;
// }



// // CALCULATE MARGIN
// function findMargin(element) {
//     let style = element.currentStyle || window.getComputedStyle(element);
//     console.log(style.marginTop)
//     return style.marginTop;
// }

// CLICKABLE SOCIAL ICONS
const profileBtn = document.querySelector('#profile-button');

// PROFILE BUTTON
profileBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/awanui-shirley-8498b9210/', '_blank');
})

// My scroll function is loosely based off of this, though I had to make some changes
// due to my parallax scrolling effect

// https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
// function scrollToSmoothly(pos, time) {

//     if (pos === 'projects') {
//         pos = scrollPos(projectsDiv);
//     }
//     else if (pos === 'contact') {
//         pos = scrollPos(contactFormDiv);
//     }
//     else {
//         pos = 0;
//         currentWindowPos = 0;
//     };

//     // var currentPos = wrapper.scrollTop;
//     var start = null;
//     if(time == null) time = 500;
//     pos = +pos, time = +time;
//     window.requestAnimationFrame(function step(currentTime) {
//         start = !start ? currentTime : start;
//         var progress = currentTime - start;
//         if (currentPos < pos) {

//             // wrapper.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos); 
//         } 
//         else {

//             // wrapper.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
//         }
//         if (progress < time) {
//             window.requestAnimationFrame(step);
//         } else {
//             window.scrollTo(0, pos);
//         }
//     });
// }