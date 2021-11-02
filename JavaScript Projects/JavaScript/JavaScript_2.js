function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if(x == "") {
        alert("Name and Email must be filled out");
        return false;
    }
}