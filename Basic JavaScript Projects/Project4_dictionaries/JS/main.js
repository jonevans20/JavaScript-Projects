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

