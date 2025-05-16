function satu() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "1" : isi + "1";
}
function dua() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "2" : isi + "2";
}

function tiga() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "3" : isi + "3";
}

function empat() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "4" : isi + "4";
}

function lima() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "5" : isi + "5";
}

function enam() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "6" : isi + "6";
}

function tujuh() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "7" : isi + "7";
}

function delapan() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "8" : isi + "8";
}

function sembilan() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "9" : isi + "9";
}
function nol() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
layar.innerText = (isi=="0") ? "0" : isi + "0";
}

function tambah() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
const lastChar = isi.slice(-1);
if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
return;
}
layar.innerText = (isi=="0") ? "+" : isi + "+";
}
function pengurangan() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
const lastChar = isi.slice(-1);
if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
return;
}
layar.innerText = (isi=="0") ? "-" : isi + "-";
}

function perkalian() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
const lastChar = isi.slice(-1);
if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
return;
}
layar.innerText = (isi=="0") ? "*" : isi + "*";
}
function pembagian() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
const lastChar = isi.slice(-1);
if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
return;
}
layar.innerText = (isi=="0") ? "/" : isi + "/";
}
function hasil() {
const layar = document.querySelector(".layar");
let isi =layar.innerText;
isi = isi.replace(/×/g, "*").replace(/÷/g, "/");
try{
const result = eval(isi);
layar.innerText = result;
}catch (error) {
layar.innerText = "Error";
}
}


function hapus() {
    const layar = document.querySelector(".layar");
    layar.innerText = "0";
}