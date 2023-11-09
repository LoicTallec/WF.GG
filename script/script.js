"use strict";

// CONSTANTS
// Tableau des badges :
const listOne = [
  {
    "id": "1",
    "texte": "RUINEUR DE PARTIES/TROLL",
  },
  {
    "id": "2",
    "texte": "EGO PLAYER",
    "LVL1" : "/MUTE ALL",
    "LVL2" : "0/0/0 200 20MIN",
    "LVL3" : "REP MY TEAM",
    "LVL4" : "KDA.EXE + REP MY TEAM",
  },
  {
    "id": "3",
    "texte": "ABUS SIGNAUX/TOXIC PLAYER",
    "LVL1" : "CANCER AUDITIF PHASE 1",
    "LVL2" : "CANCER AUDITIF PHASE 2",
    "LVL3" : "CANCER AUDITIF PHASE 3",
    "LVL4" : "CANCER AUDITIF PHASE TERMINAL",
  },
  {
    "id": "4",
    "texte": "POSTE GAP",
  },
  {
    "id": "5",
    "texte": "VOL LES RESSOURCES",
  },
  {
    "id": "6",
    "texte": "DISRESPECT LE FORESTIER",
  },
  {
    "id": "7",
    "texte": "PAS DE MENTAL/FF PLAYER",
    "LVL1" : "HUMEUR CHANGEANTE",
    "LVL2" : "MENTALEMENT FRAGILE",
    "LVL3" : "A FLEUR DE PEAU",
    "LVL4" : "'FF' CHAT 3MIN" 
  },
  {
    "id": "8",
    "texte": "RAGEQUIT/NOUVEAU COMPTE",
  },
  {
    "id": "9",
    "texte": "BLAME SES ALLIÉS",
  },
  {
    "id": "10",
    "texte": "MÉRITE SON BAN",
  }
];

const listTwo = [
  {
    "id": "11",
    "texte": "TEAM PLAYER",
  },
  {
    "id": "12",
    "texte": "BON SIGNAUX",
  },
  {
    "id": "13",
    "texte": "BON COÉQUIPIER",
  },
  {
    "id": "14",
    "texte": "POSTE GAP",
  },
  {
    "id": "15",
    "texte": "LAISSE LES RESSOURCES",
  },
  {
    "id": "16",
    "texte": "RESPECT LE FORESTIER",
  },
  {
    "id": "17",
    "texte": "N'ABANDONNE JAMAIS !",
  },
  {
    "id": "18",
    "texte": "FAIT RAGEQUIT",
  },
  {
    "id": "19",
    "texte": "NE BLAME PERSONNE",
  },
  {
    "id": "20",
    "texte": "FAISEUR DE VICTOIRE",
  }
]


const badgeOne = document.querySelector('#listOne');
const badgeTwo = document.querySelector('#listTwo');

const spanCount = document.getElementsByClassName('badge-count');
const noteAuto = document.getElementById('list-auto');

// VARIABLES

// FUNCTIONS



function searchProfile() {
  // Redirige vers la deuxième page
  window.location.href = "pages/page1.html";
}

function creatProfil() {
  // Redirige vers la deuxième page
  window.location.href = "page2.html";
}

function displayBadgesOne() {
  listOne.forEach((badge) => {
    const li      = document.createElement("li");
    const auto    = document.createElement("li");
    const autoTwo = document.createElement("li");
    const autoTree = document.createElement("li");
    const autoFour = document.createElement("li");
    const span    = document.createElement("span");

    let clickCount = 0;
    let isLocked = false; 

    span.classList.add("badge-count");

    auto.textContent = badge.LVL1
    autoTwo.textContent = badge.LVL2
    autoTree.textContent = badge.LVL3
    autoFour.textContent = badge.LVL4
    
    li.textContent = badge.texte;
    span.textContent = clickCount;

    li.appendChild(span);
    badgeOne.appendChild(li);

    li.addEventListener("click", () => {
      if (!isLocked) { // Vérifier si le clic est autorisé
        clickCount++;
        sendClickRequest(badge.texte, clickCount);
        span.textContent = clickCount;

        if (clickCount > 5 && badge.LVL1) {
          noteAuto.appendChild(auto);

          if (clickCount > 10 && badge.LVL2) {
            noteAuto.removeChild(auto);
            noteAuto.appendChild(autoTwo);

            if (clickCount > 15 && badge.LVL3) {
              noteAuto.removeChild(autoTwo);
              noteAuto.appendChild(autoTree);

              if (clickCount > 20 && badge.LVL4) {
                noteAuto.removeChild(autoTree);
                noteAuto.appendChild(autoFour);
              }
            }
          }
        }

        isLocked = true; // Verrouiller le clic
        setTimeout(() => {
          isLocked = false; // Déverrouiller le clic après 5 secondes
        }, 50);
      }
    });
  });
}

function displayBadgeTwo() {
  listTwo.forEach((badge) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("badge-count");

    let clickCount = 0;
    let isLocked = false; // Ajout de la variable isLocked

    li.textContent = badge.texte;
    span.textContent = clickCount;

    li.appendChild(span);
    badgeTwo.appendChild(li);

    li.addEventListener("click", () => {
      if (!isLocked) { // Vérifier si le clic est autorisé
        clickCount++;
        sendClickRequest(badge.texte, clickCount);
        span.textContent = clickCount;

        isLocked = true; // Verrouiller le clic
        setTimeout(() => {
          isLocked = false; // Déverrouiller le clic après 5 secondes
        }, 50);
      }
    });
  });
}




function sendClickRequest(badgeText, clickCount) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "url_de_votre_endpoint", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  const data = {
    badgeText: badgeText,
    clickCount: clickCount
  };
  const jsonData = JSON.stringify(data);
  xhr.send(jsonData);
}




// MAIN

displayBadgesOne();
displayBadgeTwo();