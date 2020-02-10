const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let l = new LinearFunction(1,1, "black");
let m = new LinearFunction(1,1, "orange");


let A = new Point(new Vector2d(200, 200), 20, "red","A",true);
let B = new Point(new Vector2d(500, 300), 20, "green","B",true);
let C = new DPoint(new Vector2d(500,500),new Vector2d(10,10), new Vector2d(0,0), 20, "blue", "C", true);
//let D = new Point(new Vector2d(20, 400), 10, "orange", "D", false);
let D = new DPoint(new Vector2d(0,0), new Vector2d(10,10), new Vector2d(0,0), 10, "orange", "D", false)

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  l.defineLineWithTwoPoints(A,B);
  m.slope = -1/l.slope;
  m.intercept= C.pos.dy - m.slope*C.pos.dx;
  l.draw(context);
  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  C.vel.draw(context, C.pos, "white", 5);
  C.update();
  D.pos.dx = l.intersection(m).x;
  D.pos.dy = l.intersection(m).y;

}
animate();
