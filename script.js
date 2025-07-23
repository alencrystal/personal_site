// script.js
function toggleDarkMode() {
    // Aggiungi transizioni fluide
    document.body.style.transition = "background-color 0.5s ease, color 0.3s ease";
    document.querySelectorAll('.card').forEach(card => {
        card.style.transition = "background-color 0.5s ease, transform 0.3s ease";
    });

    // Attiva/disattiva la modalità dark
    document.body.classList.toggle("dark-mode");
    
    // Salva lo stato della dark mode
    localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
    
    // Aggiorna l'immagine del toggle
    updateThemeIcon();
    
    // Animazione del toggle
    animateThemeToggle();
}

function updateThemeIcon() {
    const themeToggle = document.querySelector(".theme-toggle");
    const isDarkMode = document.body.classList.contains("dark-mode");
    
    // Aggiorna icona e attributi accessibilità
    themeToggle.src = isDarkMode ? "images/moon.png" : "images/sun.png";
    themeToggle.alt = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    themeToggle.title = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
}

function animateThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.style.transform = "scale(1.2) rotate(180deg)";
    
    setTimeout(() => {
        themeToggle.style.transform = "scale(1) rotate(0)";
    }, 300);
}

// Inizializzazione al caricamento
function initializePage() {
    // Controlla lo stato della dark mode
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle("dark-mode", darkMode);
    
    // Aggiorna l'icona
    updateThemeIcon();
    
    // Animazioni di entrata
    animateElements();
}

// Animazioni degli elementi
function animateElements() {
    const title = document.querySelector('.name-title');
    const subtitle = document.querySelector('.subtitle');
    const cards = document.querySelectorAll('.card');
    
    // Animazione titolo e sottotitolo
    title.style.animation = "fadeInDown 1s ease-out forwards";
    subtitle.style.animation = "fadeIn 1.2s ease-out 0.3s forwards";
    
    // Animazione cards con ritardo progressivo
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2 + 0.4}s forwards`;
    });
    
    // Aggiungi hover effect alle cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)";
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        });
    });
}

// Gestione del caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
    initializePage();
    
    // Per sicurezza, richiama anche al completo caricamento
    window.addEventListener('load', initializePage);
});