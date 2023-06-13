
document.addEventListener("load", clock());
function clock() {
    let datee = new Date();
    let hours = datee.getHours();
    let minutes = datee.getMinutes();
    let seconds = datee.getSeconds();
    let session = "AM";
    let divDisplayTime = document.querySelector('.clock');
    //console.log(divDisplayTime)
    //console.log(hours, minutes, seconds);
    if(hours > 12){
        hours -= 12;
        session = "PM"
    }
    // ternery operator
    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

    let time = `${hours} : ${minutes} : ${seconds}  ${session}`;

    divDisplayTime.textContent = time;

    setTimeout(clock , 1000)

  }