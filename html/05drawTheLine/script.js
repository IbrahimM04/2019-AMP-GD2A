const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let points = [];



function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  if(points.length < 4) {
  let point = new Point(new Vector2d(rng(width),rng(height)), 20, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")", "20", true)
  points.push(point);
  }
  context.beginPath();
  context.moveTo(points[0].position.dx, points[0].position.dy);

  for (let i = 0; i < points.length; i++) {
    context.lineTo(points[i].position.dx, points[i].position.dy);
    context.fillStyle = "rgba(255,0,0,0.2)";
    context.strokeStyle = "Silver";
  }

  context.closePath();
  context.fill();
  context.stroke();

  for (let i = 0; i < points.length; i++) {
    points[i].draw(context);
    points[i].label = i + 1;
  }
}


animate();
