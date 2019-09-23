const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let point = new Point(new Vector2d(500,500), 20);

point.label = "20";

function animate() {
  requestAnimationFrame(animate);
  point.draw(context);
}

animate();
