/* -------------------------------------------------------------------------- */
/**            Laver en Team Class til at holde styr på hvert team            */
/* -------------------------------------------------------------------------- */
class Team {
  /* ------------------------------- Properties ------------------------------- */
  playerOne;
  playerTwo;
  teamName;
  dailyPoint;
  totalPoint;
  /* ------------------------------- Constructor ------------------------------ */
  constructor(playerOne, playerTwo, teamName, dailyPoint, totalPoint) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.teamName = teamName;
    this.dailyPoint = dailyPoint;
    this.totalPoint = totalPoint;
  }
  /* --------------------------------- Methods -------------------------------- */
  /* ---------------- Tilføjer holdets navnebjælke til spillet  --------------- */
  addTeam($) {
    const addPlayer = document.createElement("div");

    addPlayer.className = "player";

    document.querySelector(".dart-body").appendChild(addPlayer);

    addPlayer.innerHTML = `<span class="empty"><input class='playerName' value='${this.teamName}'/>
      </span>
      `;
    //HER er det
    /* --------------- Lopper igennem 11 for at lave 11 scoreboxes --------------- */
    for (let i = 0; i < 11; i++) {
      const checkBoxes = document.createElement("span");
      checkBoxes.className = "check";
      document.querySelectorAll(".player")[$].appendChild(checkBoxes);
      checkBoxes.innerHTML = `<input type="checkbox"><input type="checkbox"/><input type="checkbox"/>`;
    }
    /* ------------------- Giver startspiller class på bjælke ------------------- */
    const nextPlayer = document.createElement("div");
    nextPlayer.className = "nextBut";
    document.querySelectorAll(".player")[$].appendChild(nextPlayer);
    nextPlayer.innerHTML = `<button class='next'>Næste spiller</button>`;
  }
  /* ---------------------- Creating HistorikInformation ---------------------- */
  pointTable() {
    let storagePlayer = JSON.parse(localStorage.history);
    /* const yearPoints = document.createElement("p");
    yearPoints.innerHTML = `${this.teamName}<br>${this.totalPoint}`;
    document.querySelector(".yearPoints").appendChild(yearPoints); */
    //
    const dayPoints = document.createElement("p");
    document.querySelector(".dayPoints").appendChild(dayPoints);
    dayPoints.innerHTML = `${this.teamName}<br>${this.dailyPoint}`;
  }
}
JesperJacob = new Team("Jesper", "Jacob", "Jesper & Jacob", 0, 17);
LarsRazzer = new Team("Lars", "Razzer", "Lars & Razzer", 0, 15);
MortenTorben = new Team("Morten", "Torben", "Morten & Torben", 0, 16);

/* -------------------------------------------------------------------------- */
/**                   Class til at give selve spillet værdier                  */
/* -------------------------------------------------------------------------- */
class Game extends Team {
  /* ------------------------------- Properties ------------------------------- */
  gameRound;
  round;
  currentTeam;
  place;
  /* ------------------------------- Constructor ------------------------------ */
  constructor(
    playerOne,
    playerTwo,
    teamName,
    gameRound,
    round,
    currentTeam,
    place
  ) {
    super(playerOne, playerTwo, teamName);
    this.gameRound = gameRound;
    this.round = round;
    this.currentTeam = currentTeam;
    this.place = place;
  }
  teams() {
    return document.querySelectorAll(".player");
  }
  teamNames() {
    return document.querySelectorAll(".playerName");
  }
}
DartGame = new Game(
  "",
  "",
  "",
  /* gameRound  */ 2,
  /* round */ 1,
  /* currentTeam */ 0,
  /* placement  */ 1
);

