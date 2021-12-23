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
}

btnGetResult.addEventListener("click", ()=> {
    getFinalResult ()
});

btnDelete.addEventListener("click", ()=> {
    currentOperation = ['']
    document.getElementById("show_current_operation").innerHTML = '';
});

function getFinalResult () {
    let getArrayString = currentOperation.join('').toString();
    let getArrayBlocs = getArrayString.split(' ')
    getArrayBlocs.map(s => Array.from(s));
    console.log(getArrayBlocs);

            getArrayBlocs.forEach(multElements);
            getArrayBlocs.forEach(divElements);
            getArrayBlocs.forEach(addElements);
            getArrayBlocs.forEach(sustElements);
            document.getElementById("show_current_operation").innerHTML = getArrayBlocs.join('');
}

function multElements (item, index, getArrayBlocs){
    
    let a = item
    let b = index
    if (a == 'x'){
        console.log("[x] -> Index " + b );
        let n1 = b - 1; 
        let n2 = b + 1;
        let c = parseInt(getArrayBlocs[n1])
        let d = parseInt(getArrayBlocs[n2])  
        let multiplication = c*d;
        console.log(c + " x " + d)
        console.log("------")
        console.log("result = " + multiplication)
        getArrayBlocs.splice( n1, 3, multiplication);
        divElements (item, index, getArrayBlocs);
        console.log('_________________________')
        console.log(getArrayBlocs)
    } 
}

function divElements (item, index, getArrayBlocs){
    let a = item
    let b = index
    if (a == '/'){
        console.log("position of '/': " + b);
        let n1 = b - 1; 
        let n2 = b + 1;
        let c = parseInt(getArrayBlocs[n1])
        let d = parseInt(getArrayBlocs[n2])  
        let division = c/d;
        console.log(c + " / " + d)
        console.log("------")
        console.log("result = " + division)
        getArrayBlocs.splice( n1, 3, division);
        addElements (getArrayBlocs);
        console.log('_________________________')
        console.log(getArrayBlocs)
    } 
} 

function addElements (item, index, getArrayBlocs){
    let a = item
    let b = index
    if (a == '+'){
        console.log("position of '+': " + b);
        let n1 = b - 1; 
        let n2 = b + 1;
        let c = parseInt(getArrayBlocs[n1])
        let d = parseInt(getArrayBlocs[n2])  
        let addition = c+d;
        console.log(c + " + " + d)
        console.log("------")
        console.log("result = " + addition)
        getArrayBlocs.splice( n1, 3, addition);
        sustElements (getArrayBlocs);
        console.log('_________________________')
        console.log(getArrayBlocs)
    } 
} 

function sustElements (item, index, getArrayBlocs){
    let a = item
    let b = index
    if (a == '-'){
        console.log("position of '-': " + b);
        let n1 = b - 1; 
        let n2 = b + 1;
        let c = parseInt(getArrayBlocs[n1])
        let d = parseInt(getArrayBlocs[n2])  
        let sustraction = c-d;
        console.log(c + " - " + d)
        console.log("------")
        console.log("result = " + sustraction)
        getArrayBlocs.splice( n1, 3, sustraction);
        console.log('_________________________')
        console.log(getArrayBlocs)
    } 
} 


btnMultiply.addEventListener("click", ()=>{
    currentOperation.push(" x ");
    addNumberToArrayOperation (); 
    separateArray () 
})

btnDivide.addEventListener("click", ()=>{
    currentOperation.push(" / ");
    addNumberToArrayOperation (); 
    separateArray () 
})  

btnAdd.addEventListener("click", ()=>{
    currentOperation.push(" + ");
    addNumberToArrayOperation ();     
    separateArray ()                 
})

btnSustract.addEventListener("click", ()=>{
    currentOperation.push(" - ");
    addNumberToArrayOperation (); 
    separateArray () 
})

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
