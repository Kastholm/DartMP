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
    const pointPlayer = document.createElement("div");
    addPlayer.className = "player";
    pointPlayer.className = "point";
    document.querySelector(".dart-body").appendChild(addPlayer);
    document.querySelector(".gameInfo").appendChild(pointPlayer);
    addPlayer.innerHTML = `<span class="empty"><input class='playerName' value='${this.teamName}'/>
      </span>
      `;
    if (DartGame.gameRound === 1) {
      document.querySelector(".pointIndicator").innerHTML =
        "<b>Årlige point:</b><br></br>";
      pointPlayer.innerHTML = `<p style = 'margin-bottom: .1em; margin-top: 1.2em; font-size: 1.8rem' >${this.teamName}</p><br><br><b>${this.totalPoint} Point</b>
      </span>
      `;
    }
    if (DartGame.gameRound >= 2) {
      document.querySelector(".pointIndicator").innerHTML =
        "<b>Dagens point:</b><br></br>";
      pointPlayer.innerHTML = `<p style = 'margin-bottom: .1em; margin-top: 1.2em; font-size: 1.8rem' >${this.teamName}</p><br><br><b>${this.dailyPoint} Point</b>
      </span>
      `;
    }

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
    const yearPoints = document.createElement("p");
    yearPoints.innerHTML = `${this.teamName}<br>${this.totalPoint}`;
    document.querySelector(".yearPoints").appendChild(yearPoints);
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
  /* gameRound  */ 1,
  /* round */ 1,
  /* currentTeam */ 0,
  /* placement  */ 1
);

