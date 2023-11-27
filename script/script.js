"use strict";

// CONSTANTS

const negativeItems = document.querySelectorAll("#negative li");
const positiveItems = document.querySelectorAll("#positive li");

const negativeCanClick = Array.from(negativeItems).map(() => true);
const positiveCanClick = Array.from(positiveItems).map(() => true);

// FUNCTIONS

//////////////////////////// EGO NOTE///////////////////////////
function egoLevelOne() {
  const ego = document.getElementById("22");
  const clickCount = parseInt(ego.textContent.trim(), 10);

  if (clickCount > 5) {
    const egoOne = document.getElementsByClassName("ego-one")[0];
    egoOne.style.display = "flex";
  } 
}

function egoLevelTwo() {
  const ego = document.getElementById("22");
  const clickCount = parseInt(ego.textContent.trim(), 10);

  if (clickCount > 10) {
    const egoOne = document.getElementsByClassName("ego-one")[0];
    egoOne.style.display = "none";
    const egoTwo = document.getElementsByClassName("ego-two")[0];
    egoTwo.style.display = "flex";
  }
}

function egoLevelThree() {
  const ego = document.getElementById("22");
  const clickCount = parseInt(ego.textContent.trim(), 10);
  if (clickCount > 15) {
    const egoTwo = document.getElementsByClassName("ego-two")[0];
    egoTwo.style.display = "none";
    const egoThree = document.getElementsByClassName("ego-three")[0];
    egoThree.style.display = "flex";
  }
}

function egoLevelFour() {
  const ego = document.getElementById("22");
  const clickCount = parseInt(ego.textContent.trim(), 10);
  if (clickCount > 20) {
    const egoThree = document.getElementsByClassName("ego-three")[0];
    egoThree.style.display = "none";
    const egoFour = document.getElementsByClassName("ego-four")[0];
    egoFour.style.display = "flex";
  }
}

function egoNote() {
  egoLevelOne();
  egoLevelTwo();
  egoLevelThree();
  egoLevelFour();
}
/////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// ABUSE NOTE ////////////////////////////////////////

function abuseLevelOne() {
  const abuse = document.getElementById("20");
  const clickCount = parseInt(abuse.textContent.trim(), 10);
  if (clickCount > 5) {
    const egoOne = document.getElementsByClassName("abuse-one")[0];
    egoOne.style.display = "flex";
  }
}

function abuseLevelTwo() {
  const abuse = document.getElementById("20");
  const clickCount = parseInt(abuse.textContent.trim(), 10);
  if (clickCount > 10) {
    const egoOne = document.getElementsByClassName("abuse-one")[0];
    egoOne.style.display = "none";
    const egoTwo = document.getElementsByClassName("abuse-two")[0];
    egoTwo.style.display = "flex";
  }
}

function abuseLevelThree() {
  const abuse = document.getElementById("20");
  const clickCount = parseInt(abuse.textContent.trim(), 10);
  if (clickCount > 15) {
    const egoTwo = document.getElementsByClassName("abuse-two")[0];
    egoTwo.style.display = "none";
    const egoThree = document.getElementsByClassName("abuse-three")[0];
    egoThree.style.display = "flex";
  }
}

function abuseLevelFour() {
  const abuse = document.getElementById("20");
  const clickCount = parseInt(abuse.textContent.trim(), 10);
  if (clickCount > 20) {
    const egoThree = document.getElementsByClassName("abuse-three")[0];
    egoThree.style.display = "none";
    const egoFour = document.getElementsByClassName("abuse-four")[0];
    egoFour.style.display = "flex";
  }
}

function abuseNote() {
  abuseLevelOne();
  abuseLevelTwo();
  abuseLevelThree();
  abuseLevelFour();
}

//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// MENTAL NOTE ////////////////////////////////

function mentalLevelOne() {
  const mental = document.getElementById("21");
  const clickCount = parseInt(mental.textContent.trim(), 10);
  if (clickCount > 5) {
    const mentalOne = document.getElementsByClassName("mental-one")[0];
    mentalOne.style.display = "flex";
  }
}

function mentalLevelTwo() {
  const mental = document.getElementById("21");
  const clickCount = parseInt(mental.textContent.trim(), 10);
  if (clickCount > 10) {
    const mentalOne = document.getElementsByClassName("mental-one")[0];
    mentalOne.style.display = "none";
    const mentalTwo = document.getElementsByClassName("mental-two")[0];
    mentalTwo.style.display = "flex";
  }
}

function mentalLevelThree() {
  const mental = document.getElementById("21");
  const clickCount = parseInt(mental.textContent.trim(), 10);
  if (clickCount > 15) {
    const mentalTwo = document.getElementsByClassName("mental-two")[0];
    mentalTwo.style.display = "none";
    const mentalThree = document.getElementsByClassName("mental-three")[0];
    mentalThree.style.display = "flex";
  }
}

function mentalLevelFour() {
  const mental = document.getElementById("21");
  const clickCount = parseInt(mental.textContent.trim(), 10);
  if (clickCount > 20) {
    const mentalThree = document.getElementsByClassName("mental-three")[0];
    mentalThree.style.display = "none";
    const mentalFour = document.getElementsByClassName("mental-four")[0];
    mentalFour.style.display = "flex";
  }
}

function mentalNote() {
  mentalLevelOne();
  mentalLevelTwo();
  mentalLevelThree();
  mentalLevelFour();
}

////////////////////////////////////////////////////////////////////////////

/////////////////////////////// GLOBAL NOTATION //////////////////////////////

function globalAutoNote() {
  egoNote();
  abuseNote();
  mentalNote();
}

///////////////////////////////////////////////////////////////////////////////


function negativeCount() {
  negativeItems.forEach((item, index) => {
    const span = item.querySelector("span");
    let count = 0;
    span.textContent = count;

    item.addEventListener("click", () => {
      if (negativeCanClick[index]) {
        count++;
        span.textContent = count;
        const data = { id: item.id, count };
        
        sendClickData(data);
        globalAutoNote();

        negativeCanClick[index] = false;

        setTimeout(() => {
          negativeCanClick[index] = true;
        }, 1);
      }
    });
  });
}



function positiveCount() {
  positiveItems.forEach((item, index) => {
    const span = item.querySelector("span");
    let count = 5;
    span.textContent = count;

    item.addEventListener("click", () => {
      if (positiveCanClick[index]) {
        count++;
        span.textContent = count;
        const data = { id: item.id, count };

        sendClickData(data);
        
        positiveCanClick[index] = false;

        setTimeout(() => {
          positiveCanClick[index] = true;
        }, 1);
      }
    });
  });
}






function sendClickData(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/click", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}


function searchProfile() {
  // Redirige vers la deuxième page
  window.location.href = "pages/page1.html";
}

function creatProfil() {
  // Redirige vers la deuxième page
  window.location.href = "page2.html";
}



// MAIN
negativeCount();
positiveCount();




