const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let waypoints = [];
let index = 0;

let BCheck = true;

let A = new Point(new Vector2d(200,300), 20, "red", "0", true);
let B = new Point(new Vector2d(500,400), 20, "green", "1", true);
let C = new DPoint(new Vector2d(200, 300), new Vector2d(0, 0), new Vector2d(0, 0), 15, "Lime", "C");

for (let i = 0; i < 10; i++) {
    let waypoint = new Point(new Vector2d(rng(canvas.width), rng(canvas.height)), 15, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")", "", true);
    waypoints.push(waypoint);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  C.draw(context);
  C.pos.draw(context, new Vector2d(0, 0), 1, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")");
  C.vel.draw(context, C.pos, 10, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")");


  context.beginPath();
  context.strokeStyle = "AliceBlue";
  context.setLineDash([5, 15]);
  context.moveTo(waypoints[0].position.dx, waypoints[0].position.dy);
  for (i = 1; i < waypoints.length; i++) {
    context.lineTo(waypoints[i].position.dx, waypoints[i].position.dy);
  }
  context.closePath();
  context.stroke();
  context.setLineDash([0]);

  for (let i = 0; i < waypoints.length - 1; i++) {
    waypoints[i].draw(context);
    waypoints[i].label = i ;
  }

  C.vel.differenceVector(waypoints[index].position, C.pos);
  //console.log(C.vel.magnitude);
  if (C.vel.magnitude < 2) {
    index += 1;
  }
  if(index >= waypoints.length){
    index = 0;
  }
  C.vel.scalMul(0.01);
  C.update();
}

animate();

function rng(max) {
    return Math.floor(Math.random() * max)
}