/** --------------------------- Function teamOutput -------------------------- */
/* ---------------- Udregner rækkefølgen spillerne skal vises --------------- */
/* ------------------ First game sorting from Total Points ------------------ */
let team = [""];
let playerturn = [""];
let playerturn2 = [""];
function teamOutput() {
  if (DartGame.gameRound === 1) {
    let lackingPlayer = Math.max(
      JesperJacob.totalPoint,
      LarsRazzer.totalPoint,
      MortenTorben.totalPoint
    );
    let leadingPlayer = Math.min(
      JesperJacob.totalPoint,
      LarsRazzer.totalPoint,
      MortenTorben.totalPoint
    );
    //
    /* ---------------------------- Jesper & Jacob svagest --------------------------- */
    if (
      lackingPlayer === JesperJacob.totalPoint &&
      leadingPlayer === LarsRazzer.totalPoint
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
      lackingPlayer === JesperJacob.totalPoint &&
      leadingPlayer === MortenTorben.totalPoint
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
      lackingPlayer === LarsRazzer.totalPoint &&
      leadingPlayer === JesperJacob.totalPoint
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
      lackingPlayer === LarsRazzer.totalPoint &&
      leadingPlayer === MortenTorben.totalPoint
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
      lackingPlayer === MortenTorben.totalPoint &&
      leadingPlayer === JesperJacob.totalPoint
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
      lackingPlayer === MortenTorben.totalPoint &&
      leadingPlayer === LarsRazzer.totalPoint
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
    let lackingPlayer = Math.max(
      JesperJacob.dailyPoint,
      LarsRazzer.dailyPoint,
      MortenTorben.dailyPoint
    );
    let leadingPlayer = Math.min(
      JesperJacob.dailyPoint,
      LarsRazzer.dailyPoint,
      MortenTorben.dailyPoint
    );
    //
    /* ---------------------------- Jesper & Jacob svagest --------------------------- */
    if (
      lackingPlayer === JesperJacob.dailyPoint &&
      leadingPlayer === LarsRazzer.dailyPoint
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
      LarsRazzer.addTeam(1);
      MortenTorben.addTeam(2);
      return;
    } else if (
      lackingPlayer === JesperJacob.dailyPoint &&
      leadingPlayer === MortenTorben.dailyPoint
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
      MortenTorben.addTeam(1);
      LarsRazzer.addTeam(2);
      return;
    }
    /* ---------------------------- Lars & Razzer svagest --------------------------- */
    if (
      lackingPlayer === LarsRazzer.dailyPoint &&
      leadingPlayer === JesperJacob.dailyPoint
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
      lackingPlayer === LarsRazzer.dailyPoint &&
      leadingPlayer === MortenTorben.dailyPoint
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
      lackingPlayer === MortenTorben.dailyPoint &&
      leadingPlayer === JesperJacob.dailyPoint
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
      lackingPlayer === MortenTorben.dailyPoint &&
      leadingPlayer === LarsRazzer.dailyPoint
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
        /* console.log(notWinners[x].document.querySelector('.playerName').innerHTML = 'something') */
        notWinners[x].classList.add("winPlayer");
        notWinners[x].classList.add("thirdPlace");
        console.log(document.querySelector('.thirdPlace .playerName').value)
        if(document.querySelector('.thirdPlace .playerName').value === JesperJacob.teamName){
          JesperJacob.dailyPoint = JesperJacob.dailyPoint + DartGame.place;
          console.log(`JJ ${JesperJacob.dailyPoint} point`);
        }
        else if(document.querySelector('.thirdPlace .playerName').value === LarsRazzer.teamName){
          LarsRazzer.dailyPoint = LarsRazzer.dailyPoint + DartGame.place;
          console.log(`LZ ${LarsRazzer.dailyPoint} point`);
        }
        else if(document.querySelector('.thirdPlace .playerName').value === MortenTorben.teamName){
          MortenTorben.dailyPoint = MortenTorben.dailyPoint + DartGame.place;
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
  DartGame.place++;
      
        // make this look like the others
        // fullPlate(notWinners[x].innerHTML);
      }
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
      if (box.checked) {
        c1++;
        if (c1 === 3) {
          team = DartGame.teamNames()[activeTeam].value;
          if(DartGame.teamNames()[activeTeam].value === JesperJacob.teamName){
            JesperJacob.dailyPoint = JesperJacob.dailyPoint + DartGame.place;
            console.log(`JJ ${JesperJacob.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName){
            LarsRazzer.dailyPoint = LarsRazzer.dailyPoint + DartGame.place;
            console.log(`LZ ${LarsRazzer.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === MortenTorben.teamName){
            MortenTorben.dailyPoint = MortenTorben.dailyPoint + DartGame.place;
            console.log(`MT ${MortenTorben.dailyPoint} point`);
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
    else if(activeTeam === 1) {
      console.log("p2 active");
      if (box.checked) {
        c2++;
        if (c2 === 3) {
          team = DartGame.teamNames()[activeTeam].value;
          if(DartGame.teamNames()[activeTeam].value === JesperJacob.teamName){
            JesperJacob.dailyPoint = JesperJacob.dailyPoint + DartGame.place;
            console.log(`JJ ${JesperJacob.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName){
            LarsRazzer.dailyPoint = LarsRazzer.dailyPoint + DartGame.place;
            console.log(`LZ ${LarsRazzer.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === MortenTorben.teamName){
            MortenTorben.dailyPoint = MortenTorben.dailyPoint + DartGame.place;
            console.log(`MT ${MortenTorben.dailyPoint} point`);
          }
          logScore();
          fullPlate(team);
        }
        return;
      }
      c2--;
    } else if (activeTeam === 2) {
      console.log("p3 active");
      if (box.checked) {
        c3++;
        if (c3 === 3 /* 33 */) {
          team = DartGame.teamNames()[activeTeam].value;
          if(DartGame.teamNames()[activeTeam].value === JesperJacob.teamName){
            JesperJacob.dailyPoint = JesperJacob.dailyPoint + DartGame.place;
            console.log(`JJ ${JesperJacob.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === LarsRazzer.teamName){
            LarsRazzer.dailyPoint = LarsRazzer.dailyPoint + DartGame.place;
            console.log(`LZ ${LarsRazzer.dailyPoint} point`);
          }
          else if(DartGame.teamNames()[activeTeam].value === MortenTorben.teamName){
            MortenTorben.dailyPoint = MortenTorben.dailyPoint + DartGame.place;
            console.log(`MT ${MortenTorben.dailyPoint} point`);
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
     
      /* historikSpillerOne.points++; */
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
      {teamname: this.JesperJacob.teamName, points: this.JesperJacob.dailyPoint, Ypoints: this.JesperJacob.totalPoint },{teamname: this.LarsRazzer.teamName, points: this.LarsRazzer.dailyPoint, Ypoints: this.LarsRazzer.totalPoint}, {teamname: this.MortenTorben.teamName, points: this.MortenTorben.dailyPoint, Ypoints: this.MortenTorben.totalPoint },
    ];
  }
  // always saves here
  localStorage.setItem("history", JSON.stringify(historyArray));
  document.querySelector('.logOne').innerHTML = `JJ ${historyArray[0].points} Y ${historyArray[0].Ypoints}`
  document.querySelector('.logTwo').innerHTML = `LR ${historyArray[1].points} Y ${historyArray[1].Ypoints}`
  document.querySelector('.logThree').innerHTML = `MT ${historyArray[2].points} Y ${historyArray[2].Ypoints}`
}

 localS()
 
let storagePlayer = JSON.parse(localStorage.history)
console.log(storagePlayer[0].points)
function logScore() {
  document.querySelector('.logOne').innerHTML = `JJ ${JesperJacob.dailyPoint}`
  document.querySelector('.logTwo').innerHTML = `LR ${LarsRazzer.dailyPoint}`
  document.querySelector('.logThree').innerHTML = `MT ${MortenTorben.dailyPoint}`
}
