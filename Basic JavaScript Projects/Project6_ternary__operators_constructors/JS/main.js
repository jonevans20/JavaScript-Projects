function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride = (Height < 48) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voter_age() {
    var age, can_vote;
    age=document.getElementById("age").value;
    can_vote = (age > 17) ? "You are old enough" : "You are too young ";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

//Object-oriented programming
//constructor - a special part of the class (a template for defining an object [iten with state and behavior])

function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Track Hawk", 2019, "White");
var Jon = new Vehicle ("Datsun", "240Z", 1970, "Silver");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Jon drives a " + Jon.Vehicle_Color + "-colored " + Jon.Vehicle_Model + 
    " manufactured in " + Jon.Vehicle_Year;
}

