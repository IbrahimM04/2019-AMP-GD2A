class Arrow {
  constructor(pos,color) {
    this.pos = pos;
    this.angle = 0;
    this.color = color || "yellow";


  }

  draw(context){
    let shaftHeight = 10;
    let shaftWidth = 7;
    let arrowHeight = 14;
    let arrowWidth = 6;

    context.fillStyle = this.color;

    context.save();
    context.translate(this.pos.dx,this.pos.dy);
    context.rotate(this.angle)

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,shaftHeight/2);
    context.lineTo(shaftWidth,shaftHeight/2);
    context.lineTo(shaftWidth,arrowHeight/2);
    context.lineTo(shaftWidth + arrowWidth,0);
    context.lineTo(shaftWidth,-arrowHeight/2);
    context.lineTo(shaftWidth,-shaftHeight/2);
    context.lineTo(0,-shaftHeight/2);
    context.closePath();
    context.stroke();
    context.fill();

    context.restore();
  }
}
