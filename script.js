// script.js
function toggleDarkMode() {
  // Aggiungi una transizione se non è già presente
  if (!document.body.style.transition) {
      document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
  }

  // Attiva/disattiva la modalità dark
  document.body.classList.toggle("dark-mode");
  
  // Salva lo stato della dark mode
  localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
  
  // Aggiorna l'immagine in base alla modalità
  updateImage();
}

function updateImage() {
  const imgMode = document.querySelector(".image_mode"); // Correggi la classe in "image_mode"
  
  // Aggiorna il percorso dell'immagine in base alla modalità dark
  imgMode.src = document.body.classList.contains("dark-mode") ? "/images/moon.png" : "/images/sun.png";
  
  // Aggiorna il testo alternativo per migliorare l'accessibilità
  imgMode.alt = document.body.classList.contains("dark-mode") ? "Moon" : "Sun";
}

// All'avvio della pagina, controlla se la dark mode è stata precedentemente attivata
window.onload = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  
  // Imposta la modalità dark in base al valore salvato
  document.body.classList.toggle("dark-mode", darkMode);
  
  // Aggiorna l'immagine del pulsante
  updateImage();
};
