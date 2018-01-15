function start() {
  let d = document.getElementsByClassName("rectangle");
  d[0].addEventListener("mouseover", detailsOn);
  d[0].addEventListener("mouseleave", detailsOff);
  d[0].addEventListener("dblclick", green);
}

function detailsOn() {
  var on = document.getElementsByClassName("rectangle");
        on[0].classList.add( "important");
}

function detailsOff() {
  var off = document.getElementsByClassName("rectangle");
        off[0].classList.remove("important");
}

function green() {
  var click = document.getElementsByClassName("rectangle");
      click[0].classList.toggle( "good");
}

function hide (){
  var x = document.getElementsByClassName("rectangle");
  if (x[0].style.display === "none") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}
























/*  Cikle let kintamajam kuiamas 1 scopas skliausteliams ir kitas blokui
Todel po log i istrinama let i = 100 reiksme.
    */
    /*
for (let i = 0; i < 10; i++)
  console.log(i);
  {
  let i = 100;
  console.log(i);
}
*/

// Kintamasis kaip funkcijos nuoroda:

/*function test (){
  return 10;
}
let a = test();// vykdo funkcija, nes yra sklaiusteliai
let b = test; // rodo i funkcija
let c = b();
console.log(a,b,c);
*/

//

/*let m = {
  g:"Mazda",
  speed: 0,
  accelerate: function(){
  this.speed += 5;
},
  break: function(){
  this.speed -= 5;
  }
};

m.accelerate();
console.log(m.speed);
m.accelerate();
console.log(m.speed);
m.break();
console.log(m.speed);
*/


//m1.xx m2.xx yra kontekstas, jei nera nurodytas kontekstas - kontekstas automatinis yra "window"- objektas
// o node.js yra objektas global

/*let accelerate = function () {
  this.speed += 5;
};

let stop = function() {
  this.speed -= 5;
};

let m1 = {
  g:"Mazda",
  speed: 0,
  accelerate: accelerate,// objekto funkcija (metodas)
  stop: stop
}

let m2 = {
  g:"Lada",
  speed: 0,
  accelerate: accelerate,
  stop: stop
}

m1.accelerate();
m1.accelerate();
m2. accelerate();
m1.stop();
m2.accelerate();
m2.stop();

console.log(m1,m2);
*/

//HTML DOM - visas didelis objektas kuri padaro narsykle parsindama i HTML
/*
Tas objektas vadinasi - window

Issiskaitom visus document elementus is html body sekcijos
*/
/*
for (let i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i].tagName);
}
*/
// Events - ivykiai su objektu. Toks ivykis gali iskviesti funkcija.
//Daugumoj atveju - JS turi pradeti veikti, kai uzkrovem pilnai puslapi.

//Funkcija vykdoma tik ja iskvietus
/*function start(){
for (let i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i].tagName);
}
}


function peleJuda(evt){

  console.log(evt.clientY, evt.clientX);
  console.log(evt.buvoPele);
  evt.stopPropagation();//stop bubbling
  evt.buvoPele = true; //Element bubbling
}
*/

// Create element funkcionalumas

// function start(){
// let d = document.createElement("div");
// document.body.appendChild(d);
// let t = document.createElement("h1");
// t.appendChild(document.createTextNode("Hello"));//child hello ikeliam i t, huriam yra h1
// d.appendChild(t);//i d ikeliam kaip vaika t, kuriam yra h1;
// }

//Daugybos lentele
//Mano

/*function start(){

  var heading = [];
  var row = [];
  var colum = [];

  let tabl = document.createElement("table");
  document.getElementById("dLentele").appendChild(tabl);
  row[0] = document.createElement("tr");
  tabl.appendChild(row[0]);
  heading[i] = document.createElement("th");
  row[0].appendChild(heading[i]);
  for (var i = 1; i <= 10; i++) {
    heading[i] = document.createElement("th");
    row[0].appendChild(heading[i]);
    heading[i].appendChild(document.createTextNode(i));
  }

  for (var j = 1; j < 11; j++) {
    row[j] = document.createElement("tr");
    tabl.appendChild(row[j]);
    colum[0] = document.createElement("td");
    row[j].appendChild(colum[0]);
    var d = document.createElement("h4");
    d.appendChild(document.createTextNode(j));
    colum[0].appendChild(d);

    for (var k = 1; k < 11; k++) {
      colum[k] = document.createElement("td");
      row[j].appendChild(colum[k]);
      colum[k].appendChild(document.createTextNode((k)*(j)));
    }
  }
  document.getElementById("dLentele").style.border = "solid #0000FF";
  console.log(tabl);
}
*/

// Destytojo

// function start(){
// let t = document.createElement("table");
// let h = document.createElement("tr");
// h.appendChild(document.createElement("th")); //kairys tuscias kampas
// for (let i=1; i<=10; i++) {
//   let th = document.createElement("th");
//   th.appendChild(document.createTextNode(i));
//   h.appendChild(th);
// }
// t.appendChild(h); //sukuriama eilute - headeris
//   for (let i=1; i<=10; i++) {
//     let r = document.createElement("tr");
//     let d = document.createElement("td");
//     d.appendChild(document.createTextNode(i));
//     r.appendChild(d);
//     for (let j=1; j<=10; j++){
//       d = document.createElement("td");
//       d.daugyba = i + "x" + j;
//       d.addEventListener("mouseover", detailsOn);
//       d.addEventListener("mouseleave", detailsOff);
//       d.appendChild(document.createTextNode(i*j));
//       r.appendChild(d);
//     }
//     t.appendChild(r);
//     }
//     document.getElementById("dLentele").appendChild(t); //pakeiciama DOM struktura, i html idedama daugybos lentele
//   }
//   function detailsOn(){
//     document.getElementById("details").appendChild(document.createTextNode(this.daugyba));
//   }
//   function detailsOff(){
//     let d = document.getElementById("details");
//       d.innerHTML = "";
//   }
