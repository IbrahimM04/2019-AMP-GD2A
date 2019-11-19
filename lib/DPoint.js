class DPoint {
  constructor(pos,vel,acc,radius,color,label) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.fill();
    context.font = "30px Arial";
    context.fillText(this.label, this.position.dx-(this.radius/4), this.position.dy-(this.radius+10));
    context.stroke();
    context.closePath();
  }
}
