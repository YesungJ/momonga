//String 
/*
const what ="Yesung"

console.log(what);
*/

//Boolean = True or False
/*
const wat = true;
*/

//Number
/*
const wat = 666;
*/

//float
/*
const wat = 55.1;
*/

//Array スペースの代わりに大文字, 리스트/

//Array スペースの代わりに大文字, 리스트
/*
const something ="soomething";

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun", true,54, something];
console.log(daysOfWeek);
*/


/*
const something ="soomething";

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun", true,54, something];
console.log(daysOfWeek);
*/

//Object 각 value 에 이름을 줄 수 있음음
/*
const yesungInfo = {
  name : "yesung",
  age : 28,
  gender : "Male",
  isHandsome : true,
  favMovies : ["Intothestorm","LOTR","Oldboy"],
  favFood : [{name:"kimchi", fatty:false}, {name:"cheese", fatty:true}]
}
console.log(yesungInfo.isHandsome);

yesungInfo.isHandsome = false;

console.log(yesungInfo.isHandsome);

console.log(yesungInfo);
*/

/*console is Object
and log is function*/

/*function */ 
/*
console.log(console);
*/
//자바스크 함수정의

/*
function sayHello(name, age){
  console.log('hello', name,"you have",age,"years of age");
}

//괄호안에 들어가는 것 argument 인자
sayHello("Jang", 28);
console.log("Hi");
*/
/*
function sayHello(name, age){
  console.log("hello" + name + "you are" + age + "years old");
}*/
/*
function sayHello(name, age){
  console.log(`hello ${name} you are ${age} years old`);
}
*/
/*
function sayHello(name, age){
  console.log(`hello ${name} you are ${age} years old`);
  return(`hello ${name} you are ${age} years old`);
  






    minus: function(a, b){
    return a-b;
  }
  kakeru: function(a,b){
    return a*b;
  }
  nizyoo: function(a){
    return a^2;
  }
const minus = calculator.minus(a, b);
const kakeru = calculator.kakeru(a, b);
const nizyoo = calculator.nizyoo(a);
console.log(minus);
console.log(kakeru);
console.log(nizyoo);
}

const greetYS = sayHello("YS", 29);
*/
/*
const a = 10;
const b = 10;

const calculator = {
  plus: function(a, b){
    return a+b;
  },
    minus: function(a, b){
    return a-b;
  },
  kakeru: function(a,b){
    return a*b;
  },
  nizyoo: function(a){
    return a^2;
  }
}
const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const kakeru = calculator.kakeru(a, b);
const nizyoo = calculator.nizyoo(a);

console.log(plus);
console.log(minus);
console.log(kakeru);
console.log(nizyoo);
*/
/*
const title = document.getElementById("title");
title.innerHTML = "hi! from js";
title.style.color="red";
console.log(title);
console.error("fuck");
console.dir(document);
document.title("i own you now");
*/
/*
const title = document.querySelector("#title");

function handClick(){
    
    title.style.color="blue";
}

function handleResize(event){
    console.log(event);
}

title.addEventListener("click",handClick);
*/
/*
if(5===10){
    console.log("hi");
}
else{
    console.log("ho");
}
*/
/*
const age = prompt("how old are you?");

console.log(age);
if(age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
}else if(age > 21){
    console.log("go ahead");
}else{
    console.log("you can not drink");
}
*/
/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    
    if(currentColor === BASE_COLOR){
        title.style.color=OTHER_COLOR;
    } else{
        title.style.color=BASE_COLOR;
    }
}


function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();

function handleOffline(){
    console.log("lalalal");
}
function handleOnline(){
    console.log("online");
}
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);
*/


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*toggle wow add or remove
    const hasClass=title.classList.contains(CLICKED_CLASS);

    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
    */
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick);
}

init();