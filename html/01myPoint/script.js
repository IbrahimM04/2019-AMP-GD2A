const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let a = new Point(new Vector2d(200, 300), 50, "rgb(50,50,50)");
a.draw(context);

let b = new Point(new Vector2d(20, 250), 10, "rgb(50,50,55)");
b.draw(context);
