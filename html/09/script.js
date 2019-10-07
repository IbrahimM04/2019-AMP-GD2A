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
let diff = new Vector2d(0,0);

let A = new Point(new Vector2d(351,200), 15, "red", "A", true);
let B = new Point(new Vector2d(500,501), 15, "blue", "B", true);
let C = new Point(new Vector2d(200, 500), 15, "green", "C", true);
let S = new Point(new Vector2d(0,0), 5, "yellow", "S", false);
let mAB = new Point(new Vector2d(0,0), 5, "black", "mAB", false);
let mBC = new Point(new Vector2d(0,0), 5, "black", "mBC", false);
let mAC = new Point(new Vector2d(0,0), 5, "black", "mAC", false);
let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let n = new LinearFunction(0,0);
let o = new LinearFunction(0,0, "LightSkyBlue ");
let p = new LinearFunction(0,0, "LightSkyBlue ");
let q = new LinearFunction(0,0, "LightSkyBlue ");



function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  grid.draw(context);
  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(B,C);
  n.defineLineWithTwoPoints(C,A);
  l.draw(context);
  m.draw(context);
  n.draw(context);

  o.slope = -1/n.slope;
  o.intercept= B.position.dy - o.slope*B.position.dx;
  o.draw(context);
  p.slope = -1/l.slope;
  p.intercept= C.position.dy - p.slope*C.position.dx;
  p.draw(context);
  q.slope = -1/m.slope;
  q.intercept = A.position.dy - q.slope*A.position.dx;
  q.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
  mAB.draw(context);
  mBC.draw(context);
  mAC.draw(context);
  mAB.position.dx = p.intersection(l).x;
  mAB.position.dy = p.intersection(l).y;

  mBC.position.dx = q.intersection(m).x;
  mBC.position.dy = q.intersection(m).y;

  mAC.position.dx = o.intersection(n).x;
  mAC.position.dy = o.intersection(n).y;

  S.position.dx = q.intersection(o).x;
  S.position.dy = q.intersection(o).y;
  }

animate();
