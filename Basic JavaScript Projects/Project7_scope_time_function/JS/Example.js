//If Statements: A conditional statement that specifies a section of code is to be executed if a condition is true
//If Statement Example:
if(5>4) {
    document.write("The number on the left is larger than the number on the right. <br>");
}

//If Statement Practice:
function get_Date() { //In this function, it is set up to state if it is before 8pm, it's Study Time!
    if (new Date().getHours()<20) {
        document.getElementById("Study").innerHTML = "Study Time!";
    }
}

//Else Statement Practice:
function Year() { //In this function is designed to tell the user whether or not they have to take emissions
    Age=document.getElementById("year").value;
    if (Age<=1996) { //If the user's vehicle is manufactured in 1996 or older, they are not required to take emissions (according to Illinois Law)
        Emission = "You do not have to take emissions"; 
    }
    else {
        Emission = "Your vehicle is required to take emissions";
    }
    document.getElementById("vehicle_year").innerHTML = Emission;
}  

//Else If Statement Practice:
function Time_function() { 
    var Time=new Date().getHours(); //Will utilize the time on the computer as the input
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is Morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is Afternoon!";
    }
    else {
        Reply = "It is Evening";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}





