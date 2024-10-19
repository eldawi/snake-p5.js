let snake;
let res = 25;
let food;
let w;
let h;

//alert("This game is designed by Moslem T.");

function setup() {
  createCanvas(500, 500);
  w = floor(width / res);
  h = floor(height / res);
  frameRate(7);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } 
  
}

function draw() {
  scale(res);
  background(50);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  
  noStroke();
  fill(random(255), random(255), 0);
  ellipse(food.x, food.y, 1, 1);
  
  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }
}

