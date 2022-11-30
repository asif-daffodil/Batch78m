const title = document.querySelectorAll(".title");
const titleArr = Array.from(title);
console.log(titleArr);

/* 
titleArr.map((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.classList.contains("hidden")) {
      e.target.classList.value = "title active";
      e.target.nextElementSibling.classList.value = "show";
    } else {
      e.target.classList.value = "title";
      e.target.nextElementSibling.classList.value = "hidden";
    }
  });
}); 
*/

for (let i = 0; i < titleArr.length; i++) {
  titleArr[i].addEventListener("click", () => {
    for (let j = 0; j < titleArr.length; j++) {
      if (i === j) {
        if (titleArr[j].nextElementSibling.classList.contains("hidden")) {
          titleArr[j].classList.value = "title active";
          titleArr[j].nextElementSibling.classList.value = "show";
        } else {
          titleArr[j].classList.value = "title";
          titleArr[j].nextElementSibling.classList.value = "hidden";
        }
      } else {
        titleArr[j].classList.value = "title";
        titleArr[j].nextElementSibling.classList.value = "hidden";
      }
    }
  });
}