/** --------------------------- Function teamOutput -------------------------- */
/* ---------------- Udregner rækkefølgen spillerne skal vises --------------- */
/* ------------------ First game sorting from Total Points ------------------ */
localS();
let team = [""];
let playerturn = [""];
let playerturn2 = [""];
function teamOutput() {
  if (DartGame.gameRound === 1) {
    let storagePlayer = JSON.parse(localStorage.history);
    console.log(storagePlayer[0].Ypoints);
    let lackingPlayer = Math.max(
      storagePlayer[0].Ypoints,
      storagePlayer[1].Ypoints,
      storagePlayer[2].Ypoints
    );
    let leadingPlayer = Math.min(
      storagePlayer[0].Ypoints,
      storagePlayer[1].Ypoints,
      storagePlayer[2].Ypoints
    );
    //
    /* ---------------------------- Jesper & Jacob svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[0].Ypoints &&
      leadingPlayer === storagePlayer[1].Ypoints
    ) {
      team = [JesperJacob.teamName, MortenTorben.teamName, LarsRazzer.teamName];
      playerturn = [
        JesperJacob.playerOne,
        MortenTorben.playerOne,
        LarsRazzer.playerOne,
      ];
      playerturn2 = [
        JesperJacob.playerTwo,
        MortenTorben.playerTwo,
        LarsRazzer.playerTwo,
      ];
      JesperJacob.addTeam(0);
      MortenTorben.addTeam(1);
      LarsRazzer.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[0].Ypoints &&
      leadingPlayer === storagePlayer[2].Ypoints
    ) {
      team = [JesperJacob.teamName, LarsRazzer.teamName, MortenTorben.teamName];
      playerturn = [
        JesperJacob.playerOne,
        LarsRazzer.playerOne,
        MortenTorben.playerOne,
      ];
      playerturn2 = [
        JesperJacob.playerTwo,
        LarsRazzer.playerTwo,
        MortenTorben.playerTwo,
      ];
      JesperJacob.addTeam(0);
      LarsRazzer.addTeam(1);
      MortenTorben.addTeam(2);
      return;
    }
    /* ---------------------------- Lars & Razzer svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[1].Ypoints &&
      leadingPlayer === storagePlayer[0].Ypoints
    ) {
      team = [LarsRazzer.teamName, MortenTorben.teamName, JesperJacob.teamName];
      playerturn = [
        LarsRazzer.playerOne,
        MortenTorben.playerOne,
        JesperJacob.playerOne,
      ];
      playerturn2 = [
        LarsRazzer.playerTwo,
        MortenTorben.playerTwo,
        JesperJacob.playerTwo,
      ];
      LarsRazzer.addTeam(0);
      MortenTorben.addTeam(1);
      JesperJacob.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[1].Ypoints &&
      leadingPlayer === storagePlayer[2].Ypoints
    ) {
      team = [LarsRazzer.teamName, JesperJacob.teamName, MortenTorben.teamName];
      playerturn = [
        LarsRazzer.playerOne,
        JesperJacob.playerOne,
        MortenTorben.playerOne,
      ];
      playerturn2 = [
        LarsRazzer.playerTwo,
        JesperJacob.playerTwo,
        MortenTorben.playerTwo,
      ];
      LarsRazzer.addTeam(0);
      JesperJacob.addTeam(1);
      MortenTorben.addTeam(2);
      return;
    }
    /* ---------------------------- Morten & Torben svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[2].Ypoints &&
      leadingPlayer === storagePlayer[0].Ypoints
    ) {
      team = [MortenTorben.teamName, LarsRazzer.teamName, JesperJacob.teamName];
      playerturn = [
        MortenTorben.playerOne,
        LarsRazzer.playerOne,
        JesperJacob.playerOne,
      ];
      playerturn2 = [
        MortenTorben.playerTwo,
        LarsRazzer.playerTwo,
        JesperJacob.playerTwo,
      ];
      MortenTorben.addTeam(0);
      LarsRazzer.addTeam(1);
      JesperJacob.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[2].Ypoints &&
      leadingPlayer === storagePlayer[1].Ypoints
    ) {
      team = [MortenTorben.teamName, JesperJacob.teamName, LarsRazzer.teamName];
      playerturn = [
        MortenTorben.playerOne,
        JesperJacob.playerOne,
        LarsRazzer.playerOne,
      ];
      playerturn2 = [
        MortenTorben.playerTwo,
        JesperJacob.playerTwo,
        LarsRazzer.playerTwo,
      ];
      MortenTorben.addTeam(0);
      JesperJacob.addTeam(1);
      LarsRazzer.addTeam(2);
      return;
    }
  } else if (DartGame.gameRound >= 2) {
    let storagePlayer = JSON.parse(localStorage.history);
    let lackingPlayer = Math.max(
      storagePlayer[0].points,
      storagePlayer[1].points,
      storagePlayer[2].points
    );
    let leadingPlayer = Math.min(
      storagePlayer[0].points,
      storagePlayer[1].points,
      storagePlayer[2].points
    );
    //
    /* ---------------------------- Jesper & Jacob svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[0].points &&
      leadingPlayer === storagePlayer[1].points
    ) {
      team = [JesperJacob.teamName, MortenTorben.teamName, LarsRazzer.teamName];
      playerturn = [
        JesperJacob.playerOne,
        MortenTorben.playerOne,
        LarsRazzer.playerOne,
      ];
      playerturn2 = [
        JesperJacob.playerTwo,
        MortenTorben.playerTwo,
        LarsRazzer.playerTwo,
      ];

      JesperJacob.addTeam(0);
      MortenTorben.addTeam(1);
      LarsRazzer.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[0].points &&
      leadingPlayer === storagePlayer[2].points
    ) {
      team = [JesperJacob.teamName, LarsRazzer.teamName, MortenTorben.teamName];
      playerturn = [
        JesperJacob.playerOne,
        LarsRazzer.playerOne,
        MortenTorben.playerOne,
      ];
      playerturn2 = [
        JesperJacob.playerTwo,
        LarsRazzer.playerTwo,
        MortenTorben.playerTwo,
      ];
      JesperJacob.addTeam(0);
      LarsRazzer.addTeam(1);
      MortenTorben.addTeam(2);
      return;
    }
    /* ---------------------------- Lars & Razzer svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[1].points &&
      leadingPlayer === storagePlayer[0].points
    ) {
      team = [LarsRazzer.teamName, MortenTorben.teamName, JesperJacob.teamName];
      playerturn = [
        LarsRazzer.playerOne,
        MortenTorben.playerOne,
        JesperJacob.playerOne,
      ];
      playerturn2 = [
        LarsRazzer.playerTwo,
        MortenTorben.playerTwo,
        JesperJacob.playerTwo,
      ];
      LarsRazzer.addTeam(0);
      MortenTorben.addTeam(1);
      JesperJacob.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[1].points &&
      leadingPlayer === storagePlayer[2].points
    ) {
      team = [LarsRazzer.teamName, JesperJacob.teamName, MortenTorben.teamName];
      playerturn = [
        LarsRazzer.playerOne,
        JesperJacob.playerOne,
        MortenTorben.playerOne,
      ];
      playerturn2 = [
        LarsRazzer.playerTwo,
        JesperJacob.playerTwo,
        MortenTorben.playerTwo,
      ];
      LarsRazzer.addTeam(0);
      JesperJacob.addTeam(1);
      MortenTorben.addTeam(2);
      return;
    }
    /* ---------------------------- Morten & Torben svagest --------------------------- */
    if (
      lackingPlayer === storagePlayer[2].points &&
      leadingPlayer === storagePlayer[0].points
    ) {
      team = [MortenTorben.teamName, LarsRazzer.teamName, JesperJacob.teamName];
      playerturn = [
        MortenTorben.playerOne,
        LarsRazzer.playerOne,
        JesperJacob.playerOne,
      ];
      playerturn2 = [
        MortenTorben.playerTwo,
        LarsRazzer.playerTwo,
        JesperJacob.playerTwo,
      ];
      MortenTorben.addTeam(0);
      LarsRazzer.addTeam(1);
      JesperJacob.addTeam(2);
      return;
    } else if (
      lackingPlayer === storagePlayer[2].points &&
      leadingPlayer === storagePlayer[1].points
    ) {
      team = [MortenTorben.teamName, JesperJacob.teamName, LarsRazzer.teamName];
      playerturn = [
        MortenTorben.playerOne,
        JesperJacob.playerOne,
        LarsRazzer.playerOne,
      ];
      playerturn2 = [
        MortenTorben.playerTwo,
        JesperJacob.playerTwo,
        LarsRazzer.playerTwo,
      ];
      MortenTorben.addTeam(0);
      JesperJacob.addTeam(1);
      LarsRazzer.addTeam(2);
      return;
    }
  }
}
/* ------------------------------ Output Teams ------------------------------ */
teamOutput();

