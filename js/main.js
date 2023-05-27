document.addEventListener('DOMContentLoaded',function(){
  //Constants
  const navbarAccount = document.querySelector('.nav-bar-account');
  const btnNavBarMenu = document.querySelector('.nav-bar-menu');
  const btnClose = document.querySelector('.btn-close');

  //Events
  navbarAccount.addEventListener('click',function(){
    toggleMenuDesktop(document.querySelector('.menu-desktop'));
  });
  btnNavBarMenu.addEventListener('click',function(){
    toggleMenuDesktop(document.querySelector('.menu-mobile'));
  });
  btnClose.addEventListener('click',function(){
    toggleMenuDesktop(document.querySelector('.menu-mobile'));
  });

  //Functions
  function toggleMenuDesktop(component){
    // console.info(component);
    component.classList.toggle('inactive');
  }
});