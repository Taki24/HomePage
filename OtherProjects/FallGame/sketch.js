let enemys = new Array();
let trapLines = new Array();
let player;
let bal = false;
let jobb = false;
let le = false;
let fel = false;
let trapS;
let countStop = false;

function setup(){
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   ellipseMode(CENTER);
   angleMode(DEGREES);

   enemys[0] = new Enemy();
   trapLines[0] = new TrapLine();

   setInterval( () => {
      let e = new Enemy();
      enemys.push(e);
   }, 100);    //200

   setInterval( () => {
      let t = new TrapLine();
      trapLines.push(t);
   }, 3000 );

   player = new Player();
   trapS = new TrapSquare();

   setInterval(count, 1000);
}

function draw(){
   background(70);
   // push();
   // textSize(30);
   // fill("orange");
   // text("Téglalap tűnjön is el, úgy ahogy előjött. Ütközés fv", 20, 40);
   // pop();

   for(let i = enemys.length - 1; i >= 0; --i){
      enemys[i].show();

      let d = dist(enemys[i].x, enemys[i].y, player.x, player.y);
      if(d < enemys[i].r + player.d / 2){
         noLoop();
         countStop = true;
      }
      if(enemys[i].y > height + 40)
         enemys.splice(i, 1);
   }

   player.move(bal, jobb, le, fel);
   player.show();


   for(let i = trapLines.length - 1; i >= 0; --i){
      trapLines[i].crawlDown();
      if(trapLines[i].y2 > 0){
         let d2 = dist(player.x, player.y, trapLines[i].x, player.y);
         if((d2 < player.d / 2 + trapLines[i].wid / 2) && trapLines[i].y2 > player.y){
            noLoop();
            countStop = true;
         }
      }
      if(trapLines[i].bool)
         trapLines[i].grow();
      trapLines[i].show();
   }


}

function keyReleased(){
   if(keyCode === LEFT_ARROW)
      bal = false;
   if(keyCode === RIGHT_ARROW)
      jobb = false;
   if(keyCode === DOWN_ARROW)
      le = false;
   if(keyCode === UP_ARROW)
      fel = false;
}

function keyPressed() {
   if(keyCode === LEFT_ARROW)
      bal = true;
   if(keyCode === RIGHT_ARROW)
      jobb = true;
   if(keyCode === DOWN_ARROW)
      le = true;
   if(keyCode === UP_ARROW)
      fel = true;
}

let min = 0;
let sec = 0;
let t = document.getElementById("timer");

function count(){
   sec++;
   if(sec == 59){
      min++;
      sec = 0;
   }
   
   if(!countStop)
      t.innerHTML = zero(min) + ":" + zero(sec);
}

function zero(number){
   if(number < 10)
      return "0" + number;
   return number;
}
