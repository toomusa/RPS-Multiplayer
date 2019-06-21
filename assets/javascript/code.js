var firebaseConfig = {
    apiKey: "AIzaSyCaXrDg_Tqc0X_lypbigxJlUtw-SmXvjM8",
    authDomain: "rps-multiplayer-b4572.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-b4572.firebaseio.com",
    projectId: "rps-multiplayer-b4572",
    storageBucket: "rps-multiplayer-b4572.appspot.com",
    messagingSenderId: "980474036827",
    appId: "1:980474036827:web:b7160061926cc9c6"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// let username = "Musa";
let games = 3;
let wins = 7;
let losses = 1;
let analytics = ["R12", "P7", "S11"];

const writeDB = () => {
    database.ref().update({
        // user: {
            username,
            games,
            wins,
            losses,
            analytics,
            online: true,
            ready: false,
            game1: {
                round1: "paper",
                round2: "rock",
                round3: "scissors"
            },
            game2: {
                round1: "rock",
                round2: "rock",
                round3: "rock",
                round4: "scissors",
                round5: "paper"
            } 
        // }  
    })
}

// writeDB();

var auth = firebase.auth();

const txtUsername = document.getElementById("txtUsername");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const displayName = txtUsername.value;

btnLogin.addEventListener("click", function() {
    auth.signInAnonymously().catch(function(error) {
        console.log(error.code);
        console/log(error.message);
      });
})

auth.onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser);
    if(firebaseUser) {
        btnLogout.classList.remove("disabled");
        btnLogin.classList.add("disabled");
    } else {
        console.log("not logged in");
        btnLogout.classList.add("disabled");
        btnLogin.classList.remove("disabled");
    }
})










// let level1 = database.ref().child("user");
// let level2 = level1.child("game1")
// let level3 = level2.child("round1");

// console.log(level1);
// console.log(level2)
// console.log(level2.child("round1"));

// var connected = database.ref(".info/connected");

// level2.update({
//     round1: "scissors"
//     });

// level2.on("value", function(snap) {
//     console.log(snap.val());
//     console.log(snap.key);
// })




// var userKey = firebase.database().ref().push().key;
// console.log(userKey);



// database.ref().on("value", function(snapshot) {
//     const data = snapshot.val();
//     online = database.ref(".info/connected");
//     console.log(data);
//     console.log(online);
// });

// var connections = database.ref("/connections");

// console.log(connections);
// console.log(connected);

// console.log(connections);

// connected.on("value", function(snap) {
//   if (snap.val()) {
//     online = connections.push(true);
//     online.onDisconnect().remove();
//     console.log(online);
//   }
// });

// connections.on("value", function(snapshot) {
//     console.log("connections true");
// });


// code for playing against the computer

var rPC = document.getElementById("result-player-choice");
var rCC = document.getElementById("result-cpu-choice");
var rPS = document.getElementById("result-players-score");
var rCS = document.getElementById("result-cpu-score");
var rGT = document.getElementById("result-game-ties");

var cpuChoice = ["r", "s", "p"];

document.onkeyup = function(event) {

    var playerGuess = event.key;
    var cpuGuess = cpuChoice[Math.floor(Math.random() * cpuChoice.length)];

    if (playerGuess==="r" && cpuGuess==="s") {
        rPC.textContent = "Rock";
        rCC.textContent = "Scissors";
        $("#player-image").attr("src", "./assets/images/userRock.png");
        $("#opponent-image").attr("src", "./assets/images/cpuScissors.png");
        rPS.textContent = Number(rPS.textContent) + 1;
    }

    if (playerGuess==="r" && cpuGuess==="p") {
        rPC.textContent = "Rock";
        rCC.textContent = "Paper";
        $("#player-image").attr("src", "./assets/images/userRock.png");
        $("#opponent-image").attr("src", "./assets/images/cpuPaper.png");
        rCS.textContent = Number(rCS.textContent) + 1;
    }

    if (playerGuess==="r" && cpuGuess==="r") {
        rPC.textContent = "Rock";
        rCC.textContent = "Rock";
        $("#player-image").attr("src", "./assets/images/userRock.png");
        $("#opponent-image").attr("src", "./assets/images/cpuRock.png");
        rGT.textContent = Number(rGT.textContent) + 1;
    }

    if (playerGuess==="s" && cpuGuess==="r") {
        rPC.textContent = "Scissors";
        rCC.textContent = "Rock";
        $("#player-image").attr("src", "./assets/images/userScissors.png");
        $("#opponent-image").attr("src", "./assets/images/cpuRock.png");
        rCS.textContent = Number(rCS.textContent) + 1;
    }

    if (playerGuess==="s" && cpuGuess==="p") {
        rPC.textContent = "Scissors";
        rCC.textContent = "Paper";
        $("#player-image").attr("src", "./assets/images/userScissors.png");
        $("#opponent-image").attr("src", "./assets/images/cpuPaper.png");
        rPS.textContent = Number(rPS.textContent) + 1;
    }

    if (playerGuess==="s" && cpuGuess==="s") {
        rPC.textContent = "Scissors";
        rCC.textContent = "Scissors";
        $("#player-image").attr("src", "./assets/images/userScissors.png");
        $("#opponent-image").attr("src", "./assets/images/cpuScissors.png");
        rGT.textContent = Number(rGT.textContent) + 1;
    }

    if (playerGuess==="p" && cpuGuess==="r") {
        rPC.textContent = "Paper";
        rCC.textContent = "Rock";
        $("#player-image").attr("src", "./assets/images/userPaper.png");
        $("#opponent-image").attr("src", "./assets/images/cpuRock.png");
        rPS.textContent = Number(rPS.textContent) + 1;
    }

    if (playerGuess==="p" && cpuGuess==="p") {
        rPC.textContent = "Paper";
        rCC.textContent = "Paper";
        $("#player-image").attr("src", "./assets/images/userPaper.png");
        $("#opponent-image").attr("src", "./assets/images/cpuPaper.png");
        rGT.textContent = Number(rGT.textContent) + 1;
    }

    if (playerGuess==="p" && cpuGuess==="s") {
        rPC.textContent = "Paper";
        rCC.textContent = "Scissors";
        $("#player-image").attr("src", "./assets/images/userPaper.png");
        $("#opponent-image").attr("src", "./assets/images/cpuScissors.png");
        rCS.textContent = Number(rCS.textContent) + 1;
    }

    if (Number(rPS.textContent==="10")) {
        alert("You Won!");
        alert("Restart Game?");
        rPC.textContent = "0";
        rPS.textContent = "0";
        rCC.textContent = "0";
        rCS.textContent = "0";
        rGT.textContent = "0";
    }

    if (Number(rCS.textContent==="10")) {
        alert("Computer Won!");
        alert("Restart Game?");
        rPC.textContent = "0";
        rPS.textContent = "0";
        rCC.textContent = "0";
        rCS.textContent = "0";
        rGT.textContent = "0";
    }
}
