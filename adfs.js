/* -------------------------------------------------------------------------  */
/**                      Globale variables / Normal spil                      */
/* -------------------------------------------------------------------------  */
/* ----------------- Definerer team start point på nyt spil ----------------- */
let jjPoints = 17; // evt. starte med total og ved nyt spil gå til daily
let mtPoints = 16; // evt. starte med total og ved nyt spil gå til daily
let lrPoints = 15; // evt. starte med total og ved nyt spil gå til daily
/* ------------------ Finder højeste og laveste pointScore ------------------ */
let lack = Math.max(jjPoints, mtPoints, lrPoints);
let lead = Math.min(jjPoints, mtPoints, lrPoints);
/* -------------------------------------------------------------------------- */
/**            Laver en Team Class til at holde styr på hvert team            */
/* -------------------------------------------------------------------------- */
class Team {
/* ------------------------------- Properties ------------------------------- */
  playerOne;
  playerTwo;
  dailyPoint;
  totalPoint;
  teamName;
/* ------------------------------- Constructor ------------------------------ */
  constructor(playerOne, playerTwo, dailyPoint, totalPoint, teamName) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.dailyPoint = dailyPoint;
    this.totalPoint = totalPoint;
    this.teamName = teamName;
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
}
/** --------------------------- Function teamOutput -------------------------- */
/* ---------------- Udregner rækkefølgen spillerne skal vises --------------- */
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
/* ------------------------------ Output Teams ------------------------------ */
teamOutput();
teamOne.addTeam(0);
teamTwo.addTeam(1);
teamThree.addTeam(2);

/* -------------------------------------------------------------------------- */
/**                   Class til at give selve spillet værdier                  */
/* -------------------------------------------------------------------------- */
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
  /* ---------------- Fremviser de 3 hold og deres årlige point --------------- */
  Historik() {
    let team = document.querySelector(".currentPlayer");
    let index = document.querySelector(".round");
    team.innerHTML = `årlige point: <br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamOne.playerOne} & ${teamOne.playerTwo}</p><br><br><b>${teamOne.totalPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamTwo.playerOne} & ${teamTwo.playerTwo}</p><br><br><b>${teamTwo.totalPoint} Point</b><br><p style = 'margin-bottom: .1em; margin-top: 1.2em;' >${teamThree.playerOne} & ${teamThree.playerTwo}</p><br><br><b>${teamThree.totalPoint} Point</b>`;
    index.innerHTML = ``;
  }
  /* -------------- Fremviser alt spillets info efter spillestart ------------- */
  sidePanel() {
    let team = document.querySelector(".currentPlayer");
    let index = document.querySelector(".round");
    /* ----------------- Vælger hvilken spiller der skal spille ----------------- */
    /* ------------------ udfra om runde nr er lige eller ulige ----------------- */
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
/* ----------------------- Giver Dartspil dens værdier ---------------------- */
let DartGame = new Game("", "", 1, 1, /* runde */ 0, 1);
DartGame. ();
console.log(teamOne);
console.log(teamTwo);
console.log(teamThree);
/* -------------------------------------------------------------------------- */
/**                            Start knap Function                            */
/* -------------------------------------------------------------------------- */
/* ------------------------- Lav næste spiller knap ------------------------- */
document.querySelector(".start").addEventListener("click", () => {
  document.querySelector(".start").style.display = 'none'
  document.querySelector(".highScore").style.display = 'block'
  document.querySelector(".restart").style.display = 'block'
  DartGame.teams()[nx].classList.add("activePlayer");
  newPlayer();
  DartGame.sidePanel();
});
/* -------------------------------------------------------------------------- */
/**                         Næste spiller knap Function                       */
/* -------------------------------------------------------------------------- */
let nx = 0;
DartGame.currentTeam = 0;
/* -------------------------- Næste spillerknapper -------------------------- */
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
/* -------------------------------------------------------------------------- */
/**                           Fuld Plade Function                             */
/* -------------------------------------------------------------------------- */
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
/* -------------------------------------------------------------------------- */
/**                         Genstart Spil Function                            */
/* -------------------------------------------------------------------------- */
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





let playerNames = document.querySelectorAll('.playerName')

// makes the historry array in the scope
/* let historyArray = [];
let historyJSON = localStorage.getItem("history"); */
// if exists append player or add to points
/* if (historyJSON) {
  historyArray = JSON.parse(historyJSON);
  let historikSpiller = historyArray.find(
    (x) => x["playername"] == playerNames[0].value
  );
  if (historikSpiller) {
    historikSpiller.place++;
  } else {
    historyArray.push({
      playername: playerNames[0].value,
      place: place,
    });
  }
} else {
  historyArray = [
    { playername: playerNames[0].value, place: place },
  ];
} */
// always saves here
/* localStorage.setItem("history", JSON.stringify(historyArray)); */
























/* Sidste spiller modtager 3 point */
/* Så spiller ikke skal spille færdigt */












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
            console.log(`${teamOne.playerOne} & ${teamOne.playerTwo}`);
            player.style.pointerEvents = "none";
    
            pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${teamOne.playerOne} & ${teamOne.playerTwo}</th>
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
            console.log(`${teamTwo.playerOne} & ${teamTwo.playerTwo}`);
            player.style.pointerEvents = "none";
    
            pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${teamTwo.playerOne} & ${teamTwo.playerTwo}</th>
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
          console.log(`${teamThree.playerOne} & ${teamThree.playerTwo}`);
          player.style.pointerEvents = "none";
          pTable.innerHTML = `<table class='playerTable' border="black">
            <thead>
                <tr>
                    <th class='playerHsName' colspan="6">${teamThree.playerOne} & ${teamThree.playerTwo}</th>
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
