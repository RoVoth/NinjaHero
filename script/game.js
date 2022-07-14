class Game {
  constructor() {
    this.backGround = new Image();
    this.backGround.src = "./image/background.png";
    this.ninja = new Ninja();
    this.jadeArr = [new Jade()];
    this.counterJade = 0;
    this.damageArr = [new Damage(0, "./image/damage1.png")];
    this.damageSpace = 600;
    this.damageCounter = this.damageArr.length;
    this.livesArr = [
      new Live(680, "./image/ninjaLife.png"),
      new Live(720, "./image/ninjaLife.png"),
      new Live(760, "./image/ninjaLife.png"),
    ];
    this.shield = false;
    this.isGameOn = true;
    this.score = 0;
  }

  //REMOVER LAS ARMAS CUANDO SALGAN DE LA PANTALA
  removeDamageFromArray = () => {
    //console.log(this.damageArr.length);
    if (this.damageArr[0].x + this.damageArr[0].w < 0) {
      this.damageArr.shift();
    }
  };

  // MUESTRA LAS JADE PARA COLECTAR
  appearsJade = () => {
    if (
      this.counterJade === 5 ||
      this.counterJade === 25 ||
      this.counterJade === 40
    ) {
      this.jadeArr.push(new Jade());
      this.counterJade++;
    } else if (
      this.counterJade === 15 ||
      this.counterJade === 32 ||
      this.counterJade === 50
    ) {
      this.jadeArr.pop();
    }
  };

  // AGREGAR LOS CUCHILLOS (aplicando nueva variable image y llevandola al parametro para colocar multiples armas)
  addNewDamage = () => {
    if (this.damageArr[this.damageArr.length - 1].x < 600) {
      let randomPosition = Math.random() * 600;
      const randomPositionDamage = Math.floor(Math.random() * 3) + 1;
      const image = `./image/damage${randomPositionDamage}.png`;
      let newDamage = new Damage(randomPosition, image);
      this.damageArr.push(newDamage);
      this.damageCounter++;
    }
  };

  // AGREGAR DIFICULTAL
  addDifficult = () => {
    this.damageArr.forEach((eachDamage) => {
      if (this.score > 30 && this.score < 60) {
        eachDamage.speed = 2;
      } else if (this.score > 60 && this.score < 90) {
        eachDamage.speed = 3;
      } else if (this.score > 90) {
        eachDamage.speed = 4;
      }
    });
  };

  // BUCLE DEL JUEGO
  gameLoop = () => {
    // 1.barrado de canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones o movimientos de los elementos

    this.appearsJade();
    this.addNewDamage();
    this.addDifficult();
    this.jadeCollision();
    this.shieldActivation();
    this.gameOverCollision();

    // 3 dibujar elementos

    ctx.drawImage(this.backGround, 0, 0, canvas.width, canvas.height);
    this.ninja.drawNinja(this.shield);

    this.damageArr.forEach((eachDamage) => {
      eachDamage.drawDamage();
      eachDamage.moveDamage();
    });
    this.jadeArr.forEach((eachJade) => {
      eachJade.drawJade();
    });
    this.livesArr.forEach((eachLive) => {
      eachLive.drawLives();
    });

    // RECURSION

    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  //COLISIONES

  jadeCollision = () => {
    this.jadeArr.forEach((eachJade) => {
      if (
        this.ninja.x < eachJade.x + eachJade.w &&
        this.ninja.x + this.ninja.w > eachJade.x &&
        this.ninja.y < eachJade.y + eachJade.h &&
        this.ninja.h + this.ninja.y > eachJade.y
      ) {
        this.jade = new Jade();
        this.jadeArr.pop();
        this.jadeArr.push(this.jade);
        this.score = this.score + 5;
        scoreAccumula.innerText = this.score;
        audioJade.play();
      }
    });
  };

  shieldActivation() {
    if (this.score % 30 === 0 && this.score > 0) {
      this.shield = true;
    } else
      setTimeout(() => {
        this.turnOffTheShield();
      }, 1000);
  }

  turnOffTheShield() {
    this.shield = false;
  }

  gameOverCollision = () => {
    this.damageArr.forEach((eachDamage, i) => {
      if (
        this.shield === false &&
        this.ninja.x < eachDamage.x + eachDamage.w &&
        this.ninja.x + this.ninja.w > eachDamage.x &&
        this.ninja.y < eachDamage.y + eachDamage.h &&
        this.ninja.h + this.ninja.y > eachDamage.y
      ) {
        audioDamage.play();
        this.damageArr.splice(i, 1);
        this.livesArr.pop();
        if (this.livesArr.length === 0) {
          this.isGameOn = false;
          canvas.style.display = "none";
          gameOverScreenDOM.style.display = "flex";
          scoreName.style.display = "flex";
          scoreAccumula.style.display = "flex";
          audio.pause();
        }
      }
    });
  };
}
