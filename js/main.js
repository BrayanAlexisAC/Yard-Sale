document.addEventListener('DOMContentLoaded',function(){
  //Constants
  const navbarAccount = document.querySelector('.nav-bar-account');
  const navBarLogoMobile = document.querySelector('.nav-bar-logo-mobile');
  const btnNavBarMenu = document.querySelector('.nav-bar-menu');
  const btnShoppingCart = document.querySelector('.nav-bar-cart');
  const btnShoppingCartClose = document.querySelector('.shpng-cart-close');
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

  btnShoppingCart.addEventListener('click',function(){
    let shoppingCart = document.querySelector('.shopping-cart'); 
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    console.log(isShoppingCartOpen);
    if(isShoppingCartOpen){
      if(window.innerWidth <= 991){
        navBarLogoMobile.style.display = "flex";
      }
      toggleMenuDesktop(document.querySelector('.shpng-cart-title'));
    }else{
      if(window.innerWidth <= 991){
        navBarLogoMobile.style.display = "none";
      }
      toggleMenuDesktop(document.querySelector('.shpng-cart-title'));
    }
    toggleMenuDesktop(shoppingCart);
  });

  btnShoppingCartClose.addEventListener('click',function(){
    toggleMenuDesktop(document.querySelector('.shopping-cart'));
  });

  window.addEventListener('resize', () => {
    let shoppingCart = document.querySelector('.shopping-cart'); 
    let isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    if(window.innerWidth >= 991){
      navBarLogoMobile.style.removeProperty('display');
    }else if(window.innerWidth <= 990 && isShoppingCartOpen){
      navBarLogoMobile.style.display = "none";
    }
  });

  //Functions
  function toggleMenuDesktop(component){
    // console.info(component);
    component.classList.toggle('inactive');
  }

});