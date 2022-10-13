class Team {
  /* ------------------------------- Properties ------------------------------- */
  playerOne;
  playerTwo;
  dailyPoint;
  totalPoint;
  /* ------------------------------- Constructor ------------------------------ */
  constructor(playerOne, playerTwo, dailyPoint, totalPoint) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.dailyPoint = dailyPoint;
    this.totalPoint = totalPoint;
  }
  /* --------------------------------- Methods -------------------------------- */
  /* ---------------- Tilføjer holdets navnebjælker til spillet --------------- */
  addTeam($) {
    const addPlayer = document.createElement("div");
    addPlayer.className = "player";
    document.querySelector(".dart-body").appendChild(addPlayer);
    addPlayer.innerHTML = `<span class="empty"><input class='playerName' value='${this.playerOne} & ${this.playerTwo}'/>
    </span>
    `;
    /* --------------- Lopper igennem 11 for at lave 11 scoreboxe --------------- */
    for (let i = 0; i < 11; i++) {
      const checkBoxes = document.createElement("span");
      checkBoxes.className = "check";
      document.querySelectorAll(".player")[$].appendChild(checkBoxes);
      checkBoxes.innerHTML = `<input type="checkbox"><input type="checkbox"/><input type="checkbox"/>`;
    }
    const nextPlayer = document.createElement("div");
    nextPlayer.className = "nextBut";
    document.querySelectorAll(".player")[$].appendChild(nextPlayer);
    nextPlayer.innerHTML = `<button class='next'>Næste spiller</button>`;
  }
}
/* -------------------- Definerer start point på nyt spil ------------------- */
let jjPoints = 2; // evt. starte med total og ved nyt spil gå til daily
let mtPoints = 7; // evt. starte med total og ved nyt spil gå til daily
let lrPoints = 4; // evt. starte med total og ved nyt spil gå til daily
/* ------------------ Finder højeste og laveste pointScore ------------------ */
let lack = Math.max(jjPoints, mtPoints, lrPoints);
let lead = Math.min(jjPoints, mtPoints, lrPoints);
function teamOutput() {
  /* ---------------------------- Jesper & Jacob svagest --------------------------- */
  if (lack === jjPoints && lead === mtPoints) {
    teamOne = new Team("Jesper", "Jacob", 0, 17);
    teamTwo = new Team("Lars", "Razzer", 0, 15);
    teamThree = new Team("Morten", "Torben", 0, 16);
  } else if (lack === jjPoints && lead === lrPoints) {
    teamOne = new Team("Jesper", "Jacob", 0, 17);
    teamTwo = new Team("Morten", "Torben", 0, 16);
    teamThree = new Team("Lars", "Razzer", 0, 15);
  } else if (lack === mtPoints && lead === jjPoints) {
    /* ---------------------------- Morten & Torben svagest --------------------------- */
    teamOne = new Team("Morten", "Torben", 0, 16);
    teamTwo = new Team("Lars", "Razzer", 0, 15);
    teamThree = new Team("Jesper", "Jacob", 0, 17);
  } else if (lack === mtPoints && lead === lrPoints) {
    teamOne = new Team("Morten", "Torben", 0, 16);
    teamTwo = new Team("Jesper", "Jacob", 0, 17);
    teamThree = new Team("Lars", "Razzer", 0, 15);
  } else if (lack === lrPoints && lead === jjPoints) {
    /* ---------------------------- Lars & Razzer svagest --------------------------- */
    teamOne = new Team("Lars", "Razzer", 0, 15);
    teamTwo = new Team("Morten", "Torben", 0, 16);
    teamThree = new Team("Jesper", "Jacob", 0, 17);
  } else if (lack === lrPoints && lead === mtPoints) {
    teamOne = new Team("Lars", "Razzer", 0, 15);
    teamTwo = new Team("Jesper", "Jacob", 0, 17);
    teamThree = new Team("Morten", "Torben", 0, 16);
  } else {
    /* --------------------------------- Default -------------------------------- */
  }
}
/* ----------------------- Output Teams in right order ---------------------- */
teamOutput();
teamOne.addTeam(0);
teamTwo.addTeam(1);
teamThree.addTeam(2);

