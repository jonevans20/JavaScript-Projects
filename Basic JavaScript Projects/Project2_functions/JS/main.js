function myFunction() {
    var sentence = "If you only knew the power"; //I split this quote in half to be able to concatenate two strings
    sentence += " of the Dark Side!" //One of the greatest quotes... ever...    
    document.getElementById("Concatenate").innerHTML=sentence;
}

var foo = document.getElementByTagName("p")


function myMath (a,b) {
    var x = a+b
    document.getElementById("add").innerHTML=x;
    }


function addition_Function() {
    var addition =2+2;
    document.getElementById("Math").innerHTML="2+2= " + addition;
}