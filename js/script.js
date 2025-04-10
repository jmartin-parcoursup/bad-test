// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée !");
    
    // Exemple : Animation au survol des cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});
