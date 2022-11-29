const tabHeader = document.querySelectorAll('.tabHeader')[0];
const tabDetails = document.querySelectorAll('.tabDetails')[0];

const tabHeaderChild = Array.from(tabHeader.children);
const tabDetailsChild = Array.from(tabDetails.children);

for(let i = 0; i<=3; i++){
    tabHeaderChild[i].addEventListener('click', (e)=>{
    const headerIndex =tabHeaderChild.indexOf(e.target);

    for (let j = 0; j <=3; j++) {
       if(headerIndex === j){
        tabHeaderChild[j].classList.add("active");
         tabDetailsChild[j].classList.remove("displayNone");
       }else{
         tabHeaderChild[j].classList.remove("active");
         tabDetailsChild[j].classList.add("displayNone");
       }
    }
    });

}