/* -------------------------------------------------------------------------- */
/**                            Start knap Function                            */
/* -------------------------------------------------------------------------- */
/* ------------------------- Lav næste spiller knap ------------------------- */
let activeTeam = 0;
document.querySelector(".start").addEventListener("click", () => {
  document.querySelector(".start").style.display = "none";
  document.querySelector(".highScore").style.display = "block";
  document.querySelector(".restart").style.display = "block";
  DartGame.teams()[activeTeam].classList.add("activePlayer");
  newPlayer();
  sidePanel();
});
/* -------------------------------------------------------------------------- */
/**                         Næste spiller knap Function                       */
/* -------------------------------------------------------------------------- */
let nextButton = document.querySelectorAll(".next");

for (x = 0; x < DartGame.teams().length; x++) {
  let storagePlayer = JSON.parse(localStorage.history);
  nextButton[x].addEventListener("click", () => {
    let notWinners = Array.from(DartGame.teams()).filter(
      ({ classList }) => !classList.contains("winPlayer")
    );
    console.log("next:", notWinners.length);
    if (notWinners.length != 1) {
      if (activeTeam === DartGame.teams().length - 1) {
        DartGame.teams()[2].classList.remove("activePlayer");
        DartGame.teams()[0].classList.add("activePlayer");
        activeTeam = 0;
        DartGame.currentTeam = 0;
        DartGame.round++;
        newPlayer();
        sidePanel();
        return;
      }
      DartGame.teams()[activeTeam].classList.remove("activePlayer");
      activeTeam++;
      DartGame.currentTeam++;
      newPlayer();
      DartGame.teams()[activeTeam].classList.add("activePlayer");
      sidePanel();
    } else {
      for (x = 0; x < notWinners.length; x++) {
        notWinners[x].classList.add("winPlayer");
        notWinners[x].classList.add("thirdPlace");
        console.log(document.querySelector(".thirdPlace .playerName").value);
        if (
          document.querySelector(".thirdPlace .playerName").value ===
          JesperJacob.teamName
        ) {
          JesperJacob.dailyPoint = storagePlayer[0].points + DartGame.place;
          console.log(`JJ ${JesperJacob.dailyPoint} point`);
        } else if (
          document.querySelector(".thirdPlace .playerName").value ===
          LarsRazzer.teamName
        ) {
          LarsRazzer.dailyPoint = storagePlayer[1].points + DartGame.place;
          console.log(`LZ ${LarsRazzer.dailyPoint} point`);
        } else if (
          document.querySelector(".thirdPlace .playerName").value ===
          MortenTorben.teamName
        ) {
          MortenTorben.dailyPoint = storagePlayer[2].points + DartGame.place;
          console.log(`MT ${MortenTorben.dailyPoint} point`);
        }
        DartGame.teams()[0].classList.remove("activePlayer");
        DartGame.teams()[1].classList.remove("activePlayer");
        DartGame.teams()[2].classList.remove("activePlayer");
        let placering = document.createElement("p");
        placering.classList.add("placeReset");
        notWinners[x].appendChild(placering);
        placering.innerHTML = `${DartGame.place}. pladsen <br> <button class='openPlayer'>åben spiller</button>`;
        celebrate();
        setTimeout(() => {
          celebrate();
        }, "1000");
        sidePanel();
        logScore();
        /*  DartGame.place++; */

        // make this look like the others
        // fullPlate(notWinners[x].innerHTML);
      }
      localStorage.clear();
      localS();
    }
  });
}
/* -------------------------------------------------------------------------- */
/**                        Næste spiller aktiv Function                       */
/* -------------------------------------------------------------------------- */
function newPlayer() {
  let sec = 3;
  let timer = setInterval(function () {
    document.querySelector(".timer").innerHTML = `om : ${sec}`;
    if (sec > 0) {
      sec--;
    } else {
      sec = 3;
      clearInterval(timer);
    }
  }, 750);
  if (DartGame.round % 2 == 0) {
    Swal.fire({
      position: "middle",
      icon: "success",
      title: `<h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
        DartGame.teamNames()[activeTeam].value
      }'s tur</h1><br><b style='font-size: 4rem;'>${
        playerturn2[activeTeam]
      }</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2> `,
      showConfirmButton: false,
      timer: 3000,
    });
    return;
  }
  Swal.fire({
    position: "middle",
    icon: "success",
    title: `<h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
      DartGame.teamNames()[activeTeam].value
    }'s tur</h1><br><b style='font-size: 4rem;'>${
      playerturn[activeTeam]
    }</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2> `,
    showConfirmButton: false,
    timer: 3000,
  });
}
function sidePanel() {
  let team = document.querySelector(".currentPlayer");
  let index = document.querySelector(".round");

  // Hvis teamname = smthing / playerone = smthing
  let points = document.querySelectorAll(".point");
  points.forEach((point) => {
    point.remove();
  });
  document.querySelector(".pointIndicator").innerHTML = "";

  if (DartGame.round % 2 == 0) {
    team.innerHTML = `Nuværende Hold: <br><b>${
      DartGame.teamNames()[activeTeam].value
    } </b></b><br>Spillers tur: <br><b>${playerturn2[activeTeam]}`;
    index.innerHTML = `Spil: <br><b>${DartGame.gameRound}</b><br>Runde: <br><b>${DartGame.round}</b>`;
    console.log("hh");
    return;
    // Hvis spille ikke startet vis point, hvis spil startet ikke vis. (fjern/vis div)
  }
  team.innerHTML = `Nuværende Hold: <br><b>${
    DartGame.teamNames()[activeTeam].value
  } </b></b><br>Spillers tur: <br><b>${playerturn[activeTeam]}`;
  index.innerHTML = `Spil: <br><b>${DartGame.gameRound}</b><br>Runde: <br><b>${DartGame.round}</b>`;
  console.log("hh");
}

