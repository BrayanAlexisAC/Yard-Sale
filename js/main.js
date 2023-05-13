//Constants
const navbarAccount = document.querySelector('.nav-bar-account');
const menuDesktop = document.querySelector('.menu-desktop');

//Events
navbarAccount.addEventListener('click',toggleMenuDesktop);

//Functions
function toggleMenuDesktop(event){
  menuDesktop.classList.toggle('inactive');
}