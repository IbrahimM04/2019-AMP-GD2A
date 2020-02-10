class DPoint {
  constructor(pos,vel,acc,radius,color,label, draggable) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
    this.draggable = draggable || false;
    if (this.draggable) {
      this.drag();

    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if(this.pos.dx > canvas.width-this.radius) {
      this.vel.dx = - Math.abs(this.vel.dx);
    }
    if (this.pos.dy > canvas.height-this.radius) {
      this.vel.dy = - Math.abs(this.vel.dy)
    }
    if(this.pos.dx < 0+this.radius) {
      this.vel.dx = Math.abs(this.vel.dx);
    }
    if (this.pos.dy < 0+this.radius) {
      this.vel.dy = Math.abs(this.vel.dy);
    }
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.fill();
    context.font = "20px Arial";
    context.fillText(this.label, this.pos.dx-(this.radius/4), this.pos.dy-(this.radius+10));
    context.stroke();
    context.closePath();
  }

  drag() {
    let dragging = false;

    window.addEventListener('mousedown', (evt)=>{
      let mouseVector = new Vector2d(evt.clientX,evt.clientY);
      let distanceMousePoint = new Vector2d(0,0)
      distanceMousePoint.differenceVector(mouseVector,this.pos);
      if(distanceMousePoint.magnitude <= this.radius) {
        this.dragging = true;
      }
    })

    window.addEventListener('mouseup', (evt)=>{
      this.dragging = false;

    })

    window.addEventListener('mousemove', (evt)=> {
      if (dragging) {
      this.pos.dx = evt.clientX;
      this.pos.dy = evt.clientY;
    }
    let mouseVector = new Vector2d(evt.clientX,evt.clientY);
    let distanceMousePoint = new Vector2d(0,0)
    distanceMousePoint.differenceVector(mouseVector,this.pos);
    if(distanceMousePoint.magnitude <= this.radius) {
      document.body.style.cursor = "move";
      evt.stopImmediatePropagation();
    }else if(distanceMousePoint.magnitude > this.radius) {
      document.body.style.cursor = "auto";
    }
    })
  }
}
