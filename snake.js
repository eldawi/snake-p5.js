class Snake {
  
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(x, y) {
    this.xdir = x;
    this.ydir = y; 
  }

  update() {
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    
    //this.body[0].x += this.xdir;
    //this.body[0].y += this.ydir;
  }
  
  
  grow() {
    let head = this.body[this.body.length-1].copy();
    this.len ++;
    this.body.push(head);
    
  }
  
  endGame() {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x > w-1 || x < 0 || y > h-1 || y < 0){
      return true;
    }
  return false;
  }
  
  eat(pos) {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  
  show() {
    for (let i = 0; i < this.body.length; i++) {
    fill(255);
    noStroke();
    circle(this.body[i].x, this.body[i].y, 1);
    }
  }


}