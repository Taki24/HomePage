class Enemy {
   constructor(){
      this.x = random(10, width - 10);
      this.y = -25;
      this.r = random(8, 23);
      this.g = random(0, 255);
      this.b = random(0, 100);
      this.speed = random(2, 14);
   }

   show(){
      push();
      this.y += this.speed;
      noStroke();
      fill(200, this.g, this.b);
      circle(this.x, this.y, this.r * 2);
      pop();
   }
}
