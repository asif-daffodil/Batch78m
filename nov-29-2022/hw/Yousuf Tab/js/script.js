const tab = document.querySelectorAll(".tab")[0];
const content = document.querySelectorAll(".content")[0];

const tabChilds = Array.from(tab.children);
const contentChilds = Array.from(content.children);

for (let i = 0; i < tabChilds.length; i++) {
  tabChilds[i].addEventListener("click", (e) => {
    const clickIndex = tabChilds.indexOf(e.target);

    for (let j = 0; j < contentChilds.length; j++) {
      if (clickIndex === j) {
        tabChilds[j].classList.add("active");
        contentChilds[j].classList.remove("d-none");
      } else {
        tabChilds[j].classList.remove("active");
        contentChilds[j].classList.add("d-none");
      }
    }
  });
}
