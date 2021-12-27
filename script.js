"use-strict";
function rain (amount = 1000) {
    let falling = document.querySelector('.falling');
    for (let i = 1; i <= amount; i++) {
        let fallingStar = document.createElement('div');
        fallingStar.classList.add('falling__star');
        fallingStar.style.left = (window.innerWidth / amount) * i + 'px';
        fallingStar.style.animationDelay = Math.random() * -30 + 's'
        falling.append(fallingStar);
    }
}
let ask = null
while (ask == null || ask.length > 9 || ask == '') {
    ask = prompt('Введите ваше имя, не превышайте 9 букв')
    if(ask) {
        ask = ask.replace(/\s/gm, ''); 
        continue;
    }
}
let userName = document.querySelector('.user-name');
userName.innerHTML = ask;
requestAnimationFrame(() => rain(500));
