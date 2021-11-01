//"while" loop example:
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//length example:
function length() {
    var string = "Thomas Edison and Nikola Tesla make up the original AC/DC."
    document.getElementById("example").innerHTML = string.length;;
}

//for loop example:
var Instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//arrays and objects example:
function cat_pics() {
    var cat_picture = [];
    cat_picture [0] = "sleeping";
    cat_picture [1] = "playing";
    cat_picture [2] = "eating";
    cat_picture [3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " +
        cat_picture[2] + ".";
}

function array_function() {
    var race_car_picture = [];
    race_car_picture [0] = "Porsche 917";
    race_car_picture [1] = "Porsche 962";
    race_car_picture [2] = "Ferrari 330 P4";
    race_car_picture [3] = "Ford GT40";
    document.getElementById("array").innerHTML = "One of the most successful race cars of all times is the " +
        race_car_picture [1] + ".";
}

//constant keyword
function constant_function() {
    const Car = {Make:"Tesla ", Model:"Model S ",color:"white "};
    Car.color = "blue";
    Car.price = "$130,000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Car.Make + "was " + Car.price;
}

//let keyword - declares variables that can have block scope. Similar to "var"
    //var keyword cannot have block scope while a let var can
var x = 82;
document.write(x);
    {let x = 83;
    document.write("<br>" + x);
}
document.write("<br>" + x);

//JavaScript return Statement: stops the execution of a function and returns the value from that function
//Example: Returning the value of PI
function myMath() {
    var a = 1;
    var b = 2;
    var x = a*b;
    return x;
}
document.write("<br>" + myMath());

let car = {
    make: "Porsche ",
    model: "911 GT3 ",
    year: "2022 ",
    color: "green ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//Break statement: jumps out of a loop.
//Continue statement: breaks one iteration in the loop, if a specified condition occurs and continues with the next iteration int he loop.

//Break Statement Example: 
var text = "";
for(var i = 0; i<10; i++) {
    if(i===8) { break; } //this statement stops the loop once the process gets to the 5th index
    if(i===4) { continue; } //this statement skips over the line including the number 4
    text += "The number is " + i + "<br>";
}
document.getElementById("break_Statement").innerHTML = text;

