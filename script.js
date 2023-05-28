const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.dropdown-toggle');
    var menu = document.querySelector('.dropdown-menu');
  
    toggleButton.addEventListener('click', function() {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  });
  