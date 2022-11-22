const label = document.querySelectorAll(".label")[0];
const details = document.querySelectorAll(".details")[0];

const labelChilds = Array.from(label.children);
const detailsChilds = Array.from(details.children);

for (let i = 0; i < labelChilds.length; i++) {
  labelChilds[i].addEventListener("click", (e) => {
    const clickedIndex = labelChilds.indexOf(e.target);
    for (let j = 0; j < detailsChilds.length; j++) {
      if (clickedIndex === j) {
        labelChilds[j].classList.add("active");
        detailsChilds[j].classList.remove("d-none");
      } else {
        labelChilds[j].classList.remove("active");
        detailsChilds[j].classList.add("d-none");
      }
    }
  });
}
