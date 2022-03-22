

window.onload= () => {
    wrapper.scroll({
        top: 0,
        behavior: 'smooth'  
      });
}

// SELECTORS
const wrapper = document.querySelector('#main-wrapper');
const navAbout = document.querySelector('#nav-about');
const navProjects = document.querySelector('#nav-projects');
const navContact = document.querySelector('#nav-contact');

const body = document.body;
const sayHiDiv = document.querySelector('#say-hello')
const contactFormDiv = document.querySelector('#Contact')
const projectsDiv = document.querySelector('#Projects')

// SCROLL FUNCTION
wrapper.addEventListener('scroll', event => {
    // console.log(wrapper.scrollTop);
    // ABOUT PAGE
    if (wrapper.scrollTop >= 0 && wrapper.scrollTop < 800) {
        navAbout.classList.add('navbar-active');

        navProjects.classList.remove('navbar-active');
        navContact.classList.remove('navbar-active');
    }

    // PROJECTS PAGE
    if (wrapper.scrollTop >= 700 && wrapper.scrollTop < 1700) {
        navProjects.classList.add('navbar-active');

        navAbout.classList.remove('navbar-active');
        navContact.classList.remove('navbar-active');
    }

    // CONTACT PAGE
    if (wrapper.scrollTop >= 1700) {
        navContact.classList.add('navbar-active');

        navAbout.classList.remove('navbar-active');
        navProjects.classList.remove('navbar-active');
    }
}, { passive: true });

// AUTO SCROLL FUNCTION
navAbout.addEventListener('click', () => {
    wrapper.scroll({
        top: 0,
        behavior: 'smooth'  
      });
    
})

navProjects.addEventListener('click', () => {
    projectsDiv.scrollIntoView({behaviour: 'smooth'});
})

navContact.addEventListener('click', () => {
    sayHiDiv.scrollIntoView({behaviour: "smooth"});
})

// CLICKABLE SOCIAL ICONS
const emailBtn = document.querySelector('#email-button');
const profileBtn = document.querySelector('#profile-button');
const mobileBtn = document.querySelector('#mobile-button');

// EMAIL BUTTON
emailBtn.addEventListener('click', () => {

})

// PROFILE BUTTON
profileBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/awanui-shirley-8498b9210/', '_blank');
})

// MOBILE BUTTON
mobile.addEventListener('click', () => {
    window.open('tel:+64220755768', '_self')
})