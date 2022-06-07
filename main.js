/** An array of the mortal kombat 11 ultimate roster. */
const kombatants = [
  "rambo",
  "rain",
  "mileena",
  "robocop",
  "sheeva",
  "fujin",
  "spawn",
  "the-joker",
  "jade",
  "erron-black",
  "kabal",
  "kung-lao",
  "sub-zero",
  "scorpion",
  "cetrion",
  "frost",
  "baraka",
  "raiden",
  "shao-kahn",
  "d-vorah",
  "jax-briggs",
  "geras",
  "kano",
  "terminator",
  "nightwolf",
  "cassie-cage",
  "kotal-kahn",
  "skarlet",
  "sonya-blade",
  "shang-tsung",
  "johnny-cage",
  "noob-saibot",
  "kollector",
  "kitana",
  "jacqui-briggs",
  "liu-kang",
  "sindel",
];

/**
 * Generates a rosters worth of mortal kombat 11 character html images and injects them
 * inside of the #character-pool div element.
 * @param {string[]} kombatantsArr
 */

function generateKombatants(kombatantsArr) {
  const characterPool = document.querySelector("#character-pool");

  kombatantsArr.map((kombatant) => {
    const kombatantImgWrapper = document.createElement("div");
    const kombatantImg = document.createElement("img");

    kombatantImgWrapper.setAttribute("class", "character-img-wrapper");
    kombatantImg.setAttribute(
      "src",
      `https://cdn-prod.mortalkombat.com/roster/${kombatant}/thumb-p.png`
    );
    kombatantImg.setAttribute("alt", kombatant);
    kombatantImg.setAttribute("id", kombatant);
    kombatantImg.setAttribute("class", "character-img");
    kombatantImg.setAttribute("draggable", "true");

    kombatantImg.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", kombatant);
    });

    kombatantImgWrapper.appendChild(kombatantImg);
    characterPool.appendChild(kombatantImgWrapper);
  });
}

generateKombatants(kombatants);

/**
 * Makes all elements with the class .drop-zone have a dragover event listener.
 * */

function configureTierSectionDropZones() {
  for (const dropZone of document.querySelectorAll(".tier-section")) {
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();

      dropZone.classList.add("tier-section--over");
    });

    dropZone.addEventListener("drop", (event) => {
      event.preventDefault();

      const droppedElementId = event.dataTransfer.getData("text/plain");
      const droppedElement = document.getElementById(droppedElementId);

      dropZone.appendChild(droppedElement);
    });
  }
}

configureTierSectionDropZones();