/* -------------------------------------------------------------------------- */
/**                      checkBox function og inddeling                       */
/* -------------------------------------------------------------------------- */
let boxes = document.querySelectorAll(".check input");
let c1 = 0;
let c2 = 0;
let c3 = 0;
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    fullRow();
    if (activeTeam === 0) {
      let storagePlayer = JSON.parse(localStorage.history);
      if (box.checked) {
        c1++;
        if (c1 === 3) {
          team = DartGame.teamNames()[activeTeam].value;
          if (DartGame.teamNames()[activeTeam].value === JesperJacob.teamName) {
            if (storagePlayer[0].points === 0) {
              JesperJacob.dailyPoint = DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr1`);
            } else if (storagePlayer[0].points > 0) {
              JesperJacob.dailyPoint = storagePlayer[0].points + DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName
          ) {
            if (storagePlayer[1].points === 0) {
              LarsRazzer.dailyPoint = DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr1`);
            } else if (storagePlayer[1].points > 0) {
              LarsRazzer.dailyPoint = storagePlayer[1].points + DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === MortenTorben.teamName
          ) {
            if (storagePlayer[2].points === 0) {
              MortenTorben.dailyPoint = DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr1`);
            } else if (storagePlayer[2].points > 0) {
              MortenTorben.dailyPoint =
                storagePlayer[2].points + DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr2`);
            }
          }

          logScore();
          fullPlate(team);

          //
        }
        return;
      }
      /* ----------------- Minuser værdi hvis man unchecker en box ---------------- */
      c1--;
    }
    //
    else if (activeTeam === 1) {
      console.log("p2 active");
      let storagePlayer = JSON.parse(localStorage.history);
      if (box.checked) {
        c2++;
        if (c2 === 3) {
          team = DartGame.teamNames()[activeTeam].value;
          if (DartGame.teamNames()[activeTeam].value === JesperJacob.teamName) {
            if (storagePlayer[0].points === 0) {
              JesperJacob.dailyPoint = DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr1`);
            } else if (storagePlayer[0].points > 0) {
              JesperJacob.dailyPoint = storagePlayer[0].points + DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName
          ) {
            if (storagePlayer[1].points === 0) {
              LarsRazzer.dailyPoint = DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr1`);
            } else if (storagePlayer[1].points > 0) {
              LarsRazzer.dailyPoint = storagePlayer[1].points + DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === MortenTorben.teamName
          ) {
            if (storagePlayer[2].points === 0) {
              MortenTorben.dailyPoint = DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr1`);
            } else if (storagePlayer[2].points > 0) {
              MortenTorben.dailyPoint =
                storagePlayer[2].points + DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr2`);
            }
          }

          logScore();
          fullPlate(team);
        }
        return;
      }
      c2--;
    } else if (activeTeam === 2) {
      let storagePlayer = JSON.parse(localStorage.history);
      console.log("p3 active");
      if (box.checked) {
        c3++;
        if (c3 === 3 /* 33 */) {
          team = DartGame.teamNames()[activeTeam].value;
          if (DartGame.teamNames()[activeTeam].value === JesperJacob.teamName) {
            if (storagePlayer[0].points === 0) {
              JesperJacob.dailyPoint = DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr1`);
            } else if (storagePlayer[0].points > 0) {
              JesperJacob.dailyPoint = storagePlayer[0].points + DartGame.place;
              console.log(`JJ ${storagePlayer[0].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName
          ) {
            if (storagePlayer[1].points === 0) {
              LarsRazzer.dailyPoint = DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr1`);
            } else if (storagePlayer[1].points > 0) {
              LarsRazzer.dailyPoint = storagePlayer[1].points + DartGame.place;
              console.log(`LZ ${storagePlayer[1].points} point nr2`);
            }
          } else if (
            DartGame.teamNames()[activeTeam].value === MortenTorben.teamName
          ) {
            if (storagePlayer[2].points === 0) {
              MortenTorben.dailyPoint = DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr1`);
            } else if (storagePlayer[2].points > 0) {
              MortenTorben.dailyPoint =
                storagePlayer[2].points + DartGame.place;
              console.log(`MT ${storagePlayer[2].points} point nr2`);
            }
          }

          logScore();
          fullPlate(team);
        }
        return;
      }
      c3--;
    }
  });
});
/* -------------------------------------------------------------------------- */
/**                           Fuld Plade Function                             */
/* -------------------------------------------------------------------------- */
function fullPlate(team) {
  DartGame.teams()[activeTeam].classList.add("winPlayer");
  let placering = document.createElement("p");
  placering.classList.add("placeReset");
  DartGame.teams()[activeTeam].appendChild(placering);
  placering.innerHTML = `${DartGame.place}. pladsen <br> <button class='openPlayer'>åben spiller</button>`;
  Swal.fire(
    `<img src='img/trophy.gif'><p class='winRespond'><b>Tillykke</b><b><br style='margin: .5em;'> ${team}!</b><br><br>i tog ${DartGame.place} pladsen<br><br>efter ${DartGame.round} Runde </p>`,
    "",
    ""
  );
  celebrate();
  setTimeout(() => {
    celebrate();
  }, "1000");

  DartGame.place++;
}

/* -------------------------------------------------------------------------- */
/**                            Fuld Række Function                            */
/* -------------------------------------------------------------------------- */
let rows = document.querySelectorAll(".check");
let f = -2;
function fullRow() {
  // + i med 3 for hver tredje check box
  for (i = 0; i < boxes.length; i += 3) {
    //box er i
    b = i;
    //Tager et tal og plusser med 2;
    f++;
    f++;
    //Minuser med 3 box for at få input 1 af row;
    r = b - f;
    if (boxes[b].checked && boxes[b + 1].checked && boxes[b + 2].checked) {
      //tilføj til denne row
      rows[r].classList.add("scored");
    } else {
      rows[r].classList.remove("scored");
    }
  }

  //Sætter f til -2 hver gang en række er kørt for at genstarte værdien
  f = -2;
}

function celebrate() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();

  //Confetti
  //Colors
  jsConfetti.addConfetti({
    emojis: ["🎯", "🎯", "🎯", "🎯", "🎯", "🎯"],
    emojiSize: 50,
    confettiNumber: 20,
  });
}

const date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.querySelector(
  ".date"
).innerHTML = `År: <b>${year}</b> Dato: <b>${day}-${month}</b> | Klokken <b>${h}:${m}</b>`;

