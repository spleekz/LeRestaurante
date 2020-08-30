let menuItem = document.querySelectorAll('.menu-item');
let underline = document.querySelectorAll('.underline');
let meatLogo = document.querySelector('.meat-logo');
let vegetarianLogo = document.querySelector('.vegetarian-logo');
let secretsLogo = document.querySelector('.secrets-logo');
let meatBg = document.querySelector('.header-bg-meat');
let vegBg = document.querySelector('.header-bg-vegetarian');
let secretsBg = document.querySelector('.header-bg-secrets')
let meatBtn = document.querySelector('#meat-button');
let vegBtn = document.querySelector('#veg-button');
let secretsBtn = document.querySelector('#secrets-button');

for (let i = 0; i<menuItem.length;i++){
    menuItem[i].addEventListener('mouseenter',function(){
        menuItem[i].style.color = '#f1ac11';
        menuItem[i].style.cursor = 'pointer'
        underline[i].style.visibility = 'visible';
        underline[i].style.opacity = '1';
    })
    menuItem[i].addEventListener('mouseleave',function(){
        menuItem[i].style.color = '#fff';
        underline[i].style.visibility = 'hidden';
        underline[i].style.opacity = '0';
    })
}

meatLogo.addEventListener('mouseenter',function(){
    this.style.backgroundImage = "url('img/frame-active-2.png')";
    meatBg.style.filter = 'brightness(100%)';
    meatBtn.style.filter = 'brightness(100%)'
    this.style.cursor = 'pointer';
    

})
meatLogo.addEventListener('mouseleave',function(){
    this.style.backgroundImage = "url('img/frame-unactive.png')";
    meatBg.style.filter = 'brightness(75%)';
    meatBtn.style.filter = 'brightness(75%)'
})

vegetarianLogo.addEventListener('mouseenter',function(){
    this.style.backgroundImage = "url('img/frame-active-2.png')";
    vegBg.style.filter = 'brightness(100%)';
    vegBtn.style.filter = 'brightness(100%)'
    this.style.cursor = 'pointer';
    

})
vegetarianLogo.addEventListener('mouseleave',function(){
    this.style.backgroundImage = "url('img/frame-unactive.png')";
    vegBg.style.filter = 'brightness(75%)';
    vegBtn.style.filter = 'brightness(75%)'
})

secretsLogo.addEventListener('mouseenter',function(){
    this.style.backgroundImage = "url('img/frame-active-2.png')";
    secretsBg.style.filter = 'brightness(100%)';
    secretsBtn.style.filter = 'brightness(100%)'
    this.style.cursor = 'pointer';
    

})
secretsLogo.addEventListener('mouseleave',function(){
    this.style.backgroundImage = "url('img/frame-unactive.png')";
    secretsBg.style.filter = 'brightness(75%)';
    secretsBtn.style.filter = 'brightness(75%)'
})