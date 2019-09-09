class Point {
  constructor(position, radius, color){
    this.position = position;
    this.radius = radius || 20;
    this.color = color;
    }

    draw(context){
      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.fill();
      context.stroke();
      context.closePath();
    }
  }
