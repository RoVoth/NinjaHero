class Live {
  constructor(xParam, srcParam) {
    this.x = xParam;
    this.y = 20;
    this.w = 30;
    this.h = 30;
    this.img = new Image();
    this.img.src = srcParam;
  }

  drawLives = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
