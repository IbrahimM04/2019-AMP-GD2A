const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let arrows = [];

let row = 20;
let number = 100;

let dx,dy,distance;

let mouse = {};

for(let i = 0; i<number; i++){
  dx = (i % row) * 100;
  dy = Math.floor(i/row)*100;
  let arrow = new Arrow(new Vector2d(dx,dy), "red");
  arrows.push(arrow);
}



function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  for(let i = 0; i<arrows.length;i++){
    dx = mouse.x - arrows[i].pos.dx;
    dy = mouse.y - arrows[i].pos.dy;
    distance = Math.sqrt(dx*dx+dy*dy);
    //arrows[i].color = "rgb(" + dist/100 + ",0,0)";
    arrows[i].angle  = Math.atan2(dy,dx);
    arrows[i].draw(context);
  }

}

animate();

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})
