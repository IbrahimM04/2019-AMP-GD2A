const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function rng(max) {
  return Math.floor(Math.random() * max)
}

let f = new LinearFunction(1,1);


let A = new Point(new Vector2d(200, 200), 20, "yellow","1",true);
let B = new Point(new Vector2d(500, 300), 20, "green","2",true);

function animate(){
requestAnimationFrame(animate);
context.clearRect(0,0,canvas.width,canvas.height);
for (let x = 0; x < width; x += 10) {
    let point = new Point(new Vector2d(x, f.y(x)), 10, "orange", " ");
    point.draw(context);
}
    A.draw(context);
    B.draw(context);
    f.defineLineWithTwoPoints(A, B);

}
animate();
