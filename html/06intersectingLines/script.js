const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let A = new Point(new Vector2d(200,200), 20, "red", "A", true);
let B = new Point(new Vector2d(500,200), 20, "green", "B", true);
let C = new Point(new Vector2d(200,500), 20, "blue", "C", true);
let D = new Point(new Vector2d(500,100), 20, "yellow", "D", true);
let S = new Point(new Vector2d(width/2, height/2), 10, "pink", "S", false);
let l = new LinearFunction(1, 1);
let m = new LinearFunction(-1, 100);

let grid = new Grid(400, 400, 10);


function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  grid.draw(context);
  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(C,D);
  l.draw(context);
  m.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);

  S.position.dx = l.intersection(m).x;
  S.position.dy = l.intersection(m).y;

  }


animate();
