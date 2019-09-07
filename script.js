let slider1 = document.getElementById("1");
let slider2 = document.getElementById("2");
let slider3 = document.getElementById("3");
let slider4 = document.getElementById("4");
let slider5 = document.getElementById("5");
let slider6 = document.getElementById("6");

let div = document.querySelector("#mikey");

slider1.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(" + e.target.value + "% 0, 100% 100%, 0% 100%, 0 0%)";
});

slider2.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(100% 0, " + e.target.value + "% 100%, 0% 100%, 0 0%)";
});

slider3.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(100% 0, 100% " + e.target.value + "%, 0% 100%, 0 0%)";
});

slider4.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(100% 0, 100% 100%, " + e.target.value + "% 100%, 0 0%)";
});

slider5.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(100% 0, 100% 100%, 0% " + e.target.value + "%, 0 0%)";
});

slider6.addEventListener("input", e => {
  div.style.clipPath =
    "polygon(100% 0, 100% 100%, 0% 100%, 0 " + e.target.value + "%)";
});
