"use strict";


function searchProfile() {
    // Redirige vers la deuxième page
    window.location.href = "pages/page1.html";
}

function creatProfil() {
  // Redirige vers la deuxième page
  window.location.href = "page2.html";
}

function saveSelection(selection) {
  // Effectuer une action appropriée avec la sélection
  // Par exemple, vous pouvez l'enregistrer dans le stockage local du navigateur
  // ou l'envoyer au serveur via une requête AJAX.

  // Exemple d'enregistrement dans le stockage local du navigateur (localStorage) :
  localStorage.setItem('selectedBadge', selection);
  
  // Ou exemple d'envoi au serveur via une requête AJAX (utilisation de la bibliothèque fetch) :
  fetch('/votre-action', {
    method: 'POST',
    body: JSON.stringify({ selection: selection }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    // Gérer la réponse du serveur si nécessaire
    console.log('Sélection sauvegardée avec succès !');
  });
}

// Sélectionnez tous les éléments li avec la classe "badge-item"
const badgeItems = document.querySelectorAll('.badge-item');

// Parcourez tous les éléments li
badgeItems.forEach((item) => {
  let clickCounter = 0; // Compteur de clics initial

  // Créez un élément span pour afficher le compteur de clics
  const counterSpan = document.createElement('span');
  counterSpan.textContent = clickCounter.toString(); // Affichez le compteur de clics initial
  item.appendChild(counterSpan); // Ajoutez le span à l'élément li

  // Ajoutez un gestionnaire d'événements de clic à chaque élément li
  item.addEventListener('click', () => {
    clickCounter++; // Incrémentez le compteur de clics
    counterSpan.textContent = clickCounter.toString(); // Mettez à jour le contenu du span avec le compteur de clics
  });
});