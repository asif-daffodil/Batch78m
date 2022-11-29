const picnic = document.getElementById("picnic");
const samama = document.getElementById("samama");
const loop = document.getElementById("loop");

document.body.style.cssText = `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

picnic.innerHTML = "Samama ebong Fatima picnic e jabe!";
picnic.style.cssText = `
letter-spacing: 4px;
font-size: 24px;
text-shadow: 2px 2px 2px yellow;
background: #000;
color: #0f0;
padding: 20px;
`;
picnic.style.textTransform = "uppercase";

/* function fatima() {
  alert("Ami picnic e jaboi jabo!");
} */

const fatima = () => {
  picnic.innerHTML = "Ami picnic e jaboi jabo!";
};

samama.addEventListener("click", () => {
  picnic.innerHTML = "Picnic e amio jabo, amar shoshur o jabe!";
});

picnic.addEventListener("mouseover", () => {
  picnic.innerHTML = "Samama ebong Fatima picnic e jabe!";
});

let x = 0;
while (x < 10) {
  loop.innerHTML += x;
  x++;
}
