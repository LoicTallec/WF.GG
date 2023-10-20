"use strict";

// Définition de la fonction saveSelection avec la logique d'envoi des données du badge au serveur
function saveSelection(badgeText, clickCount) {
  // Envoi du nombre de clics à l'endpoint approprié via une requête Ajax
  const data = JSON.stringify({ badge: badgeText, count: clickCount });
  $.ajax({
    url: 'url_de_votre_endpoint',
    type: 'POST',
    data: data,
    contentType: 'application/json',
    success: function(response) {
      console.log('Nombre de clics enregistré avec succès');
    },
    error: function(error) {
      console.error('Erreur lors de l\'enregistrement du nombre de clics');
    }
  });
}

// Sélectionnez tous les éléments <li> avec la classe "badge-item"
const badgeItems = document.querySelectorAll('.badge-item');

// Parcourir tous les éléments <li> et ajouter un gestionnaire d'événements de clic
badgeItems.forEach(badgeItem => {
  // Créer une balise <span> pour le compteur de clics
  const counterSpan = document.createElement('span');
  const badgeText = badgeItem.textContent;
  let clickCount = 0;
  counterSpan.textContent = clickCount.toString();
  
  // Ajouter la balise <span> à la fin de chaque élément <li>
  badgeItem.appendChild(counterSpan);
  
  // Ajouter un attribut data-last-clicked pour stocker le dernier horodatage de clic
  badgeItem.dataset.lastClicked = '0';
  
  // Ajouter un gestionnaire d'événements de clic à chaque élément <li>
  badgeItem.addEventListener('click', () => {
    const currentTime = new Date().getTime();
    const lastClickedTime = parseInt(badgeItem.dataset.lastClicked);
    
    // Vérifier si le badge peut être cliqué (limite d'un clic toutes les 2 secondes)
    if (currentTime - lastClickedTime < 2000) {
      return; // Ne rien faire si le badge a été cliqué récemment
    }
    
    // Mettre à jour le compteur de clics
    clickCount++;
    counterSpan.textContent = clickCount.toString();
    
    // Mettre à jour le dernier horodatage de clic
    badgeItem.dataset.lastClicked = currentTime.toString();
    
    // Appeler la fonction saveSelection avec le texte du badge et le nombre de clics
    saveSelection(badgeText, clickCount);
  });
});