let pointTable = document.querySelector(".historik");
document.querySelector(".log").addEventListener("click", () => {
  JesperJacob.pointTable();
  pointTable.classList.add("ani");
  pointTable.classList.remove("aniOut");
});

document.querySelector(".exitLog").addEventListener("click", () => {
  pointTable.classList.add("aniOut");
  pointTable.classList.remove("ani");
});

// CodingMaster must help
function localS() {
  // makes the historry array in the scope
  let historyArray = [];
  let historyJSON = localStorage.getItem("history");
  // if exists append player or add to points
  if (historyJSON) {
    historyArray = JSON.parse(historyJSON);
    let historikSpillerOne = historyArray.find(
      (x) => x["teamname"] == this.JesperJacob.teamName,
      (y) => y["points"] == this.JesperJacob.dailyPoint,
      (z) => z["Ypoints"] == this.JesperJacob.totalPoint
    );
    let historikSpillerTwo = historyArray.find(
      (x) => x["teamname"] == this.LarsRazzer.teamName,
      (y) => y["points"] == this.LarsRazzer.dailyPoint,
      (z) => z["Ypoints"] == this.LarsRazzer.totalPoint
    );
    let historikSpillerThree = historyArray.find(
      (x) => x["teamname"] == this.MortenTorben.teamName,
      (y) => y["points"] == this.MortenTorben.dailyPoint,
      (z) => z["Ypoints"] == this.MortenTorben.totalPoint
    );
    if (historikSpillerOne || historikSpillerTwo || historikSpillerThree) {
      /* JesperJacob.dailyPoint = DartGame.round */
    } else {
      historyArray.push({
        teamname: this.JesperJacob.teamName,
        points: this.JesperJacob.dailyPoint,
        Ypoints: this.JesperJacob.totalPoint,
        //
        teamname: this.LarsRazzer.teamName,
        points: this.LarsRazzer.dailyPoint,
        Ypoints: this.LarsRazzer.totalPoint,
        //
        teamname: this.MortenTorben.teamName,
        points: this.MortenTorben.dailyPoint,
        Ypoints: this.MortenTorben.totalPoint,
      });
    }
  } else {
    historyArray = [
      {
        teamname: this.JesperJacob.teamName,
        points: this.JesperJacob.dailyPoint,
        Ypoints: this.JesperJacob.totalPoint,
      },
      {
        teamname: this.LarsRazzer.teamName,
        points: this.LarsRazzer.dailyPoint,
        Ypoints: this.LarsRazzer.totalPoint,
      },
      {
        teamname: this.MortenTorben.teamName,
        points: this.MortenTorben.dailyPoint,
        Ypoints: this.MortenTorben.totalPoint,
      },
    ];
  }
  // always saves here
  localStorage.setItem("history", JSON.stringify(historyArray));
  document.querySelector(
    ".logOne"
  ).innerHTML = `JJ ${historyArray[0].points} Y ${historyArray[0].Ypoints}`;
  document.querySelector(
    ".logTwo"
  ).innerHTML = `LR ${historyArray[1].points} Y ${historyArray[1].Ypoints}`;
  document.querySelector(
    ".logThree"
  ).innerHTML = `MT ${historyArray[2].points} Y ${historyArray[2].Ypoints}`;
  let storagePlayer = JSON.parse(localStorage.history);
  console.log(storagePlayer[0].Ypoints);

  if (DartGame.gameRound >= 2) {
    
    for (let pn = 0; pn < 3; pn++) {
      const pointPlayer = document.createElement("div");
      pointPlayer.className = "point";
      document.querySelector(".gameInfo").appendChild(pointPlayer);
      document.querySelector(".pointIndicator").innerHTML =
        "<b>Dagens point:</b><br></br>";
      pointPlayer.innerHTML = `<p style = 'margin-bottom: .1em; margin-top: 1.2em; font-size: 1.8rem' >${storagePlayer[pn].teamname}</p><br><br><b>${historyArray[pn].points} Point</b> 
      </span>
      `;
    }
    
    
  }

  let team = document.querySelector(".currentPlayer");
  let index = document.querySelector(".round");
  /* document.querySelector(".pointIndicator").innerHTML = ""; */
  index.innerHTML = ''
  team.innerHTML = '';
  // Hvis teamname = smthing / playerone = smthing
  
}


/* ---------------------------- Jesper & Jacob svagest --------------------------- */
/* let lackingPlayer = Math.max(
  storagePlayer[0].points,
  storagePlayer[1].points,
  storagePlayer[2].points
);
let leadingPlayer = Math.min(
  storagePlayer[0].points,
  storagePlayer[1].points,
  storagePlayer[2].points
);
if (
  lackingPlayer === storagePlayer[0].points &&
  leadingPlayer === storagePlayer[1].points
) {
  team = [JesperJacob.teamName, MortenTorben.teamName, LarsRazzer.teamName];
  playerturn = [
    JesperJacob.playerOne,
    MortenTorben.playerOne,
    LarsRazzer.playerOne,
  ];
  playerturn2 = [
    JesperJacob.playerTwo,
    MortenTorben.playerTwo,
    LarsRazzer.playerTwo,
  ];

  JesperJacob.addTeam(0);
  MortenTorben.addTeam(1);
  LarsRazzer.addTeam(2);
  return;
} else if (
  lackingPlayer === storagePlayer[0].points &&
  leadingPlayer === storagePlayer[2].points
) {
  team = [JesperJacob.teamName, LarsRazzer.teamName, MortenTorben.teamName];
  playerturn = [
    JesperJacob.playerOne,
    LarsRazzer.playerOne,
    MortenTorben.playerOne,
  ];
  playerturn2 = [
    JesperJacob.playerTwo,
    LarsRazzer.playerTwo,
    MortenTorben.playerTwo,
  ];
  JesperJacob.addTeam(0);
  LarsRazzer.addTeam(1);
  MortenTorben.addTeam(2);
  return;
}
 */




















function logScore() {
  let storagePlayer = JSON.parse(localStorage.history);
  document.querySelector(".logOne").innerHTML = `JJ ${storagePlayer[0].point}`;
  document.querySelector(".logTwo").innerHTML = `LR ${storagePlayer[1].point}`;
  document.querySelector(
    ".logThree"
  ).innerHTML = `MT ${storagePlayer[2].point}`;
}

