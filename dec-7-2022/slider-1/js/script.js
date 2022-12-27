const main = document.querySelectorAll(".main")[0];
const dot = document.querySelector("#dot");
const mainChilds = Array.from(main.children);
const totalChield = mainChilds.length;
let startPoint = 0;
const left = document.getElementById("left");
const right = document.getElementById("right");

const controlDisplayClass = () => {
  for (let i = 0; i < totalChield; i++) {
    if (startPoint === i) {
      mainChilds[i].classList.remove("d-none");
    } else {
      mainChilds[i].classList.add("d-none");
    }
  }
};

const controlStartPoint = () => {
  controlDisplayClass();
  doting();
  yusufVaiPlus();
};

let sliding = setInterval(() => {
  controlStartPoint();
}, 2000);

main.addEventListener("mouseover", () => {
  clearInterval(sliding);
  yusufVaiMinus();
});
left.addEventListener("mouseover", () => {
  clearInterval(sliding);
});
right.addEventListener("mouseover", () => {
  clearInterval(sliding);
});
main.addEventListener("mouseout", () => {
  sliding = setInterval(() => {
    controlStartPoint();
  }, 2000);
});
left.addEventListener("mouseout", () => {
  sliding = setInterval(() => {
    controlStartPoint();
  }, 2000);
});
right.addEventListener("mouseout", () => {
  sliding = setInterval(() => {
    controlStartPoint();
  }, 2000);
});

const doting = () => {
  dot.innerHTML = null;
  for (let i = 0; i < totalChield; i++) {
    const li = document.createElement("li");
    li.innerText = i + 1;
    if (i === startPoint) {
      li.classList.add("activeDot");
    } else {
      li.classList.remove("activeDot");
    }
    dot.appendChild(li);
  }
  const dotArr = Array.from(dot.children);
  for (let i = 0; i < dotArr.length; i++) {
    dotArr[i].addEventListener("click", () => {
      startPoint = i;
      controlStartPoint();
    });
  }
};

const yusufVaiMinus = () => {
  if (startPoint != 0) {
    --startPoint;
  } else {
    startPoint = totalChield - 1;
  }
};

const yusufVaiPlus = () => {
  if (startPoint < totalChield - 1) {
    ++startPoint;
  } else {
    startPoint = 0;
  }
};

left.addEventListener("click", () => {
  yusufVaiMinus();
  controlDisplayClass();
  doting();
});

right.addEventListener("click", () => {
  yusufVaiPlus();
  controlDisplayClass();
  doting();
});
