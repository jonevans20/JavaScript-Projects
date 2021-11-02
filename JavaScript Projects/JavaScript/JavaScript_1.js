//Switch Statement: performs different actions based on conditions presented to it
    //Switch statements are a type of conditional statement.
    //Cases- various conditions that are evaluated
//Switch Statement Example:
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Implicit: actions built into a programming language that refer behind the scenes.
    //It is action automatically taken by a language
//Example:
document.write(3 + "3" + 3 +"<br>"); 
    //inputs all three numbers as a string rather than adding

//"I" as a variable: has its origin as the abbreviation for "iteration"

//Initialization and Declarations: variables are declared as "var name" and are typically followed by "= value"
    //the value is not the declarations. It is the initialization or the assignment of the value
    //Technically, you can delcare a variable with just the var statement; you do not have to have the initialization however it is best practice to include

//Variable Hoisting: refers to the fact that variables can be used before they are declared. You can declare a variable after it has been utilized
//variable hoisting example: 
x = 5;
document.write(x + "<br>");
x = 10;
document.write(x + "<br>");

//getElementsByClassName() Method: works the same way as getElementById
    //Relates to class rather than Id.
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML  = "The text has changed!"; 
} 
//despite h1 and h3 have both been given the class of "Click", we chose the first indexed item which causes the change in only the first item


//HTML <CANVAS> ELEMENT
//The <canvas> element is the container for JS graphics.
    //The canvas is a rectangular section on a webpage
//example: 

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "green"); //0 indicates what the starting color is going to be
grd.addColorStop(1, "purple");//1 indicates what the gradient will end at
ctx.fillStyle = grd;
ctx.fillRect(0,100,150,100); //adjusts the locatation inside of the canvas that the rectangle is placed