class Game extends Team {
  /* ------------------------------- Properties ------------------------------- */
  game;
  round;
  currentTeam;
  place;
  /* ------------------------------- Constructor ------------------------------ */
  constructor(playerOne, playerTwo, game, round, currentTeam, place) {
    super(playerOne, playerTwo);
    this.game = game;
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
  Historik() {
    let team = document.querySelector(".currentPlayer");
    let index = document.querySelector(".round");
    team.innerHTML = `årlige point: <br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamOne.playerOne} & ${teamOne.playerTwo}</p><br><br><b>${teamOne.totalPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamTwo.playerOne} & ${teamTwo.playerTwo}</p><br><br><b>${teamTwo.totalPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamThree.playerOne} & ${teamThree.playerTwo}</p><br><br><b>${teamThree.totalPoint} Point</b>`;
    index.innerHTML = ``;
  }
  /* -------------------------- sidePanel information ------------------------- */
  sidePanel() {
    let team = document.querySelector(".currentPlayer");
    let index = document.querySelector(".round");
    function checkTeam(pOne, pTwo, v, p) {
      team.innerHTML = `Nuværende Hold: <br><b>${
        DartGame.teamNames()[v].value
      } </b></b><br>Spillers tur: <br><b>${pTwo}`;
      index.innerHTML = `Spil: <br><b>${DartGame.game}</b><br>Runde: <br><b>${DartGame.round}</b><br>dagens Point: <br><b>${p}</b>`;
      if (DartGame.round % 2 == 0) {
        team.innerHTML = `Nuværende Hold: <br><b>${
          DartGame.teamNames()[v].value
        } </b></b><br>Spillers tur: <br><b>${pTwo}`;
        index.innerHTML = `Spil: <br><b>${DartGame.game}</b><br>Runde: <br><b>${DartGame.round}</b><br>dagens Point: <br><b>${p}</b>`;
      } else {
        team.innerHTML = `Nuværende Hold: <br><b>${
          DartGame.teamNames()[v].value
        } </b></b><br>Spillers tur: <br><b>${pOne}`;
        index.innerHTML = `Spil: <br><b>${DartGame.game}</b><br>Runde: <br><b>${DartGame.round}</b><br>dagens Point: <br><b>${p}</b>`;
      }
    }
    /* --------------- vælger hold der skal fremvises i sidePanel --------------- */

    if (DartGame.currentTeam === 0) {
      let v = 0;
      let p = teamOne.dailyPoint;
      let pOne = teamOne.playerOne;
      let pTwo = teamOne.playerTwo;
      checkTeam(pOne, pTwo, v, p);
    } else if (DartGame.currentTeam === 1) {
      let v = 1;
      let p = teamTwo.dailyPoint;
      let pOne = teamTwo.playerOne;
      let pTwo = teamTwo.playerTwo;
      checkTeam(pOne, pTwo, v, p);
    } else if (DartGame.currentTeam === 2) {
      let v = 2;
      let p = teamThree.dailyPoint;
      let pOne = teamThree.playerOne;
      let pTwo = teamThree.playerTwo;
      checkTeam(pOne, pTwo, v, p);
    }
  }
}
let DartGame = new Game("", "", 1, 1, /* runde */ 0, 1);
DartGame.Historik();
console.log(teamOne);
console.log(teamTwo);
console.log(teamThree);

/* ------------------------- Lav næste spiller knap ------------------------- */
document.querySelector(".start").addEventListener("click", () => {
  DartGame.teams()[nx].classList.add("activePlayer");
  newPlayer();
  DartGame.sidePanel();
});
/* ------------------------------ Næste Spiller ----------------------------- */
let nx = 0;
DartGame.currentTeam = 0;
let nxt = document.querySelectorAll(".next");
for (x = 0; x < DartGame.teams().length; x++) {
  nxt[x].addEventListener("click", () => {
    if (nx === DartGame.teams().length - 1) {
      DartGame.teams()[2].classList.remove("activePlayer");
      DartGame.teams()[0].classList.add("activePlayer");
      nx = 0;
      DartGame.currentTeam = 0;
      DartGame.round++;
      newPlayer();
      DartGame.sidePanel();
      return;
    }
    DartGame.teams()[nx].classList.remove("activePlayer");
    nx++;
    DartGame.currentTeam++;
    newPlayer();
    DartGame.teams()[nx].classList.add("activePlayer");
    DartGame.sidePanel();
  });
}

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
    if (DartGame.currentTeam === 0) {
      player = teamOne.playerTwo;
    } else if (DartGame.currentTeam === 1) {
      player = teamTwo.playerTwo;
    } else if (DartGame.currentTeam === 2) {
      player = teamThree.playerTwo;
    }
  } else {
    if (DartGame.currentTeam === 0) {
      player = teamOne.playerOne;
    } else if (DartGame.currentTeam === 1) {
      player = teamTwo.playerOne;
    } else if (DartGame.currentTeam === 2) {
      player = teamThree.playerOne;
    }
  }
  Swal.fire({
    position: "middle",
    icon: "success",
    title: `<h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
      DartGame.teamNames()[nx].value
    }'s tur</h1><br><b style='font-size: 4rem;'>${player}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2> `,
    showConfirmButton: false,
    timer: 3000,
  });
}

