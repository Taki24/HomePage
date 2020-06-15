
let circles = new Array();
let points = new Array();
let changeLook = true;

function setup(){
   createCanvas(windowWidth, windowHeight);
   ellipseMode(CENTER);

   for(let i = 0; i < 34; ++i){
         circles[i] = new Array();
   }

   for(let i = 0; i < circles.length; ++i){
      for(let j = 0; j < 16; ++j){
         circles[i][j] = new Circle(i * 40, j * 40);
      }
   }

   for(let i = 0; i < 4; ++i)
      points[i] = new Point();

   document.addEventListener("keydown", function(event){
      if(event.keyCode == 32 && changeLook)
         changeLook = false;
      else if(event.keyCode == 27)
         noLoop();
      else
         changeLook = true;
   });
}

function draw(){
   background(22);

   if(changeLook){
      for(let i = 0; i < circles.length; ++i){
         for(let j = 0; j < 16; ++j){
            circles[i][j].sizeCheck();
            circles[i][j].showNormal();
         }
      }
   }
   else {
      for(let i = 0; i < circles.length; ++i){
         for(let j = 0; j < 16; ++j){
            circles[i][j].showFlash();
         }
      }
   }

   for(let i = 0; i < points.length; ++i){
      points[i].showAndMove();
      distance(points[i]);
   }
}

function distance(point){
   for(let i = 0; i < 34; ++i){
      for(let j = 0; j < 16; ++j){
         let d = dist(point.x, point.y, circles[i][j].x, circles[i][j].y);
         if(d < 50)
            circles[i][j].change();
      }
   }
}
