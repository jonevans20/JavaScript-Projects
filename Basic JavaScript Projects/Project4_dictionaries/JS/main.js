function my_Dictionary() { //Created a dictionary that gives information on our hypothetical Tesla
    var Automobile = {
        Make: "Tesla ",
        Model: "Model S ",
        Submodel: "Plaid ",
        Body: "Sedan ",
        Propulsion: "3 Electric Motors ",
        Color: "Black "
    };
    delete Automobile.Body //Deleted the .Body line. If run for this line, it will return the result of "undefined"
    document.getElementById("Dictionary").innerHTML =  Automobile.Make+Automobile.Propulsion //We are calling 2 pairs to be displayed
}

//"Type of Operator" Examples:
document.write(typeof "Word"); //string example
document.write("<br>");//line break to clean up the html presentation

document.write(typeof 3); //number example
document.write("<br>");//line break to clean up the html presentation
//In the first example, the output returns "string", In the second example, the output is "number"


//Type Coercion Example:
document.write("10+5"); //Cannot combine an integer and a string within the doc write. it will require a string
document.write("<br>");