let boxes = document.querySelectorAll(".check input");
let c1 = 0;
let c2 = 0;
let c3 = 0;
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    fullRow();
    if (nx === 0) {
      if (box.checked) {
        c1++;
        if (c1 === 33) {
          teamOne.dailyPoint = DartGame.place;
          player1 = teamOne.playerOne;
          player2 = teamOne.playerTwo;
          fullPlate(player1, player2);
        }
        return;
      }
      c1--;
    } else if (nx === 1) {
      console.log("p2 active");
      if (box.checked) {
        c2++;
        if (c2 === 33) {
          teamTwo.dailyPoint = DartGame.place;
          player1 = teamTwo.playerOne;
          player2 = teamTwo.playerTwo;
          fullPlate(player1, player2);
        }
        return;
      }
      c2--;
    } else if (nx === 2) {
      console.log("p3 active");
      if (box.checked) {
        c3++;
        if (c3 === 33) {
          teamThree.dailyPoint = DartGame.place;
          player1 = teamThree.playerOne;
          player2 = teamThree.playerTwo;
          fullPlate(player1, player2);
        }
        return;
      }
      c3--;
    }
  });
});

function fullPlate(player1, player2) {
  DartGame.teams()[nx].classList.add("winPlayer");
  let placering = document.createElement("p");
  placering.classList.add("placeReset");
  DartGame.teams()[nx].appendChild(placering);
  placering.innerHTML = `${DartGame.place}. pladsen <br> <button class='openPlayer'>åben spiller</button>`;
  Swal.fire(
    `<img src='img/trophy.gif'><p class='winRespond'><b>Tillykke</b><b><br style='margin: .5em;'> ${player1} & ${player2}!</b><br><br>i tog ${DartGame.place} pladsen<br><br>efter ${DartGame.round} Runde </p>`,
    "",
    ""
  );
  celebrate();
  setTimeout(() => {
    celebrate();
  }, "1000");
  DartGame.sidePanel();
  DartGame.place++;
}

/* n = 0 n bliver 3 */
/* rows.forEach((row, index) => {
  row[0] = "20";
  row.addEventListener("click", () => {
    
  });
}); */

let rows = document.querySelectorAll(".check");
/* -------------------------------------------------------------------------- */
/*                             Fuld Række Function                            */
/* -------------------------------------------------------------------------- */
let f = -2;
function fullRow() {
  console.log(boxes.length);
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

document.querySelector(".restart").addEventListener("click", () => {
  const restart = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  restart
    .fire({
      title: `Denne rundes point: <br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamOne.playerOne} & ${teamOne.playerTwo}</p><br><br><b>${teamOne.dailyPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamTwo.playerOne} & ${teamTwo.playerTwo}</p><br><br><b>${teamTwo.dailyPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamThree.playerOne} & ${teamThree.playerTwo}</p><br><br><b>${teamThree.dailyPoint} Point</b>`,
      text: ``,
      showCancelButton: true,
      confirmButtonText: "Nyt Spil",
      cancelButtonText: "Tilbage",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        location.reload();
        console.log("nyt spil");
        return;
      }
      console.log("anulleret");
    });
});

