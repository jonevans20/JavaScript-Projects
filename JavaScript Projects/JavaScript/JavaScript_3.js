function displayType(car) {
    var carType = car.getAttribute("data-car-type");
    alert(car.innerHTML + " dominated racing with their " 
        + carType + " in its era!");
}