const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let grid = new Grid(400, 400, 10);



let A = new Point(new Vector2d(500,500), 15, "red", "A", true);
let B = new Point(new Vector2d(200,200), 15, "blue", "B", true);
let C = new Point(new Vector2d(200, 500), 15, "green", "C", true);
let S = new Point(new Vector2d(0,0), 5, "yellow", "S", false);
let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);


function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  grid.draw(context);
  l.defineLineWithTwoPoints(A,B);
  m.slope = -1/l.slope;
  m.intercept= C.position.dy - m.slope*C.position.dx;
  l.draw(context);
  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);

  S.position.dx = l.intersection(m).x;
  S.position.dy = l.intersection(m).y;
  }

animate();
