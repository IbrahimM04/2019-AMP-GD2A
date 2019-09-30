class Grid {
  constructor(dx, dy, xmod,ymod) {
    this.dx = 20 || dx;
    this.dy = 20 || dy;
    this.xmod = 100 || xmod;
    this.ymod = 100 || ymod
  }

  draw(context) {
    for (let y = 0; y < canvas.height; y +=this.dy) {
        context.beginPath();
        context.moveTo(0,y);
        context.lineTo(canvas.width,y);
        context.closePath();
        context.strokeStyle = "gray";
        context.lineWidth = 0.1;
        context.stroke();
    }

    for (var x = 0; x < canvas.width; x += this.dx  ) {
        context.beginPath();
        context.moveTo(x,0);
        context.lineTo(x,canvas.height);
        context.closePath();
        context.strokeStyle = "gray";
        context.lineWidth = 0.1;
        context.stroke();
    }

  }
}
