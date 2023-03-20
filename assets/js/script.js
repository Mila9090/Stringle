window.addEventListener('DOMContentLoaded', () => {
    
    const menuOpen = document.querySelector('.burger__open'),
          menuClose = document.querySelector('.burger__close'),
          menu = document.querySelector('.menu');
    
    menuOpen.addEventListener('click', () => {
        menu.style.display = 'block';
        menuClose.style.display = 'block';
    });

    menuClose.addEventListener('click', () => {
        menu.style.display = 'none';
        menuClose.style.display = 'none';
    });
              
});   