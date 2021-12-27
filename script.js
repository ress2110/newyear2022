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
requestAnimationFrame(() => rain(500));
