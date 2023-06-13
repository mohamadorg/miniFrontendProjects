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
    milliseconds ++;
    if(milliseconds == 100){
        milliseconds = 0;
        seconds ++;
        if(seconds == 60){
            seconds = 0;
            minutes ++;
        }
    }

    //milli seconds
    if(milliseconds<10){
        DOMmillisecond.innerHTML = "0"+milliseconds;
    }else if(milliseconds > 9){
        DOMmillisecond.innerHTML = milliseconds;
    }
    //seconds
    if(seconds<10){
        DOMsecond.innerHTML = "0"+seconds;
    }else if(seconds > 9){
        DOMsecond.innerHTML = seconds;
    }
    //minutes
    if(minutes<10){
        DOMminute.innerHTML = "0"+minutes;
    }else if(minutes > 9){
        DOMminute.innerHTML = minutes;
    }
}