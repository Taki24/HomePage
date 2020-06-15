class Player {
   constructor(){
      this.x = width / 2;
      this.y = height / 2 + 100;
      this.d = 40;
      this.col = "#b3e6b3";
   }

   move(bal, jobb, le, fel){
      let speed = 6;
      if(bal)  this.x -= speed;
      if(jobb)  this.x += speed;
      if(le)  this.y += speed;
      if(fel)  this.y -= speed;

      let r = this.d / 2;
      if(this.x + r < 0)
         this.x = width + r;

      if(this.x - r > width)
         this.x = 0.2 - r;

      if(this.y + r < 0)
         this.y = height + r;

      if(this.y - r > height)
         this.y = 0.2 - r;
   }

   show(){
      push();
      noStroke();
      fill(this.col);
      rect(this.x, this.y, this.d, this.d, 10);
      pop();
   }
}
