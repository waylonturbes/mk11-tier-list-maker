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

function generateKombatants(kombatantsArr) {
  const characterPool = document.querySelector("#character-pool");

  kombatantsArr.map((kombatant) => {
    const kombatantImg = document.createElement("img");
    kombatantImg.setAttribute(
      "src",
      `https://cdn-prod.mortalkombat.com/roster/${kombatant}/thumb-p.png`
    );
    kombatantImg.setAttribute("alt", kombatant);
    kombatantImg.setAttribute("id", kombatant);
    kombatantImg.setAttribute("class", "character-img");
    kombatantImg.setAttribute("draggable", "true");

    characterPool.appendChild(kombatantImg);
  });
}

generateKombatants(kombatants);
