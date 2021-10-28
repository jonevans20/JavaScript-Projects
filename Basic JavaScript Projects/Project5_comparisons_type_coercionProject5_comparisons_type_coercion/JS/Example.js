function my_Function() {
    document.getElementById("Test").innerHTML=0/0; //Not a Number (NaN): will return NaN because 0 is not divisible by 0
}

//practice with string:
function string() {
    document.getElementById("test").innerHTML= isNaN("this is a string"); //inputted this is a string - should return "true"
}

//practice with a number:
function number() {
    document.getElementById("_test").innerHTML=isNaN("787"); //input is a number - will return "false"
}

//Infinity is any number > 1.7976931348623157E308
document.write(2E310); //infinity example
document.write("<br>");//line break to clean up display

//-infinity is any number < -1.7976931348623157E308
document.write(-3E310); //negative infinity example
document.write("<br>");//line break to clean up display

//Boolean Logic - a statement that is either true or false
document.write(5>1); //the result should return the true statement because 5 is GREATER THAN 1
document.write("<br>");

document.write(9<3); //the result should return the "false" statement because 9 is NOT LESS THAN 3
document.write("<br>");

//Console.log() Method: can open console using a few different methods. ctrl+shift+i, F12 or going through the three dots in the upper right and clicking developer tools
console.log(2+2); //will display the number "4" in the console found in the dev tools
console.log(6>18); //displays "false" using Boolean Logic in the console

//Double Equals Signs: used to check for equality. Will return a true or false
document.write((30+40)==70); //this Boolean statement is "true" because 30 plus 40 is equal to 70
document.write("<br>");

document.write((5*4)==45); //this Boolean statement is "false" because 5 times 4 is NOT equal to 45
document.write("<br>");

//Triple Equals Signs: used to show that a comparison should be made. Used to check whether data on the left is equal to data on the right
a=5
b=5
document.write(a===b); //Since 5 is equal to 5, this Boolean statement is "true"
document.write("<br>");

c=5
d="5"
document.write(c===d); //This is comparing an integer to a string resulting in a "false" statement (Same value with different data types)
document.write("<br>");

e="Tesla"
f="Tesla"
document.write(e===f); //This is comparing a string to a string. Both are equal thus return "true"
document.write("<br>");

g=10
h=12
document.write(g===h); //This example contains two of the same data types with different values resulting in "false"
document.write("<br>");

i=44
j="Rimac"
document.write(i===j); //Different data type, different value; result = "false"
document.write("<br>");

//Logical Operators: AND written: &&, OR written: ||, NOT written: !
//&& compares the logic between values or variables. All statements must be true to return a "true"
document.write(6>4 && 8<16); //Both statements are true. Returns a statement of "true"
document.write("<br>");

document.write(5>2 && 6>18); //Both statements are NOT true. Returns a statement of "false
document.write("<br>");

//|| requires only one statement to be true to return a "true"
document.write(88==88 || 6<2); //This statement is true because one of the two statements is true. 
document.write("<br>")

document.write(45>54 || 7>84); //This statement is false because both statements are false
document.write("<br>");

//NOT Operators - Checks whether or not something is true. If the statement is false, "true" will be returned and vice versa
function not_Function() {
    document.getElementById("Not").innerHTML = !(6>18); //Because this is a false statement, this should return a "true"
}

function NOT_Function() {
    document.getElementById("not").innerHTML = !(6<18); //This statement is true and should result in a return of "false"
}