const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// DOM

const introScreenDOM = document.querySelector("#intro-screen");
const playBtn = document.querySelector("#play-btn");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const restartBtn = document.querySelector("#playagain-btn");
let scoreAccumula = document.querySelector("#score-accumulator");
let scoreName = document.querySelector("#score");

let game;

// MUSIC
//GAME MUSIC
const audio = new Audio("./audio/audio.mp3");
audio.volume = 0.4;
audio.preload = "auto";
audio.load();

//JADE SOUND
const audioJade = new Audio("./audio/jade.mp3");
audioJade.volume = 0.2;
audioJade.preload = "auto";
audioJade.load();

//DAMAGE SOUND
const audioDamage = new Audio("./audio/damage.mp3");
audioDamage.volumen = 0.2;
audioDamage.preload = "auto";
audioDamage.load();

// FUNCIONES

const startGame = () => {
  introScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  scoreAccumula.style.display = "flex";
  scoreAccumula.innerText = 0;
  audio.load();
  audio.play();
  audio.loop = true;

  // ADD EVENT

  game = new Game();
  game.gameLoop();
  window.addEventListener("keydown", keyPressUp);
  window.addEventListener("keydown", keyPressDown);
  window.addEventListener("keydown", keyPressLeft);
  window.addEventListener("keydown", keyPressRight);
};

// MOVIMIENTOS DEL NINJA
const keyPressUp = (event) => {
  if (event.code === "ArrowUp") {
    game.ninja.upNinja();
  }
};
const keyPressDown = (event) => {
  if (event.code === "ArrowDown") {
    game.ninja.downNinja();
  }
};
const keyPressLeft = (event) => {
  if (event.code === "ArrowLeft") {
    game.ninja.leftNinja();
  }
};
const keyPressRight = (event) => {
  if (event.code === "ArrowRight") {
    game.ninja.rigthNinja();
  }
};
// ADD EVENT
playBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
