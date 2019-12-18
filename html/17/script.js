const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let waypoints = [];

let followers = [];
let indexA = [];

let BCheck = true;

let A = new Point(new Vector2d(200,300), 20, "red", "0", true);
let B = new Point(new Vector2d(500,400), 20, "green", "1", true);
let C = new DPoint(new Vector2d(200, 300), new Vector2d(0, 0), new Vector2d(0, 0), 15, "Lime", "C");

for (let i = 0; i < 5; i++) {
    let waypoint = new Point(new Vector2d(rng(canvas.width), rng(canvas.height)), 15, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")", "", true);
    waypoints.push(waypoint);
}

for (i = 0; i < 5; i++) {
    let follower = new DPoint(new Vector2d(rng(canvas.width), rng(canvas.height)), new Vector2d(0, 0), new Vector2d(0, 0), 12, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")", "");
    followers.push(follower);
}

for (i = 0; i < followers.length; i++) {
    let FINdex = i;
    indexA.push(FINdex);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);


  for (let i = 0; i < waypoints.length; i++) {
    waypoints[i].draw(context);
    waypoints[i].label = i + 1;
  }

  for (let i = 0; i < 5; i++){
        followers[i].draw(context);
        followers[i].label = i + 1;

    }
    for(i = 0; i < followers.length; i++){
        followers[i].vel.differenceVector(waypoints[indexA[i]].position, followers[i].pos);


    if(followers[i].vel.magnitude < 2){
      indexA[i] += 1;
    }
    if (indexA[i] >= waypoints.length) {
        indexA[i] = 0;
    }

        followers[i].vel.scalMul(0.01);
        followers[i].update();

    }
}

animate();

function rng(max) {
    return Math.floor(Math.random() * max)
}