document.querySelector(".restart").addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });
  swalWithBootstrapButtons
    .fire({
      title: `<br><h5>Nyt spil med samme spillere, <br><b>klik Nyt Spil</b></br></h5><br><h5>Genstart spil og slet historik, <br><b style='color: red ' >klik Slet Spil</b></br></h5>`,
      text: ``,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Nyt Spil",
      cancelButtonText: "Slet Spil",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } else {
        localStorage.clear();
        location.reload();
      }
    });
});
/* 
function sidePanelCall() {

}
sidePanelCall() */

//sidepanel skal opdateres (dailyPoints) gg
//Genstart Knap laves (window.reload) gg

/* if (DartGame.gameRound === 1) {
  document.querySelector(".pointIndicator").innerHTML =
    "<b>Årlige point:</b><br></br>";
  pointPlayer.innerHTML = `<p style = 'margin-bottom: .1em; margin-top: 1.2em; font-size: 1.8rem' >${this.teamName}</p><br><br><b>${this.totalPoint} Point</b>
  </span>
  `;
} */












/* -------------------------------------------------------------------------- */
/*                                HighscoreSpil                               */
/* -------------------------------------------------------------------------- */
/* ------------------------- Fremviser HighscoreSpil ------------------------ */
document.querySelector(".highScore").addEventListener("click", () => {
  document.querySelector(".board").classList.add("boardShow");
  hsGameStart();
});
/* --------------------- Highscorespil informationsboks --------------------- */

