const lightON = document.getElementById("lightON");
const lightOff = document.getElementById("lightOff");
const lightImg = document.getElementById("lightImg");
const bd = document.getElementById("bd");
const bb = document.getElementById("bb");
const swj = document.getElementById("swj");
const img2 = document.getElementById("img2");

/* 
const jasim = () => {
  alert("Alhadulillah! lottary paisi!");
};
lightON.addEventListener("click", jasim); 
*/

lightON.addEventListener("click", () => {
  lightImg.src = "./images/pic_bulbon.gif";
});

lightOff.addEventListener("click", () => {
  lightImg.src = "./images/pic_bulboff.gif";
});

bd.addEventListener("click", () => {
  img2.src = "./images/bangladesh.jpg";
});

bb.addEventListener("click", () => {
  img2.src = "./images/bongoBondhu.jpg";
});

swj.addEventListener("click", () => {
  img2.src = "./images/sajob.jpg";
});

img2.addEventListener("mouseover", () => {
  img2.src = "./images/seikhHasina.webp";
});
