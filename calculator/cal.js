const buttons = document.querySelectorAll("#buttons button");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const clac = document.getElementById("calc");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => { 
    const value = event.target.innerText;
    if(event.target.innerText==="C" || event.target.innerText=== "←" || event.target.innerText === "=")
      return 
    
     
    result.value += value;
  })
});

clear.addEventListener("click", () => {
  result.value = "";
})

backspace.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
})

clac.addEventListener("click", () => {
  try{
    result.value = eval(result.value.toString());
  }catch(error){
    console.error("Error")
  }
})

document.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    event.preventDefault();
    try{
      result.value = eval(result.value);
    }catch(error){
      console.error("Error")
    }
  } else if(event.key === "Backspace"){
    event.preventDefault();
    result.value = result.value.slice(0, -1);
  } else if(event.key === "Escape"){
    event.preventDefault();
    result.value = "";
  } else if("0123456789+-*/().".includes(event.key)){
    event.preventDefault();
    result.value += event.key;
  }
})
  
