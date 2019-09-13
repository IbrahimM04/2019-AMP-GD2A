const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

function GetRandom(max) {
  return Math.random() * max;
}

let maxBalls = 5;




function animate() {
  requestAnimationFrame(animate);
  function differnceVector(a,b) {
    a = Vector2d.dx
  }
  let rngWidth = rng(width);
  let rngHeight = rng(height);
  let point = new Point(new Vector2d(rngWidth, rngHeight), rng(10), new magnitude(rngWidth, rngHeight));

  point.draw(context);
}

animate();
