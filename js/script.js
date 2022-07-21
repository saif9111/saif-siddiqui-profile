// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


// ***************** Skills **************

var lang = {
    "html": "90%",
    "css": "90%",
    "javascript": "70%",
    "php": "55%",
    "wordpress": "65%",
    "bootstrap": "75%",
    "laravel": "35%"
};
var multiply = 4;

$.each( lang, function( language, pourcent) {

        var delay = 700;

        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);

        multiply++;

    });