const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let BCheck = true;

let A = new Point(new Vector2d(200,300), 20, "red", "A", true);
let B = new Point(new Vector2d(500,400), 20, "green", "B", true);
let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"blue","p");

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  A.draw(context);
  B.draw(context);
  point.draw(context);
  B.position.draw(context,new Vector2d(0,0),"white", 1);
  point.pos.draw(context,new Vector2d(0,0),"white",1);

  // point.vel.scalMul(0.01);

  //point.vel.differenceVector(B.position,point.pos);

  if  (BCheck){
    point.vel.differenceVector(B.position,point.pos);
    point.vel.scalMul(0.01);
    }
    if(!BCheck){
    point.vel.differenceVector(A.position,point.pos);
    point.vel.scalMul(0.01);
    }

    if (point.vel.magnitude < 0.2 && point.vel.magnitude != 0) {
        BCheck = !BCheck;
    }



  point.update();

  point.vel.draw(context,point.pos,"red",20);

  drawLineAB();
  changeCourse();
}

animate();

function drawLineAB(){
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.closePath();
  context.stroke();
}

function changeCourse() {

}
