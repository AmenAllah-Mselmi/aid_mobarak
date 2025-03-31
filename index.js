
// Create confetti
function createConfetti() {
    const colors = ['#8e44ad', '#f1c40f', '#e74c3c', '#3498db', '#2ecc71'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(confetti);
    }
}

// Create fireworks
function createFireworks() {
    const container = document.getElementById('fireworks-container');
    
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.setProperty('--x', '0px');
        firework.style.setProperty('--y', '0px');
        firework.style.setProperty('--x-end', (Math.random() * 200 - 100) + 'px');
        firework.style.setProperty('--y-end', (Math.random() * 200 - 100) + 'px');
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(firework);
        
        // Remove after animation
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }, 500);
}

// Create floating text
function createFloatingText() {
    const messages = [
        "عيد مبارك",
        "كل عام وأنتم بخير",
        "تقبل الله منا ومنكم",
        "عيد سعيد",
        "كل عام وأنتم إلى الله أقرب"
    ];
    
    const container = document.getElementById('floating-text-container');
    
    setInterval(() => {
        const text = document.createElement('div');
        text.className = 'floating-text';
        text.textContent = messages[Math.floor(Math.random() * messages.length)];
        text.style.left = Math.random() * 100 + 'vw';
        text.style.animationDuration = (Math.random() * 5 + 5) + 's';
        text.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        text.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        container.appendChild(text);
        
        // Remove after animation
        setTimeout(() => {
            text.remove();
        }, 8000);
    }, 1000);
}

// Initialize animations
window.onload = function() {
    createConfetti();
    createFireworks();
    createFloatingText();
    
    // Animate cards on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.style.animation;
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
};