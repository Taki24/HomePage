//LOADER FADE OUT
window.addEventListener("load", () => {
   const loader = document.querySelector(".loader");
   loader.style.animation = "fadeOut 3s forwards";
});

//BACKGROUND
function pickImage(){
   const images = ["kep1.jpg", "kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg","kep9.jpg","kep10.jpg","kep11.jpg","kep12.jpg","kep13.jpg","kep14.jpg","kep15.jpg","kep16.jpg","kep17.jpg","kep18.jpg","kep19.jpg","kep20.jpg","kep21.jpg","kep22.jpg","kep23.jpg"];
   let rand = Math.floor(Math.random() * 23);
   return "url(" + "'./Picts/" + images[rand] + "'" + ")";
}

function setImage(){
   document.getElementById("main").style.backgroundImage = pickImage();
}

setImage();
setInterval(setImage, 1200000);  //20 minutes

//DATE
setInterval(time, 1000);

function time(){
   const ido = new Date();
   let hour = ido.getHours();
   let min = ido.getMinutes();
   document.getElementById("time").innerHTML = zero(hour) + ":" + zero(min);
}

function zero(szam){
   if(szam < 10)
      szam = "0" + szam;
   return szam;
}

date();
function date(){
   const da = new Date();
   let year = da.getFullYear();
   let month = da.getMonth() + 1;
   let day = da.getDate();
   let trueDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   document.getElementById("day").innerHTML = trueDay[da.getDay()];
   document.getElementById("date").innerHTML = year + "." + zero(month) + "." + zero(day) + ".";
}

//TO DO LIST
const storageKey = "tutorial_todos";

const convertStringToObj = (str) => JSON.parse(str) || [];

const convertObjToString = (obj) => JSON.stringify(obj) || '';

const getTodos = () => convertStringToObj(localStorage.getItem(storageKey));

const addTodo = (todo) => localStorage.setItem(storageKey, convertObjToString([...getTodos(), todo]));

const deleteTodo = (todo) => localStorage.setItem(storageKey, convertObjToString(getTodos().filter(_todo => _todo !== todo)));

const buildTodoEl = (todo) => {
    const el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerText = todo;
    return el;
}

const appendLiToDom = (el) => document.getElementById("todo-list").appendChild(el);

const clearTodoListDisplay = () => document.getElementById("todo-list").innerHTML = "";

const clearInput = () => document.getElementById("input").value = "";

const displayTodos = () => {
    clearInput();
    clearTodoListDisplay();
    getTodos().forEach(_todo => appendLiToDom(buildTodoEl(_todo)));
    initClickListeners();
}
const initClickListeners = () => {
    Array.from(document.getElementsByClassName("list-group-item")).forEach(_item => {
        _item.addEventListener("click", ($event) => {
            const todo = $event.target.innerText;
            if(window.confirm("Have you completed this task?\n  " + todo)) {
                deleteTodo(todo);
                displayTodos();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => displayTodos());

document.getElementById("new-element-button").addEventListener("click", ($event) => {
    const newTodoInput = document.getElementById("input");
    if(newTodoInput.value) {
        addTodo(newTodoInput.value.trim());
        displayTodos();
    }
});

//LEFT SIDE ANIMATION
let bool = true;
let side;
let button;

const leftSide = document.querySelector(".leftSide");
const icon = document.getElementById("icon");

document.getElementById("icon").addEventListener("click", function(){
   return bool ? leftSideOpen() : leftSideClose();
});

function leftSideOpen(){
   leftSide.style.animation = "leftSideOpen 0.8s ease-out forwards";
   icon.style.animation = "iconOpen 0.8s ease-out forwards";
   bool = false;
}
function leftSideClose(){
   leftSide.style.animation = "leftSideClose 0.8s ease-out forwards";
   icon.style.animation = "iconClose 0.8s ease-out forwards";
   bool = true;
}


//COMMAND PALETTE
let downPos = false;
const cp = document.querySelector(".commandP");
let cInput = document.getElementById("commandInput");

document.addEventListener("keydown", (e) => {
   if(e.which == '40'){
      if(!downPos){
         cp.style.animation = "appear 0.45s linear normal forwards";
         cInput.style.animation = "inputAnimation 0.25s 0.2s linear normal forwards"
         cInput.focus();
         downPos = true;
      }
   }
});

cInput.addEventListener("keypress", (e) => {
   if(e.key === "Enter"){
      orders();
      cInput.value = "";
      cp.style.animation = "disappear 0.4s normal linear forwards";
      cInput.style.animation = "inputAnimationBack 0.4s linear normal forwards"
      let el = document.querySelector( ':focus' );
      if(el)
         el.blur();
      downPos = false;
   }
});

//gmail, facebook, moodle, neptun, youtube, idokep(keszthely), drive, subtitle, menetrend, cstimer
//oldalsáv -> done -> "side", "closeside"
function orders(){
   switch (cInput.value) {
      case "cstimer":
         window.open("https://www.cstimer.net/", "_blank");
         break;
      case "help":
         alert(" moodle, neptun, drive, gmail, facebook, subtitle, menetrend \n youtube - y \n időjárás - weather \n csTimer - cstimer \n oldalsáv - side, closeside");
         break;
      case "side":
         leftSideOpen();
         break;
      case "closeside":
         leftSideClose();
         break;
      case "menetrend":
         window.open("https://menetrendek.hu/", "_blank");
         break;
      case "subtitle":
         window.open("https://www.opensubtitles.org/hu", "_blank");
         break;
      case "drive":
         window.open("https://drive.google.com", "_blank");
         break;
      case "gmail":
         window.open("https://mail.google.com", "_blank");
         break;
      case "facebook":
         window.open("https://www.facebook.com", "_blank");
         break;
      case "moodle":
         window.open("https://oktatas.mik.uni-pannon.hu/login/index.php", "_blank");
         break;
      case "neptun":
         window.open("https://neptun11.uni-pannon.hu/hallgato/Login.aspx?timeout=", "_blank");
         break;
      case "y":
         window.open("https://www.youtube.com/", "_blank");
         break;
      case "weather":
         window.open("https://www.idokep.hu", "_blank");
         break;
   }
}
