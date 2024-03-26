const d1 = document.getElementById("date").value;
const m1 = document.getElementById("month").value;
const y1 = document.getElementById("year").value;
const submit = document.getElementById("submit");

let date = new Date();
let d2 = date.getDate();
let m2 = 1 + date.getMonth();
let y2 = date.getFullYear();
let month = [];

if (d1 > d2) {
}

let y = y2 - y1;
let m = m2;
let d = d2;

submit.addEventListener("click", () => {
  document.getElementById(
    "age"
  ).innerHTML = `Your age is ${y} years ${m} Months ${d} Days`;
});
