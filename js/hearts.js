// Agregar corazones flotantes
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const heartsCount = 15;
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.animationDelay = `${delay}s`;
        
        body.appendChild(heart);
    }
});