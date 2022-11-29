document.body.style.cssText = `
    margin: 0;
    padding: 0;
    box-sizing: borderbox;
    font-family: arial
`;

const main = document.querySelectorAll(".main")[0];
const brazil = main.children[0];

main.style.cssText = `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

brazil.style.cssText = `
    width: 400px;
    height: 250px;
    border: 20px solid transparent;
    border-image: url("../images/brazil.jpg") 200 / 20px;
    box-shadow: 0 0 10px #000, 0 0 10px #000 inset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const MonthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const h2 = document.createElement("h2");
const p = document.createElement("p");
const p2 = document.createElement("p");

p.classList.add("pakistan");
p2.classList.add("uzbegistan");

h2.classList.add("brazilText");
h2.innerHTML = "Brazil";

const yusuf = () => {
  const d = new Date();
  const hours = d.getHours();
  let h, a;
  if (hours > 12) {
    h = hours - 12;
    a = "PM";
  } else if (hours == 12) {
    h = hours;
    a = "PM";
  } else {
    h = hours;
    a = "AM";
  }
  const min = d.getMinutes();
  const sec = d.getSeconds();
  const month = d.getMonth();
  const year = d.getFullYear();
  const day = d.getDate();
  p.innerHTML = day + "/" + MonthArr[month] + "/" + year;
  p2.innerHTML = `${h}  :  ${min}  :  ${sec}  ${a}`;
};

setInterval(yusuf, 1000);

brazil.appendChild(h2);
brazil.appendChild(p);
brazil.appendChild(p2);
