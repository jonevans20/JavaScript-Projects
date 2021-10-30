//Creating a JavaScript Program Example: Timer
function countdown() {
    var seconds = document.getElementById("seconds").value; //User inputs time for the timer

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //timer pauses for 1000 miliseconds or 1 second intervals
        if(seconds == -1) {
            alert("Time is up!");//when time is up, an alert window pops up
            clearTimeout(time); //<p> line for the timer will disappear when time is up
            timer.innerHTML= "";
        }
    }
    tick();
}