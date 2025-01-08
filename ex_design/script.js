// script.js
function toggleDarkMode() {
    
    if (!document.body.style.transition) {
        document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
    }

    document.body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
    updateImage();
}

function updateImage() {
  const imgMode = document.querySelector(".img_mode");
  imgMode.src = document.body.classList.contains("dark-mode") ? "/images/moon.svg" : "/images/sun.svg";
}


window.onload = () => { // All'inizio, controlla se la dark mode è stata precedentemente attivata

  const darkMode = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle("dark-mode", darkMode);  // Attiva/disattiva dark mode
  updateImage(); // Aggiorna l'immagine del pulsante in base al tema

};

