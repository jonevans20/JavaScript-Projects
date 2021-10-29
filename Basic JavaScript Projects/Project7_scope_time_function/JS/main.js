//Global and Local Variables:
    //scope: consists of the functions,variables and objects you have access to. It can be limited. Variables have scope in that 
    //they can either be accessed by one, more than one or all functions in a program. The scope of variables is either Global or Local

//Global Variable Example 
var x=48; //variable is external to the function and is accessed by both functions
function add_numbers_1() {
    document.write(95 + x + "<br>");
}
function add_numbers_2() {
    document.write(x+82 + "<br>");
}
add_numbers_1();
add_numbers_2();

//Local Variable Example
function Add_numbers_1() {
    var y=10; //variable is local to this function
    document.write(20 + y + "<br>");
}
function Add_numbers_2() {
    document.write(y+100+"<br>"); //variable is not available to this function
}
Add_numbers_1();
Add_numbers_2();
//because of the variable to being local to function Add_numbers_1, it can only provide an answer to that function and not 
    //the second function. Because of this, when the two functions are printed, it will only provide one answer.

function Add_numbers_1() {
    var y=10; //variable is local to this function
    console.log(10 + y);
}
function Add_numbers_2() {
    console.log(y+100); //variable is not available to this function
}
Add_numbers_1();
Add_numbers_2();
//console.log can be used to debug our code to see what is going on. using console.log will prevent it from printing on the main screen
    //and can be checked by pulling up the console (ctrl+shift+i)

//If Statements: A conditional statement that specifies a section of code is to be executed if a condition is true
//If Statement Example:
if(5>4) {
    document.write("The number on the left is larger than the number on the right. <br>");
}