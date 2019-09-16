class Point {
  constructor(position, radius, color, label){
    this.position = position;
    this.radius = radius || 20;
    this.color = color || "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")";
    this.label = label;
    }

    draw(context){
      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.fill();
      context.stroke();
      context.font = "30px Arial";
      context.fillText(this.label, this.position.dx-(this.radius/4), this.position.dy-(this.radius+10));
      context.closePath();
    }
  }
