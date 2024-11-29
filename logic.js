var menuButton = document.querySelector('.menu-button') ; 
var navLinks = document.querySelector('.nav-links') ; 

menuButton.addEventListener('click' , () => {
    navLinks.classList.toggle('active') ; 
}) ; 
