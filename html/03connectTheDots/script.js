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
  balls[i].label = i + 1;

}

function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw(context);

    if(i == 3) {
      context.beginPath();
      context.moveTo(balls[3].position.dx, balls[3].position.dy);
      context.lineTo(balls[0].position.dx, balls[0].position.dy);
      context.strokeStyle = "black";
      context.stroke();
      context.closePath();
    } else {
      context.beginPath();
      context.moveTo(balls[i].position.dx, balls[i].position.dy);
      context.lineTo(balls[i + 1].position.dx, balls[i + 1].position.dy);
      context.strokeStyle = "black";
      context.stroke();
      context.closePath();
    }
  }


}

animate();
