const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];

function rng(max) {
  return Math.floor(Math.random() * max)
}

for (let i = 0; i < 4; i++) {
  let ball = new Point(new Vector2d(rng(width), rng(height)), 20);
  balls.push(ball);
  balls[i].label = i;
}

function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw(context);
  }

}

animate();
