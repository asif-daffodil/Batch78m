const lable = document.querySelectorAll(".lable")[0];
const details = document.querySelectorAll(".details")[0];

const lableChilds = Array.from(lable.children);
const detailsChilds = Array.from(details.children);

for (let i = 0; i < lableChilds.length; i++) {
    lableChilds[i].addEventListener("click", (e) => {
        const clickedindex = lableChilds.indexOf(e.target);
        for (let j = 0; j < detailsChilds.length; j++) {
            if (clickedindex === j) {
                lableChilds[i].classList.add("active");
                detailsChilds[j].classList.remove("d-none");
            } else {
                lableChilds[j].classList.remove("active");
                detailsChilds[j].classList.add("d-none");
            }  
        }
   }) ;
}
