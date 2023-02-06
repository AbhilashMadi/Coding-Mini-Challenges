const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

const display = document.getElementsByClassName("value");
const changeBy = document.getElementById("changeBy");

const reset = document.getElementById("reset");


increment.addEventListener("click",() => {
    display.textContent = +display.textContent + changeBy.valueAsNumber;
})

decrement.addEventListener("click",() => {
    display.textContent = +display.textContent - changeBy.valueAsNumber;
})

changeBy.addEventListener("change",() => {
    const changeByValue = changeBy.valueAsNumber;

    if(Number.isNaN(changeByValue)){
        changeBy.value = 1;
    } else if (changeByValue < 0){
        changeBy.value = 1;
    } else if (changeByValue > 10){
        changeBy.value = 10;
    }
})

reset.addEventListener("click",() => {
    display.textContent = 0;
})