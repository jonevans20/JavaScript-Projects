//JS for the Form Validation portion of the Form Challenge
function validateForm() {
    let x = document.forms["myForm"]["firstname","lastname","email"].value;
    if (x =="") {
        alert("You must fill out the information"); //if the info isn't entered, an alert screen will pop up
        return false;
    }
}

//JS for popup form
function openForm() {
    document.getElementById("popup").style.display = "block";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
}

$("slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');

}, 3000);

