//Concat() Method:
function fast_cars() { 
    var part_1 = "Tesla ";
    var part_2 = "Model ";
    var part_3 = "S ";
    var part_4 = "Plaid";
    var fastest_sedan = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = fastest_sedan;
}
//The concat() method allows us to take multiple strings and combine them.

//SLICE() METHOD:
function slice_Method() {
    var Sentence = "All work and no play makes Stewie a dull boy...";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() METHOD:
function myFunction() {
    var upper = "Tesla ftw!"; //The first variable contains the string with the statement
    var uc  = upper.toUpperCase(); //We attached the string to the toUpperCase() method
    document.getElementById("to_u_c").innerHTML = uc; 
} //When the user clicks the button, it now prints the string in all uppercase letters

//search() Method:
function mega_Mind() {
    var statement = "Mega Mind is a movie about a super villain turned super hero.";
    document.getElementById("villain").innerHTML = statement.search("hero");
} //The search() method returns the location of the selected word in the string.

//Number Methods: assists you with working with numbers
    //One type of methods is "toString()"
function string_Method() {
    var x = 44; //number selected to turn into a string
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
} //toString converts the integer to a string

//TOPRECISION() METHOD
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
} //toPrecision() method returns the number back to specific length

//toPrecision() example: PI
function simplify_numbers() {
    var y = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
    document.getElementById("numbers").innerHTML = y.toPrecision(50);
    //In this example, we are returning the number PI to 50 digits
}

//toFixed() Method:
function to_Fixed() {
    var a = 3.14159;
    var b = a.toFixed(3);
    document.getElementById("pi").innerHTML = b; 
    //toFixed() method will take your integer and round it up to the preselected place and return it as a string
}

//valueOf() Method:
function value_of() {
    var value = "I don't understand the purpose of this Method or why we would use it...";
    document.getElementById("of").innerHTML = value.valueOf();
    //this string is supposed to be used to return the primative form of the string.
    //I can write it but I don't understand when or where this would have a practical application...
}