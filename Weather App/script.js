const apiKey="8484accf0f8cf74d2b365fac3df3eb1d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const inputBox = document.getElementById("input-box");


async function checkWeathercity(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".temp").innerHTML= data.main.humidity + "%";
    document.querySelector(".temp").innerHTML= data.wind.speed + " km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";

    }
    

}


function handleKeyPress(e) {
    if (e.keyCode === 13) {
        checkWeathercity(searchBox.value);
    }
}
inputBox.addEventListener("keydown", handleKeyPress, false);

searchBtn.addEventListener("click",()=>{
    checkWeathercity(searchBox.value) ;

})