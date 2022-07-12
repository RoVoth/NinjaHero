class Damage {
  constructor(yParam, image) {
    this.image = new Image();
    this.image.src = image;
    this.x = canvas.width + 50;
    this.y = yParam;
    this.w = 50;
    this.h = 25;
    this.speed = 1;
  }

  // METODOS

  drawDamage = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveDamage = () => {
    this.x = this.x - this.speed;
  };
}
