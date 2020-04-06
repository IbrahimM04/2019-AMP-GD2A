const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,distance;

A = new DPoint(new Vector2d(200,200), new Vector2d(5,5), new Vector2d(0,0), 100, "red", "A");
B = new DPoint(new Vector2d(400,400), new Vector2d(-5,-5), new Vector2d(0,0), 100, "blue", "B");

A.rad = new Vector2d(1,1);
A.tan = new Vector2d(1,1);

B.rad = new Vector2d(1,1);
B.tan = new Vector2d(1,1);

function animate() {
  A.rad.differenceVector(B.pos,A.pos);
  B.rad.differenceVector(A.pos,B.pos);

  distance = A.rad.magnitude;



  A.rad.magnitude = 1;
  B.rad.magnitude = 1;

  A.tan.perpendicular(A.rad);
  B.tan.perpendicular(B.rad);

  A.rad.magnitude = A.vel.dot(A.rad);
  A.tan.magnitude = A.vel.dot(A.tan);

  B.rad.magnitude = B.vel.dot(B.rad);
  B.tan.magnitude = B.vel.dot(B.tan);

  if(distance < A.radius + B.radius) {
    let temp = new Vector2d(1,1);
    temp.dx = A.rad.dx;
    temp.dy = A.rad.dy;

    A.rad.dx = B.rad.dx;
    A.rad.dy = B.rad.dy;

    B.rad.dx = temp.dx;
    B.rad.dy = temp.dy;

    A.vel.sumVector(A.rad,A.tan);
    B.vel.sumVector(B.rad,B.tan);
  }

  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  A.update();
  B.update();
  A.draw(context);
  B.draw(context);

  A.vel.draw(context,A.pos,25,"white");
  B.vel.draw(context,B.pos,25,"white");

  A.rad.draw(context,A.pos,25,"blue");
  B.rad.draw(context,B.pos,25,"red");
  A.tan.draw(context,A.pos,25,"green");
  B.tan.draw(context,B.pos,25,"yellow");
}

animate();
