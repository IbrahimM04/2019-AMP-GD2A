class Circumcenter {
  constructor(a,b,c,s) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.s = s;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = "black";
    context.arc(this.s.position.dx,this.s.position.dy,(((this.a.position.dx + this.a.position.dy)/2)+((this.b.position.dx + this.b.position.dy)/2)+((this.c.position.dx + this.c.position.dy)/2))/3,0,2*Math.PI);
    context.stroke();
    context.closePath();
  }
}
