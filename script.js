const tip_btns = document.querySelector(".tip-container").children;
const inputs = document.querySelectorAll("input");
const input_cont = document.querySelectorAll(".input-cont");
const tip_out = document.querySelectorAll(".output")[0].children[1];
const total_out = document.querySelectorAll(".output")[1].children[1];
const reset = document.querySelector(".reset-btn");


let bill = 0;
let person = 1;
let tip = 0;

function updateOutput(){  
  let tipPerPerson = Math.round(bill*tip/100/person * 100)/100;
  let total = Math.round(bill*(1+tip/100)/person * 100) / 100;


  tip_out.innerHTML = `$${tipPerPerson}`;
  total_out.innerHTML = `$${total}`;
}

for(let i=0; i<5; i++){
  tip_btns[i].addEventListener("click", ()=>{
    tip = parseInt(tip_btns[i].innerHTML.slice(0, tip_btns[i].innerHTML.length-1));
    for(let j=0; j<5; j++){
      tip_btns[j].style.backgroundColor = "#00474b";
      tip_btns[j].style.color = "#fff";
    }
    tip_btns[i].style.backgroundColor = "#9fe8df";
    tip_btns[i].style.color = "#00474b";

    updateOutput();
  })
}
tip_btns[5].addEventListener("click", ()=>{
  for(let j=0; j<5; j++){
    tip_btns[j].style.backgroundColor = "#00474b";
    tip_btns[j].style.color = "#fff";
  }
})
tip_btns[5].addEventListener("input", (e)=>{
  tip = parseFloat(e.target.value);
  if(e.target.value == ""){
    tip = 0.0
  }  
  updateOutput();
})
inputs[0].addEventListener("input", (e)=>{
  bill = parseFloat(e.target.value);
  if(e.target.value == ""){
    bill = 0.0
  }
  updateOutput();
})
inputs[2].addEventListener("input", (e)=>{
  person = parseInt(e.target.value);
  if(e.target.value == 0 || e.target.value == ""){
    person = 1;
  }
  updateOutput();
})

reset.addEventListener("click", (e)=>{
  tip = 0; 
  bill = 0;
  person = 1;
  updateOutput();

  for(let j=0; j<5; j++){
    tip_btns[j].style.backgroundColor = "#00474b";
    tip_btns[j].style.color = "#fff";
  }
  inputs[0].value = "";
  inputs[2].value = ""
})

