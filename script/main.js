const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// DOM

const introScreenDOM = document.querySelector("#intro-screen");
const playBtn = document.querySelector("#play-btn");
const video = document.querySelector("#video");
const videoSource = document.querySelector("#video video");
const videoBtn = document.querySelector("#videoBtn");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const restartBtn = document.querySelector("#playagain-btn");
let scoreAccumula = document.querySelector("#score-accumulator");
let scoreName = document.querySelector("#score");
scoreName.style.display = "none";
videoSource.pause();

let game;

// MUSIC
//GAME MUSIC
const audio = new Audio("./audio/audio.mp3");
audio.volume = 0.4;
audio.preload = "auto";
audio.load();

//JADE SOUND
const audioJade = new Audio("./audio/jade.mp3");
audioJade.volume = 0.3;
audioJade.preload = "auto";
audioJade.load();

//DAMAGE SOUND
const audioDamage = new Audio("./audio/damage.mp3");
audioDamage.volumen = 0.1;
audioDamage.preload = "auto";
audioDamage.load();

// FUNCIONES

const videoIntro = () => {
  introScreenDOM.style.display = "none";
  video.style.display = "flex";
  gameOverScreenDOM.style.display = "none";
  scoreName.style.display = "none";
  videoSource.play();
};

const startGame = () => {
  introScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";
  video.style.display = "none";
  canvas.style.display = "block";
  scoreName.style.display = "flex";
  scoreAccumula.style.display = "flex";
  scoreAccumula.innerText = 0;
  videoSource.pause();
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
playBtn.addEventListener("click", videoIntro);
videoBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
