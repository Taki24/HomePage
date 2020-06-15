class TrapSquare {
   constructor(){
      this.x = random(0, width);
      this.y = random(0, height);
      this.w = 0;
      this.h = 0;
      this.angle = 0;
   }

   grow(){
      this.angle += 5;
      this.w += random(1, 2);
      this.h += random(1, 5);
   }

   show(){
      push();
      noStroke();
      fill(255);
      translate(this.x, this.y);
      rotate(this.angle);
      rect(0, 0, this.w, this.h);
      pop();
   }
}

class TrapLine {
   constructor(){
      this.x = random(75, windowWidth - 75);
      this.y = 0;
      this.y2 = 0;
      this.wid = 5;
      this.crawlDownSpeed = random(7, 16);
      this.crawlBackSpeed = this.crawlDownSpeed;
      this.growWid = this.crawlDownSpeed * 1.4;
      this.shrinkWid = this.growWid;
      this.bool = false;
      this.staySec = random(2000, 7000);
   }

   crawlDown(){
      this.y2 += this.crawlDownSpeed;
      if(this.y2 > windowHeight){
         this.crawlDownSpeed = 0;
         this.bool = true;
      }

      setTimeout( () => {
         this.wid -= this.shrinkWid;
         if(this.wid < 5.2)
            this.shrinkWid = 0;
      }, this.staySec - (100 * this.crawlBackSpeed));

      setTimeout( () => {     
         this.y2 -= this.crawlBackSpeed;
         if(this.y2 < 0){
            this.crawlBackSpeed = 0;
         }
      }, this.staySec);
   }

   grow(){
      this.wid += this.growWid;
      if(this.wid > 170)
         this.growWid = 0;
   }

   show(){
      push();
      stroke(255);
      strokeWeight(this.wid);
      line(this.x, this.y, this.x, this.y2);
      pop();
   }
}
