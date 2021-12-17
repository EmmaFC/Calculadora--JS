let btnAdd = document.getElementById("btn_add");
let btnSustract = document.getElementById("btn_sustract");
let btnMultiply = document.getElementById("btn_multiply");
let btnDivide = document.getElementById("btn_divide");

let btnN1 = document.getElementById("btn_number_1");
let btnN2 = document.getElementById("btn_number_2");
let btnN3 = document.getElementById("btn_number_3");
let btnN4 = document.getElementById("btn_number_4");
let btnN5 = document.getElementById("btn_number_5");
let btnN6 = document.getElementById("btn_number_6");
let btnN7 = document.getElementById("btn_number_7");
let btnN8 = document.getElementById("btn_number_8");
let btnN9 = document.getElementById("btn_number_9");
let btnN0 = document.getElementById("btn_number_0");

let btnDelete = document.getElementById("btn_delete");
let btnGetResult = document.getElementById("btn_get_result");

let currentOperation = [];

function addNumberToArrayOperation () {     
    document.getElementById("show_current_operation").innerHTML = currentOperation.join('');
    console.log(currentOperation.join(''));
}

function getFinalResult () {
    let getArrayString = currentOperation.join('').toString();
    let getAddBlocs = getArrayString.split('+');
    let sumResult = parseFloat(getAddBlocs[0]) + parseFloat(getAddBlocs[1]) ;

    for (let index = 0; index <= getAddBlocs.length; index++) {
        const element = getAddBlocs[index];
        parseFloat(element)
    }

    console.log('new array:'+ getAddBlocs);
    console.log('1 array:'+ getAddBlocs[0]);
    console.log('2 array:'+ getAddBlocs[1]);
    console.log('resut is:'+ sumResult);
}

btnGetResult.addEventListener("click", ()=> {
    getFinalResult ()
})



btnAdd.addEventListener("click", ()=>{
    currentOperation.push("+");
    addNumberToArrayOperation ();     
    separateArray ()                 
})
/* btnSustract.addEventListener("click", ()=>{
    currentOperation.push("-");
    addNumberToArrayOperation (); 
    separateArray () 
})
btnMultiply.addEventListener("click", ()=>{
    currentOperation.push("x");
    addNumberToArrayOperation (); 
    separateArray () 
})
btnDivide.addEventListener("click", ()=>{
    currentOperation.push("/");
    addNumberToArrayOperation (); 
    separateArray () 
})  */


btnN1.addEventListener("click", ()=> {
    currentOperation.push(1);
    addNumberToArrayOperation ()
})

btnN2.addEventListener("click", ()=> {
    currentOperation.push(2);
    addNumberToArrayOperation ()
})

btnN3.addEventListener("click", ()=> {
    currentOperation.push(3);
    addNumberToArrayOperation ()
})

btnN4.addEventListener("click", ()=> {
    currentOperation.push(4);
    addNumberToArrayOperation ()
})

btnN5.addEventListener("click", ()=> {
    currentOperation.push(5);
    addNumberToArrayOperation ()
})

btnN6.addEventListener("click", ()=> {
    currentOperation.push(6);
    addNumberToArrayOperation ()
})

btnN7.addEventListener("click", ()=> {
    currentOperation.push(7);
    addNumberToArrayOperation ()
})

btnN8.addEventListener("click", ()=> {
    currentOperation.push(8);
    addNumberToArrayOperation ()
})

btnN9.addEventListener("click", ()=> {
    currentOperation.push(9);
    addNumberToArrayOperation ()
})

btnN0.addEventListener("click", ()=> {
    currentOperation.push(0);
    addNumberToArrayOperation ()
})
