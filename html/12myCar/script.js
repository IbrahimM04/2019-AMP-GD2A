const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let background = new Image();
background.src = "background.png";

let frontWheel = new Image();
frontWheel.src = "wiel.png";
frontWheel.position = new Vector2d(0,0);

let backWheel = new Image();
backWheel.src = "wiel.png";
backWheel.position = new Vector2d(0,0);

let car = new Image();
car.src = "auto.png";
car.position = new Vector2d(0,0);
car.velocity = new Vector2d(7,0);

car.position.dy = height - 400;

let rot = 0;

addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowRight":
      car.velocity.dx += 1;
      break;
      case "ArrowLeft":
      car.velocity.dx -=1;
      break;
    default:
  }
})

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  car.position.add(car.velocity);
  context.drawImage(car, car.position.dx, car.position.dy);

  context.save();
  context.translate(car.position.dx+207, car.position.dy+193);
  if (car.velocity.dx != 0) {
    context.rotate(rot);
  }
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(car.position.dx+727.5, car.position.dy+193);
  if (car.velocity.dx != 0) {
    context.rotate(rot);
  }
  context.drawImage(backWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  clamp();

  rot += car.velocity.dx/80


}

animate();



function clamp() {
  if (car.position.dx > width) {
    car.position.dx = -car.width;
  }
}
