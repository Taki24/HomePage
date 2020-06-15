
class Point {
   constructor(){
      this.border = 41;
      this.x = random(this.border, windowWidth - this.border);
      this.y = random(this.border, windowHeight - this.border);
      this.rand = int(random(1, 3));
      if(this.rand % 2 == 0){
         this.speedX = -5;
         this.speedY = -5;
      }
      else {
         this.speedX = 5;
         this.speedY = 5;
      }
      this.r = 100;
      this.b = 50;
      this.g = 220;      
   }

   showAndMove(){
      this.x += this.speedX;
      if(this.x > windowWidth - 40 || this.x < 40)
         this.speedX *= -1;

      this.y += this.speedY;
      if(this.y > windowHeight - 40 || this.y < 40)
         this.speedY *= -1;

      push();
      //strokeWeight(5);
      //stroke(250);
      //fill(22);
      circle(this.x, this.y, 0);
      pop();
   }

   static colorize(r, g, b){
      r = 0;
      //g = random(0, 255);
      //b = random(0, 255);
   }
}
