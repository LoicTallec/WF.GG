"use strict";


function searchProfile() {
    // Redirige vers la deuxième page
    window.location.href = "pages/page1.html";
}

function creatProfil() {
  // Redirige vers la deuxième page
  window.location.href = "page2.html";
}

document.addEventListener('DOMContentLoaded', function() {
  const badgeItems = document.querySelectorAll('.badge-item');

  badgeItems.forEach((item) => {
    const badgeText = item.textContent;
    let clickCounter = getCookie(badgeText) || localStorage.getItem(badgeText) || 0;

    const counterSpan = document.createElement('span');
    counterSpan.classList.add('counter');
    counterSpan.textContent = clickCounter.toString();
    item.appendChild(counterSpan);

    item.addEventListener('click', () => {
      if (!item.classList.contains('disabled')) {
        clickCounter++;
        counterSpan.textContent = clickCounter.toString();
        item.classList.add('disabled');
        saveSelection(item.textContent, clickCounter);
        setCookie(item.textContent, clickCounter, 365); // Stocke la valeur du compteur dans un cookie pour une durée d'un an (365 jours)
        localStorage.setItem(badgeText, clickCounter); // Enregistre la valeur du compteur dans le stockage local
        setTimeout(() => {
          item.classList.remove('disabled');
        }, 10000);
      }
    });
  });
});

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  const cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=None;Secure`;
  document.cookie = cookie;
}

function getCookie(name) {
  const cookieName = `${name}=`;
  const cookieArray = document.cookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length, cookie.length));
    }
  }
  return null;
}

function saveSelection(badgeText, clickCount) {
  // Votre code pour enregistrer la sélection du badge et le compteur de clics ici
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'url_de_votre_endpoint', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Badge enregistré avec succès');
    }
  };
  const data = JSON.stringify({ badge: badgeText, count: clickCount });
  xhr.send(data);
  // Enregistrement dans le stockage local du navigateur
  localStorage.setItem('badge', badgeText);
  localStorage.setItem('clickCount', clickCount);
}

// Récupération des valeurs du stockage local du navigateur
const savedBadge = localStorage.getItem('badge');
const savedClickCount = localStorage.getItem('clickCount');

