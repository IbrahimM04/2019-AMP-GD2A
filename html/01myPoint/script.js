const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max);
}

function GetRandom(max) {
  return Math.random() * max;
}

let r = 10;

let points = [];


function animate() {
  context.clearRect(0,0, width, height);
  requestAnimationFrame(animate);
  let point = new Point(new Vector2d(rng(width), rng(height)), r, "E");
  points.push(point);

  for(let i = 0; i < points.length; i++) {
    points[i].radius++;
    points[i].label = i;
    if (points.length > 100) {
      points.splice(i,1);
    }
    points[i].draw(context);
  }
}

animate();
