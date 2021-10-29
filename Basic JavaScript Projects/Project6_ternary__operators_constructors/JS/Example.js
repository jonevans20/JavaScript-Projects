//Nested Functions
function count_Function() {
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function add_Function() {
    document.getElementById("nesting_Function").innerHTML= Add();
    function Add() {
        var starting_point = 6;
        function plus_one() {starting_point += 5;}
        plus_one();
        return starting_point;
    }
}