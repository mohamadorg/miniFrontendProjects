window.addEventListener("load", () => {
  let lat;
  let long;
  const api = "4e959d0b0ccf234716e13f4cc5b0430b";
  let tempratureDescription = document.querySelector(".temprature-descreption");
  let tempratureDegree = document.querySelector(".temprature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temprature = document.querySelector(".temprature");
  let tempratureSpan = document.querySelector(".temprature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //console.log(position);
      lat = position.coords.latitude;
      long = position.coords.longitude;

      let base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      fetch(base)
        .then((response) => {
          //console.log(response.json())
          return response.json();
        })
        .then((data) => {
          console.log(data);
            let temp = data.main.temp;
          //set DOM elements
          tempratureDegree.textContent = temp;
          tempratureDescription.textContent = data.weather[0].description;
          locationTimezone.textContent = data.sys.country + " / "+ data.name;

          // formula for Farenheit
          let Farenheit = (temp*9) / 5+32;
          //change temprature celsius / Farenheit
          temprature.addEventListener('click' , ()=>{
            if(tempratureSpan.textContent === "°C"){
                tempratureSpan.textContent = "°F" ;
                tempratureDegree.textContent = Math.floor(Farenheit);
            }else{
                tempratureSpan.textContent = "°C" ;
                tempratureDegree.textContent = temp;
            }
          })
        });
    });
  } else {
    alert("geolocation not support");
  }
});
