"use strict";


// Constants
const COOKIE_EXPIRATION_DAYS  = 365;
const COOKIE_SAMESITE_VALUE   = 'None'; 
const COOKIE_SECURE_VALUE     = true;
const badgeItems              = document.querySelectorAll('.badge-item');
const expires                 = new Date();

// Variables

let savedBadge = localStorage.getItem('badge');
let savedClickCount = localStorage.getItem('clickCount');

// Functions
function setCookie(name, value, days) {
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  const cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=${COOKIE_SAMESITE_VALUE};Secure=${COOKIE_SECURE_VALUE}`;
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



// MAIN
function searchProfile() {
  // Redirige vers la deuxième page
  window.location.href = "pages/page1.html";
}

function creatProfil() {
  // Redirige vers la deuxième page
  window.location.href = "page2.html";
}

document.addEventListener('DOMContentLoaded', function() {
  
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
        setCookie(item.textContent, clickCounter, COOKIE_EXPIRATION_DAYS);
        localStorage.setItem(badgeText, clickCounter);
        setTimeout(() => {
          item.classList.remove('disabled');
        }, 10000);
      }
    });
  });
});

const listOne = [
  {
    "id": "1",
    "texte-french": "RUINEUR DE PARTIES / TROLL",
    "texte-english": "TROLL PLAYER / RUIN GAMES"
  },
  {
    "id": "2",
    "texte-french": "EGO PLAYER",
    "texte-english": "EGO PLAYER",
    "LVL1-french" : "1 - /MUTE ALL",
    "LVL2-french" : "1 - 0/0/0 200 20MIN",
    "LVL3-french" : "1 - ''REP MY TEAM'' ",
    "LVL4-french" : "1 - KDA.EXE + ''REP MY TEAM''",

    "LVL1-english" : "1 - /MUTE ALL",
    "LVL2-english" : "1 - 0/0/0 200 20MIN",
    "LVL3-english" : "1 - ''REP MY TEAM'' ",
    "LVL4-english" : "1 - KDA.EXE + ''REP MY TEAM''"
  },
  {
    "id": "3",
    "texte-french": "ABUS SIGNAUX/TOXIC PLAYER",
    "texte-english": "ABUSE SIGNAL / TOXIC",
    "LVL1-french" : "2 - HORRIBLE / CANCER AUDITIF PHASE 2",
    "LVL2-french" : "2 - TOXIC / CANCER AUDITIF PHASE 3",
    "LVL3-french" : "2 - CORROSIF / CANCER GENERALISÉ PHASE TERMINAL",
    "LVL4-french" : "2 - MERDE HUMAINE / CANCER VIVANT ",

    "LVL1-english" : "2 - HORRIBLE / HEARING CANCER STAGE 2",
    "LVL2-english" : "2 - TOXIC / HEARING CANCER STAGE 3",
    "LVL3-english" : "2 - CORROSIVE PLAYER / GENERALISED CANCER TERMINAL PHASE",
    "LVL4-english" : "2 - HUMAN SHIT / CANCER ON PAWS / RADIOACTIVE "
  },
  {
    "id": "4",
    "texte-french": "POSTE GAP",
    "texte-english": "POST GAP"
  },
  {
    "id": "5",
    "texte-french": "VOL LES RESSOURCES", 
    "texte-english": "RESOURCES THIEF"
  },
  {
    "id": "6",
    "texte-french": "DISRESPECTE LE FORESTIER",
    "texte-english": "DISRESPECT  FOREST"
  },
  {
    "id": "7",
    "texte-french": "PAS DE MENTAL / FF PLAYER",
    "texte-english": "NO MENTAL / FF PLAYER",
    "LVL1-french" : "3 - HUMEUR CHANGEANTE",
    "LVL2-french" : "3 - MENTALEMENT FRAGILE",
    "LVL3-french" : "3 - A FLEUR DE PEAU",
    "LVL4-french" : "3 - ''15'' CHAT 3MIN",

    "LVL1-english" : "3 - CHANGING MOOD",
    "LVL2-english" : "3 - MENTALLY WEAK",
    "LVL3-english" : "3 - WEAK-MINDED",
    "LVL4-english" : "3 - ''15'' CHAT 3MIN"
  },
  {
    "id": "8",
    "texte-french": "RAGEQUIT / NOUVEAU COMPTE",
    "texte-english": "RAGEQUIT / NEW ACC"
  },
  {
    "id": "9",
    "texte-french": "BLAME SES ALLIÉS",
    "texte-english": "BLAME ALLIES"
  },
  {
    "id": "10",
    "texte-french": "MÉRITE SON BAN",
    "texte-english": "DESERVES A BAN"
  }
];

const listTwo = [
  {
    "id": "11",
    "texte-french": "TEAM PLAYER",
    "texte-english": "TEAM PLAYER"
  },
  {
    "id": "12",
    "texte-french": "BON SIGNAUX",
    "texte-english": "GOOD SIGNALS"
  },
  {
    "id": "13",
    "texte-french": "BON COÉQUIPIER",
    "texte-english": "GOOD DUO"
  },
  {
    "id": "14",
    "texte-french": "POSTE GAP",
    "texte-english": "POST GAP"
  },
  {
    "id": "15",
    "texte-french": "LAISSE LES RESSOURCES",
    "texte-english": "LEAVE RESOURCES"
  },
  {
    "id": "16",
    "texte-french": "RESPECT LE FORESTIER",
    "texte-english": "RESPECT FOREST"
  },
  {
    "id": "17",
    "texte-french": "N'ABANDONNE JAMAIS !",
    "texte-english": "NEVER FF"
  },
  {
    "id": "18",
    "texte-french": "FAIT RAGEQUIT",
    "texte-english": "MAKE RAGEQUIT"
  },
  {
    "id": "19",
    "texte-french": "NE BLAME PERSONNE",
    "texte-english": "NEVER BLAME"
  },
  {
    "id": "20",
    "texte-french": "FAISEUR DE VICTOIRE",
    "texte-english": "WINNER MAKER"
  }
]