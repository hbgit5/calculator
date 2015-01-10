var numbersArray = ['', '']; //array containing my two operands (first number and second number)
var numberIndex = 0; //a pointer to which operand I am looking at
var ops;  //which operator I am going to do on the two operands



function AddDigit(digit) {
    numbersArray[numberIndex] += digit.toString();
    document.querySelector('#equation').value += digit;
    console.log(numbersArray);

}

function doOp(operator) {
    numberIndex = 1;
    ops = operator;
    document.querySelector('#equation').value += operator;
    console.log(ops);
}

function calculate() {
    if (ops == "+"){
       result = parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
        //do addition
    }
    else if(ops == "-"){
        result = parseInt(numbersArray[0]) - parseInt(numbersArray[1]);
        //do subtraction
    }
    else if(ops == "*"){
        result = parseInt(numbersArray[0]) * parseInt(numbersArray[1]);
        // do multiplication 
    }
        
    else if(ops == "/") {
        result = parseInt(numbersArray[0]) / parseInt(numbersArray[1]);
    //do division 
    
    }
    document.querySelector('#result').value= result;
    document.querySelector('#equation').value=("");
    numberIndex = 0;
    numbersArray = ['', ''];

}
function clearDisplay(){
 document.querySelector('#result').value= "";
    document.querySelector('#equation').value=("");
    numberIndex = 0;
    numbersArray = ['', ''];}
        