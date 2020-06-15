let squares = new Array();
let w, h;
let dis;
let x;
let bool = true;
let img;

function setup(){
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   angleMode(DEGREES);

   dis = 95;   //50 a szélessége + 45 legyen köztük a távolság
   w = floor(windowWidth / dis);
   h = floor(windowHeight / dis);

   for(let i = 0; i < w * h; ++i){
      squares[i] = new Square();
   }
   print("array: " + squares.length);
   print("width: " + w);
   print("height: " + h);

   let k = 0;
   for(let i = 1; i <= w; ++i){
      for(let j = 1; j <= h; ++j){
         squares[k].x = i * dis - squares[0].w / 2;
         squares[k].y = j * dis - squares[0].w / 2;
         k++;
      }
   }
}

function draw(){
   background(31, 31, 31);

   for(let i = 0; i < squares.length; ++i){
      squares[i].grow();
      if(bool)
         squares[i].showSimple();
      else
         squares[i].showFly();
   }

   x = int(random(0, squares.length - 1));
   squares[x].dye();
   squares[x+1].dye();
   x++;
   if(x == squares.length)
      x = 0;
}

document.getElementById("gomb").addEventListener("click", () => {
   if(bool)
      bool = false;
   else
      bool = true;
});

document.addEventListener("keydown", function(event){
   if(event.keyCode == 32)
   noLoop();
   else if(event.keyCode == 13)
   loop();
});
