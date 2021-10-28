function addition_Function() { //created the addition function adding 5+4
    var addition =5+4;
    document.getElementById("Math").innerHTML="5+4= " + addition;
}

function subtraction_function() { //created the subtraction function
    var subtraction = 6-4;
    document.getElementById("subtract").innerHTML="6-4= " + subtraction;
}

function multiplication() { //syntax for the multiplication function
    var times = 5*5;
    document.getElementById("by").innerHTML="5*5= " + times;
}

function division() { //syntax for the division function
    var divide = 45/9;
    document.getElementById("divided").innerHTML="45/9= " + divide;
}

function more_math() { //syntax for doing mixed math combining addition, subtraction, multiplication and division
    var pemdas = (6+4) * 10 / 100 + 1;
    document.getElementById("pemdas").innerHTML=  "6 plus 4, times 10, divided by 100, plus 1 equals " + pemdas;
}

function modulus_Operator() { //syntax for modulus operators findig the remainder in division
    var modulus = 365%13;
    document.getElementById("modulus").innerHTML= "When you divide 365 by 13, you have a remainder of " + modulus;
}

function negation_Operator() { //syntax for the negation operator
    var x=44;
    document.getElementById("unary_operator").innerHTML= -x
}

var x = 16 ; //ascending variables
x++;
document.write(x); 

var y = 33 ; //decending variable
y--;
document.write(y);



window.alert(Math.PI); //created a window alert with the number PI

window.alert(Math.floor(3.45)); //created a window alert utilizing the math floor function

function Math_random() { //created a function using the Math.random function to find a random number from 0-100
    document.getElementById("random_number").innerHTML= (Math.random()*100)
}