/* -------------------------------------------------------------------------- */
/*                                HighscoreSpil                               */
/* -------------------------------------------------------------------------- */
/* ------------------------- Fremviser HighscoreSpil ------------------------ */
document.querySelector(".highScore").addEventListener("click", () => {
  document.querySelector(".board").classList.add("boardShow");
});
/* --------------------- Highscorespil informationsboks --------------------- */
const highscorePlayers = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});
highscorePlayers
  .fire({
    title: `<h1 style='font-size: 2.7rem;'>Velkommen til <br style='margin: 0em'> <b style='font-size: 3.5rem; '>HighScore Spil</b><h1><br><h5>Vælg holdene der skal spille mod hinanden</h5><div style='background-color: #992b2e; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${teamOne.playerOne} & ${teamOne.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div><div style='background-color: #1aa864; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${teamTwo.playerOne} & ${teamTwo.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div><div style='background-color: #992b2e; padding: .2em 0' margin: .2em 0><p style='font-size: 1.7rem; margin: .5em 0;'>${teamThree.playerOne} & ${teamThree.playerTwo}</p><input class='hsPlayer' type='checkbox'/></div>`,
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
        /* <h1 style='margin-bottom: .8em; font-size: 2.3rem;'>${
          DartGame.teamNames()[nx].value
        }'s tur</h1><br><b style='font-size: 4rem;'>${player}</b><br> skal skyde <h2 class='timer' style='margin-top: .2em;'>om : ${sec}</h2>  */
        showConfirmButton: false,
        timer: 2000,
      });
      /* location.reload(); */
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
let hsRound = 0;
hsP.forEach((player, index) => {
  player.addEventListener("click", () => {
    let startPoint = [501, 501, 501];
    if (player.checked) {
      const pTable = document.createElement("div");
      pTable.className = "pTable";
      document.querySelector(".table").appendChild(pTable);
      if (index === 0) {
        console.log(`${teamOne.playerOne} & ${teamOne.playerTwo}`);
        player.style.pointerEvents = "none";

        pTable.innerHTML = `<table class='playerTable' border="black">
        <thead>
            <tr>
                <th class='playerHsName' colspan="6">${teamOne.playerOne} & ${teamOne.playerTwo}</th>
            </tr>
            <tr>
                <th>Runde 1</th>
                <th>Runde 2</th>
                <th>Runde 3</th>
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
        console.log(`${teamTwo.playerOne} & ${teamTwo.playerTwo}`);
        player.style.pointerEvents = "none";

        pTable.innerHTML = `<table class='playerTable' border="black">
        <thead>
            <tr>
                <th class='playerHsName' colspan="6">${teamTwo.playerOne} & ${teamTwo.playerTwo}</th>
            </tr>
            <tr>
                <th>Runde 1</th>
                <th>Runde 2</th>
                <th>Runde 3</th>
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
      console.log(`${teamThree.playerOne} & ${teamThree.playerTwo}`);
      player.style.pointerEvents = "none";
      pTable.innerHTML = `<table class='playerTable' border="black">
        <thead>
            <tr>
                <th class='playerHsName' colspan="6">${teamThree.playerOne} & ${teamThree.playerTwo}</th>
            </tr>
            <tr>
                <th>Runde 1</th>
                <th>Runde 2</th>
                <th>Runde 3</th>
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
  const cT = document.querySelectorAll(".playerHsName");
  const pT = document.querySelectorAll(".playerTable");
  pT[pt].classList.remove("hsActive");
  pt++;
  ct++;
  if (pt === pT.length) {
    pt = 0;
    ct = 0;
    hsRound++;
  }
  pT[pt].classList.add("hsActive");
  console.log(cT[pt].innerHTML);

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
}

function startHsGame() {
  const cT = document.querySelectorAll(".playerHsName");
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
      collectPoints.push(this.sp);
      console.log(collectPoints);
      addHsPoint();
    });
    field[1].addEventListener("click", () => {
      collectPoints.push(this.dp);
      console.log(collectPoints);
      addHsPoint();
    });
    field[2].addEventListener("click", () => {
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
sumScore = () => {
  const sum = [collectPoints[0], collectPoints[0], collectPoints[0]].reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  console.log(sum); // 6
};

addHsPoint = () => {
  let startPoint = [501, 501, 501];
  let fullPoint = document.querySelectorAll(".hsStartPoint");
  let roundPoint = document.querySelectorAll(".roundHs");
  roundPoint[0].innerHTML = `${collectPoints[0]}`;
  fullPoint[0].innerHTML = `${startPoint[0] - collectPoints[0]}`;
  roundPoint[1].innerHTML = `${collectPoints[1]}`;
  roundPoint[2].innerHTML = `${collectPoints[2]}`;
};

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
