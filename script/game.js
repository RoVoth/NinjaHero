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
    this.isGameOn = true;
    this.score = 0;
  }

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
      if (this.score > 5 && this.score < 12) {
        eachDamage.speed = 2;
      } else if (this.score > 12 && this.score < 20) {
        eachDamage.speed = 3;
      } else if (this.score > 20) {
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
    this.gameOverCollision();

    // 3 dibujar elementos

    ctx.drawImage(this.backGround, 0, 0, canvas.width, canvas.height);
    this.ninja.drawNinja();

    this.damageArr.forEach((eachDamage) => {
      eachDamage.drawDamage();
      eachDamage.moveDamage();
    });
    this.jadeArr.forEach((eachJade) => {
      eachJade.drawJade();
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
      }
    });
  };

  gameOverCollision = () => {
    this.damageArr.forEach((eachDamage) => {
      if (
        this.ninja.x < eachDamage.x + eachDamage.w &&
        this.ninja.x + this.ninja.w > eachDamage.x &&
        this.ninja.y < eachDamage.y + eachDamage.h &&
        this.ninja.h + this.ninja.y > eachDamage.y
      ) {
        this.isGameOn = false;
        canvas.style.display = "none";
        gameOverScreenDOM.style.display = "flex";
        audio.pause();
      }
    });
  };
}
