class Point {
  constructor(position, radius, color, label, draggable){
    this.position = position;
    this.radius = radius || 20;
    this.color = color || "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")";
    this.label = label || "";
    this.draggable = draggable || false;
    if (this.draggable) {
      this.drag();
    }
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

    drag() {
      let dragging = false;

      window.addEventListener('mousedown', (evt)=>{
        let mouseVector = new Vector2d(evt.clientX,evt.clientY);
        let distanceMousePoint = new Vector2d(0,0)
        distanceMousePoint.differenceVector(mouseVector,this.position);
        if(distanceMousePoint.magnitude <= this.radius) {
          dragging = true;
        }
      })

      window.addEventListener('mouseup', (evt)=>{
        dragging = false;

      })

      window.addEventListener('mousemove', (evt)=> {
        if (dragging) {
        this.position.dx = evt.clientX;
        this.position.dy = evt.clientY;
      }
      let mouseVector = new Vector2d(evt.clientX,evt.clientY);
      let distanceMousePoint = new Vector2d(0,0)
      distanceMousePoint.differenceVector(mouseVector,this.position);
      if(distanceMousePoint.magnitude <= this.radius) {
        document.body.style.cursor = "move";
        evt.stopImmediatePropagation();
      }else if(distanceMousePoint.magnitude > this.radius) {
        document.body.style.cursor = "auto";
      }
      })
    }
  }
