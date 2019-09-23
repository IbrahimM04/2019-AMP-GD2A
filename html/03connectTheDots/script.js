const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];



function resetBalls() {
  balls = [];
}

setInterval(resetBalls, 5000);

function rng(max) {
  return Math.floor(Math.random() * max)
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  if(balls.length < 4) {
  let ball = new Point(new Vector2d(rng(width), rng(height)), 10);
  balls.push(ball);
  }
  context.beginPath();
  context.moveTo(balls[0].position.dx, balls[0].position.dy);

  for (let i = 0; i < balls.length; i++) {
    context.lineTo(balls[i].position.dx, balls[i].position.dy);
    context.fillStyle = "rgba(255,0,0,0.2)";
    context.strokeStyle = "Silver";
  }

  context.closePath();
  context.fill();
  context.stroke();

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw(context);
    balls[i].label = i + 1;

  }

}

animate();
