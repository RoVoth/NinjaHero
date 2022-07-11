class Damage {
  constructor(yParam) {
    this.image = new Image();
    this.image.src = "./image/damage1.png";
    this.x = canvas.width + 50;
    this.y = yParam;
    this.w = 60;
    this.h = 30;
    this.speed = 2;
  }

  // METODOS

  drawDamage = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveDamage = () => {
    this.x = this.x - this.speed;
  };
}