function hsGameStart() {
  const highscorePlayers = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  highscorePlayers
    .fire({
      title: `<h1 style='font-size: 2.7rem;'>Velkommen til <br style='margin: 0em'> <b style='font-size: 3.5rem; '>HighScore Spil</b><h1><br><h5>Vælg holdene der skal spille mod hinanden</h5><div style='background-color: #992b2e; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${JesperJacob.playerOne} & ${JesperJacob.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div><div style='background-color: #1aa864; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${LarsRazzer.playerOne} & ${LarsRazzer.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div><div style='background-color: #992b2e; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${MortenTorben.playerOne} & ${MortenTorben.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div>`,
      text: ``,
      showCancelButton: true,
      confirmButtonText: "Start Spil",
      cancelButtonText: "Tilbage",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        startSpiller();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: `Spillet indlæses`,
          showConfirmButton: false,
          timer: 2000,
        });
       
        console.log("nyt spil");
        return;
      }
      document.querySelector(".board").classList.remove("boardShow");
      console.log("anulleret");

    });
  







    
    
    /* -------------------------------------------------------------------------- */
    /*                         Tilføj spillere click func                         */
    /* -------------------------------------------------------------------------- */
    let hsP = document.querySelectorAll(".hsPlayer");
    let hsGame = 0;
    let hsRound = 0;
    let twoPlayerC = 0;
    hsP.forEach((player, index) => {
      player.addEventListener("click", () => {
        let startPoint = [501, 501, 501];
        if (player.checked) {
          const pTable = document.createElement("div");
          pTable.className = "pTable";
          document.querySelector(".table").appendChild(pTable);
          if (index === 0) {
            if(twoPlayerC === 2){
            
              hsP[0].style.display = 'none'
              hsP[1].style.display = 'none'
              hsP[2].style.display = 'none'
              Swal.fire(`Kun to spillere er tilladt <br> klik på start spil og klik på dartskiven hvor holdets pile rammer`)
              startSpiller();
              return;
            }
            twoPlayerC++;
            console.log(`${JesperJacob.playerOne} & ${JesperJacob.playerTwo}`);
            player.style.pointerEvents = "none";
    
            pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${JesperJacob.playerOne} & ${JesperJacob.playerTwo}</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>Samlet</th>
                </tr>
                <tr>
                  
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='hsStartPoint'>${startPoint[0]}</th>
              </tr>
            </thead>
            </table>`;
            return;
          } else if (index === 1) {
            if(twoPlayerC === 2){
              hsP[0].style.display = 'none'
              hsP[1].style.display = 'none'
              hsP[2].style.display = 'none'
              Swal.fire(`Kun to spillere er tilladt <br> klik på start spil og klik på dartskiven hvor holdets pile rammer`)
              startSpiller();
              return;
            }
            twoPlayerC++;
            console.log(`${LarsRazzer.playerOne} & ${LarsRazzer.playerTwo}`);
            player.style.pointerEvents = "none";
    
            pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${LarsRazzer.playerOne} & ${LarsRazzer.playerTwo}</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>Samlet</th>
                </tr>
                <tr>
                  
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='hsStartPoint'>${startPoint[1]}</th>
              </tr>
            </thead>
            </table>`;
            return;
          }
          if(twoPlayerC === 2){
              hsP[0].style.display = 'none'
              hsP[1].style.display = 'none'
              hsP[2].style.display = 'none'
              Swal.fire(`Kun to spillere er tilladt <br> klik på start spil og klik på dartskiven hvor holdets pile rammer`)
              startSpiller();
            return;
          }
          twoPlayerC++;
          console.log(`${MortenTorben.playerOne} & ${MortenTorben.playerTwo}`);
          player.style.pointerEvents = "none";
          pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${MortenTorben.playerOne} & ${MortenTorben.playerTwo}</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>Samlet</th>
                </tr>
                <tr>
                  
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='roundHs'></th>
                  <th class='hsStartPoint'>${startPoint[2]}</th>
              </tr>
            </thead>
            </table>`;
        }
      });
    });









    /* ------------------------- Definerer startspiller ------------------------- */
    /* player + pTable1 */
    /* let hsP = document.querySelectorAll(".hsPlayer"); */
    
    let pt = 0;
    let ct = 0;
    
    function startSpiller() {
      let pT = document.querySelectorAll(".playerTable");
      pT[pt].classList.add("hsActive");
      const startHs = document.createElement("div");
      startHs.classList.add("startHs");
      document.querySelector(".table").appendChild(startHs);
      startHs.innerHTML = `<button class='startHsBut'>Start Spil</button>`;
      document.querySelector(".startHsBut").addEventListener("click", () => {
        startHsGame();
      });
    }
    function nextSpiller() {
      const cT = document.querySelectorAll(".playerHsName");
      const pT = document.querySelectorAll(".playerTable");
      const fullPoint = document.querySelectorAll(".hsStartPoint");
      if(pt <= 1){
        pT[pt].classList.remove("hsActive");
      }
      pt++;
      ct++;
      if (pt >= pT.length) {
        /* pt = 0;
        ct = 0; */
        Swal.fire(`Spillet er done ${fullPoint[0].innerHTML} `)
        return
        /* hsRound++; */
      }
      pT[pt].classList.add("hsActive");
      if(hsRound === 1){
        return;
      }
      let sec = 3;
      let timer = setInterval(function () {
        document.querySelector(".timer").innerHTML = `om : ${sec}`;
        if (sec > 0) {
          sec--;
        } else {
          sec = 3;
          clearInterval(timer);
        }
      }, 750);
      console.log(cT[pt].innerHTML);
    
    
    /*   if (pt === pT.length ) {
        Swal.fire(`adad`)
        hsRound++;
        return
      }
      if(hsRound === 1){
        Swal.fire(`adad`)
        return;
      } */
    
    
    
      /* console.log(hsRound)
      if (hsRound === pT.length) {
        hsRound = 0;
      } */
      /*  if (hsRound % 2 == 0) {
        if (ct === 0) {
          player = teamOne.playerTwo;
        } else if (ct === 1) {
          player = teamTwo.playerTwo;
        } else if (ct === 2) {
          player = teamThree.playerTwo;
        }
      } else {
        if (ct === 0) {
          player = teamOne.playerOne;
        } else if (ct === 1) {
          player = teamTwo.playerOne;
        } else if (ct === 2) {
          player = teamThree.playerOne;
        }
      } */
    
      /*  if(cT[0].innerHTML === 'Morten &amp; Torben' && cT[1].innerHTML === 'Lars &amp; Razzer'){
        let hsPlayers = [
          teamOne.playerOne,
          teamOne.playerTwo,
          teamTwo.playerOne,
          teamTwo.playerTwo,
          teamThree.playerOne,
          teamThree.playerTwo,
        ];
      }else if(cT[1].innerHTML === 'Morten &amp; Torben' && cT[1].innerHTML === 'Jesper &amp; Jacob'){} */
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `<h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${cT[pt].innerHTML}'s tur</h1><br><b style='font-size: 4rem;'>${cT[pt].innerHTML}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2>`,
        /* <h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
          DartGame.teamNames()[nx].value
        }'s tur</h1><br><b style='font-size: 4rem;'>${player}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2>  */
        showConfirmButton: false,
        timer: 3000,
      });
      collectPoints = [];
    }


    
    function startHsGame() {
      const cT = document.querySelectorAll(".playerHsName");
      let sec = 3;
      hsGame++;
      let timer = setInterval(function () {
        document.querySelector(".timer").innerHTML = `om : ${sec}`;
        if (sec > 0) {
          sec--;
        } else {
          sec = 3;
          clearInterval(timer);
        }
      }, 750);
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `<h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${cT[pt].innerHTML}'s tur</h1><br><b style='font-size: 4rem;'>${cT[pt].innerHTML}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2>`,
        /* <h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
          DartGame.teamNames()[nx].value
        }'s tur</h1><br><b style='font-size: 4rem;'>${player}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2>  */
        showConfirmButton: false,
        timer: 3000,
      });
      const nextHs = document.createElement("div");
      nextHs.classList.add("nextHs");
      document.querySelector(".table").appendChild(nextHs);
      nextHs.innerHTML = `<button class='nextHsBut'>Næste spiller</button>`;
      document.querySelector(".startHs").remove();
      document.querySelector(".nextHsBut").addEventListener("click", () => {
        nextSpiller();
      });
    }
    
    class DartField {
      constructor(one, two, three, sp, dp, tp) {
        this.one = one;
        this.two = two;
        this.three = three;
        this.sp = sp;
        this.dp = dp;
        this.tp = tp;
      }
      dartBoard() {
        let field = [
          document.querySelector(`${this.one}`),
          document.querySelector(`${this.two}`),
          document.querySelector(`${this.three}`),
        ];
        field[0].addEventListener("click", () => {
          if(hsGame === 0){
            Swal.fire(`Spillet er ikke startet`)
            return
          }
          collectPoints.push(this.sp);
          console.log(collectPoints);
          addHsPoint();
        });
        field[1].addEventListener("click", () => {
          if(hsGame === 0){
            Swal.fire(`Spillet er ikke startet`)
            return
          }
          collectPoints.push(this.dp);
          console.log(collectPoints);
          addHsPoint();
        });
        field[2].addEventListener("click", () => {
          if(hsGame === 0){
            Swal.fire(`Spillet er ikke startet`)
            return
          }
          collectPoints.push(this.tp);
          console.log(collectPoints);
          addHsPoint();
        });
      }
    }
    const dartFields = [
      (One = new DartField("#s1", "#d1", "#t1", 1, 2, 3)),
      (Two = new DartField("#s2", "#d2", "#t2", 2, 4, 6)),
      (Three = new DartField("#s3", "#d3", "#t3", 6, 6, 9)),
      (Four = new DartField("#s4", "#d4", "#t4", 4, 8, 12)),
      (Five = new DartField("#s5", "#d5", "#t5", 5, 10, 15)),
      (Six = new DartField("#s6", "#d6", "#t6", 6, 12, 18)),
      (Seven = new DartField("#s7", "#d7", "#t7", 7, 14, 21)),
      (Eight = new DartField("#s8", "#d8", "#t8", 8, 16, 24)),
      (Nine = new DartField("#s9", "#d9", "#t9", 9, 18, 27)),
      (Ten = new DartField("#s10", "#d10", "#t10", 10, 20, 30)),
      (Elleven = new DartField("#s11", "#d11", "#t11", 11, 22, 33)),
      (Twelve = new DartField("#s12", "#d12", "#t12", 12, 24, 36)),
      (thirT = new DartField("#s13", "#d13", "#t13", 13, 26, 39)),
      (FourT = new DartField("#s14", "#d14", "#t14", 14, 28, 42)),
      (FiveT = new DartField("#s15", "#d15", "#t15", 15, 30, 45)),
      (SixT = new DartField("#s16", "#d16", "#t16", 16, 32, 48)),
      (SevenT = new DartField("#s17", "#d17", "#t17", 17, 34, 51)),
      (EightT = new DartField("#s18", "#d18", "#t18", 18, 36, 54)),
      (NittenT = new DartField("#s19", "#d19", "#t19", 19, 38, 57)),
      (Twenty = new DartField("#s20", "#d20", "#t20", 20, 40, 60)),
    ];
    let collectPoints = [];
    fields = () => {
      for (let i = 0; i < dartFields.length; i++) {
        dartFields[i].dartBoard();
      }
    };
    fields();
    /* sumScore = () => {
      const sum = [collectPoints[0], collectPoints[1], collectPoints[2]].reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      console.log(sum); // 6
    }; */
    let playerRound = 0;
    let teamCurrent = 0;
    let gameRound = 0;
    let startPoint = [501, 501, 501];
    addHsPoint = () => {
      const fullPoint = document.querySelectorAll(".hsStartPoint");
      let roundPoint = document.querySelectorAll(".roundHs");
      let pT = document.querySelectorAll(".playerTable");
      if (teamCurrent === 0) {
        if (gameRound === 0) {
          roundPoint[playerRound].innerHTML = `${collectPoints[playerRound]}`;
          startPoint[0] = startPoint[0] - collectPoints[playerRound];
          fullPoint[0].innerHTML = `${startPoint[0]}`;
        }
      } else if (teamCurrent === 1) {
        roundPoint[playerRound + 3].innerHTML = `${collectPoints[playerRound]}`;
        startPoint[1] = startPoint[1] - collectPoints[playerRound];
        fullPoint[1].innerHTML = `${startPoint[1]}`;
      } else if (teamCurrent === 2) {
        roundPoint[playerRound + 6].innerHTML = `${collectPoints[playerRound]}`;
        startPoint[2] = startPoint[2] - collectPoints[playerRound];
        fullPoint[2].innerHTML = `${startPoint[2]}`;
      }
      playerRound++;
      if (playerRound === 3) {
        playerRound = 0;
        teamCurrent++;
        nextSpiller();
      }
      if (teamCurrent === pT.length) {
        teamCurrent = 0;
        gameRound++;
      } // roundHs[roundHs.length] //Hvor kører den ikke?
      if (collectPoints[2] === roundPoint[roundPoint.length - 1].innerHTML) {
        collectPoints = [];
        for (let i = 0; i < pT.length; i++) {
          let newTable = document.createElement("tr");
          let tableBody = document.querySelectorAll("thead");
          tableBody[i].appendChild(newTable);
          newTable.innerHTML = `
          <th class='roundHs'></th>
          <th class='roundHs'></th>
          <th class='roundHs'></th>
          <th class='hsStartPoint'>${startPoint[i]}</th>
        `;
        }
      }
      console.log(`Spillerunde : ${gameRound}`);
      console.log(`teamCurrent : ${teamCurrent}`);
      console.log(`array : ${collectPoints}`);
      console.log(`roundpoint : ${roundPoint[roundPoint.length - 1].innerHTML}`);
    };
}

