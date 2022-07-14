class Ninja {
  constructor() {
    this.image = new Image();
    this.image.src = "./image/ninjaPos1.png";
    this.image2 = new Image();
    this.image2.src = "./image/ninjaShield.png";
    this.x = 0;
    this.y = 500;
    this.w = 95;
    this.w1 = 145;
    this.h = 95;
    this.h1 = 145;
    this.speed = 40;
  }

  drawNinja = (activeShield) => {
    let imageToDraw = undefined;
    let wToDraw = undefined;
    let hToDraw = undefined;

    if (activeShield === true) {
      imageToDraw = this.image2;
      wToDraw = this.w1;
      hToDraw = this.h1;
    } else {
      imageToDraw = this.image;
      wToDraw = this.w;
      hToDraw = this.h;
    }

    ctx.drawImage(imageToDraw, this.x, this.y, wToDraw, hToDraw);
    if (this.x + this.w + this.speed > canvas.width) {
      this.x = canvas.width - this.speed - this.w - 1;
    } else if (this.x < 0) {
      this.x = 1;
    }
    if (this.y + this.h > canvas.height) {
      this.y = canvas.height - this.h - 1;
    } else if (this.y < 0) {
      this.y = 1;
    }
  };

  // METODOS DE MOVER AL NINJA

  upNinja = () => {
    this.y = this.y - this.speed;
  };

  downNinja = () => {
    this.y = this.y + this.speed;
  };

  leftNinja = () => {
    this.x = this.x - this.speed;
  };

  rigthNinja = () => {
    this.x = this.x + this.speed;
  };
}
