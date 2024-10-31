// Fonction pour convertir le texte en audio
function textToAudio() {
  // Récupère le texte depuis la zone de texte
  const text = document.querySelector(".text").value;

  // Vérifie si le texte est vide
  if (!text) {
    alert("Veuillez entrer un texte avant de cliquer sur 'Let's Speak'");
    return;
  }

  // Initialise la synthèse vocale
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  // Paramètres de voix (vous pouvez personnaliser le volume, la vitesse et la tonalité)
  utterance.lang = "en-US";
  utterance.volume = 1; // Volume (entre 0 et 1)
  utterance.rate = 1; // Vitesse de lecture
  utterance.pitch = 1; // Tonalité de la voix

  // Joue le texte
  synth.speak(utterance);
}
