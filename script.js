const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnAdd = document.querySelector("#btnAdd");
const btnClear = document.querySelector("#btnClear");
const btnPoint = document.querySelector("#btnPoint");
const btnDivide = document.querySelector("#btnDivide");
const btnMultiply = document.querySelector("#btnMultiply");
const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
const btnZeroZero = document.querySelector("#btnZeroZero");
const btnZero = document.querySelector("#btnZero");
const btnEqual = document.querySelector("#btnEqual");
const btnInput = document.querySelector("#btnInput");



// btn1.addEventListener("click", () => {
    // btnInput.value = btnInput.value + "1";
// })

const numberButtons = document.querySelectorAll(".btn-num");

 for(const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
        btnInput.value = btnInput.value + numberButton.value;
    })
 }

 const numberButtons2 = document.querySelectorAll(".btn-num2");

 for(const numberButton2 of numberButtons2) {
    numberButton2.addEventListener("click", () => {
        btnInput.value = btnInput.value + numberButton2.value;
    })
 }








// console.log(btnAdd);



