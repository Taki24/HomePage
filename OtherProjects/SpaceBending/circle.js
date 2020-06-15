
class Circle {
   constructor(x, y){
      this.x = 20 + x;
      this.y = 20 + y;
      this.r = 35;
      this.c = 2;
      this.red = 255;
      this.green = 128;
      this.blue = 128;
   }

   change(){
      if(this.r > 15)
         this.r -= this.c;

      setTimeout( () => {
         if(this.r < 35)
            this.r += this.c;
      }, 2000)
   }

   sizeCheck(){
      if(this.r < 35){
         this.red = Point.r;
         this.green = Point.g;
         this.blue = Point.b;
      }
      else {
         this.red = 255;
         this.green = 128;
         this.blue = 128;
      }
   }

   showNormal(){
      push();
      noStroke();
      fill(this.red, this.green, this.blue);
      circle(this.x, this.y, this.r);
      pop();
   }

   showFlash(){
      if(this.r < 35){
         this.red = random(0, 256);
         this.green = random(0, 256);
         this.blue = random(0, 256);
      }
      else {
         this.red = 0;
         this.green = 0;
         this.blue = 0;
      }
      push();
      noStroke();
      fill(this.red, this.green, this.blue);
      circle(this.x, this.y, this.r);
      pop();
   }
}
