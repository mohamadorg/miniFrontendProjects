let DOMminute = document.getElementById('minute');
let DOMsecond = document.getElementById('second');
let DOMmillisecond = document.getElementById('millisecond');
let intervall = 0;
let [milliseconds , seconds , minutes] = [0,0,0];
function startt(){
    clearInterval(intervall);
    intervall = setInterval(startTimer, 10);
}
function stopp(){
    clearInterval(intervall);
}
function resett(){
    clearInterval(intervall);
    [milliseconds , seconds , minutes] = [0,0,0];
    DOMminute.innerHTML = "00";
    DOMsecond.innerHTML = "00";
    DOMmillisecond.innerHTML = "00";
}

function startTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds ++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }

    DOMminute.innerHTML = minutes;
    DOMsecond.innerHTML = seconds;
    DOMmillisecond.innerHTML = milliseconds;
}