document.querySelector('.closeHS').addEventListener('click', () => { 

  document.querySelector(".board").classList.remove("boardShow");


 } )

/* One = () => {
one = 's1';
two = 'd1';
three = 't1';
sp = 1;
dp = 2;
tp = 3;
dartBoard(one, two, three, sp, dp, tp )
};
Two = () => {
  one = 's2';
  two = 'd2';
  three = 't2';
  sp = 2;
  dp = 4;
  tp = 6;
  dartBoard(one, two, three, sp, dp, tp )
  };
  Three = () => {
    one = 's3';
    two = 'd3';
    three = 't4';
    sp = 3;
    dp = 6;
    tp = 9;
    dartBoard(one, two, three, sp, dp, tp )
    };
    Four = () => {
      one = 's4';
      two = 'd4';
      three = 't4';
      sp = 1;
      dp = 2;
      tp = 3;
      dartBoard(one, two, three, sp, dp, tp )
      };
      One = () => {
        one = 's1';
        two = 'd1';
        three = 't1';
        sp = 1;
        dp = 2;
        tp = 3;
        dartBoard(one, two, three, sp, dp, tp )
        };


callFields = () => {
  One()
}
callFields()
 */

/* const checkBoxes = document.createElement("span");
checkBoxes.className = "check";
document.querySelectorAll(".player")[$].appendChild(checkBoxes);
checkBoxes.innerHTML = `<input type="checkbox"><input type="checkbox"/><input type="checkbox"/>`; */

/* const nextPlayer = document.createElement("div");
nextPlayer.className = "nextBut";
DartGame.teams()[nx].appendChild(nextPlayer);
nextPlayer.innerHTML = `<button class='next'>Næste spiller</button>`; */

// 1 spiller færdig, resterende spillere mangler samme antal kryder = highscore spil (Højest point) får 2.pladsen.
// Turnering(Dartskive(normal dart)(udskriver værdi));
// Historik udvidelse.  Runder, Point(på dagen), point(samlet(1. pladsen = 1 point(ikke samlede værdi af 6. spil)) ), runder(over året).
// Pil taste genveje.
// hurtigere næste spiller
//Optimere mest til tablet.
//Genstart plads placering, slet class med winner.
//
//
//Jesper/Jacob, Lars/Razzer, Morten/Torben ( Altids point ) && Dagens spil (6 spil)(Oktober);
//Jesper/Jacob = 17, Lars/Razzer = 15, Morten/Torben = 16. //

// Spiller 1 og Spiller 2 på samme hold. Skifter for hver tur. SEMI CHECK (Hvis slutter på ulige runde tal og starter nyt spil på 1?) (if (runde er ulige inden nyt spil, skift til lige spiller))
//Lave et helt nyt spil til multiplayer.  CHECK
//Opdel single spiller og multi (så værdier ikke samles) CHECK
//færreste point spiller først. CHECK
//
// Laveste point skal start i næste spil. osv. CHECK

/* -------------------------------------------------------------------------- */
/*                                  Dart mus                                  */
/* -------------------------------------------------------------------------- */
const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);