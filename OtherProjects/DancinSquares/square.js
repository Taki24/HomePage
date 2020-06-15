class Square {
   constructor(){
      this.x = 0;
      this.y = 0;
      this.w = 50;
      this.r = 120;
      this.g = 0;
      this.b = 0;
      this.gro = int(random(-2, 3));
      this.rot = int(random(-5, 6));
      this.rotGro = int(random(0, 4));
   }

   grow(){
      this.w += this.gro;
      if(this.w > 70 || this.w < 20)
         this.gro *= -1;

      if(this.rot > 0)
         this.rot += this.rotGro;
      else if(this.rot < 0)
         this.rot -= this.rotGro;
   }

   dye(){
      //this.r += int(random(10, 40));
      this.g += int(random(10, 40));
      this.b += int(random(10, 40));
      if(this.r >= 255)
         this.r = 30;
      if(this.g >= 255)
         this.g = 30;
      if(this.b >= 255)
         this.b = 30;
   }

   showSimple(){
      push();
      this.rotGro = int(random(0, 3));
      translate(this.x, this.y);
      rotate(this.rot);
      fill(this.r, this.g, this.b);
      noStroke();
      square(0, 0, this.w, 5);
      pop();
   }

   showFly(){
      push();
      rotate(this.rot);
      translate(this.x, this.y);
      fill(this.r, this.g, this.b);
      noStroke();
      square(0, 0, this.w, 5);
      pop();
   }
}
