const apikey="79047304b8b683a9720c195417a2248e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q="

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button")

async function checkWeather(city)
{
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;

    // var nummax=data.main.temp_max-273.15;
    // var nummin=data.main.temp_min-273.15;

    // document.querySelector(".minmax").innerHTML="( "+ Math.round((nummin + Number.EPSILON) * 10) / 10 +" ºC" + " - " + Math.round((nummax + Number.EPSILON) * 10) / 10 +" ºC )"

    var num=data.main.temp-273.15;

    document.querySelector(".temp").innerHTML=Math.round((num + Number.EPSILON) * 10) / 10 +" ºC";

   


    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";

    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=="Clouds")
    {
        document.querySelector(".weather-icon").src="./images/cloudy.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        document.querySelector(".weather-icon").src="./images/clear.png";
    } 
    else if(data.weather[0].main=="Rain")
    {
        document.querySelector(".weather-icon").src="./images/rainy.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        document.querySelector(".weather-icon").src="./images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        document.querySelector(".weather-icon").src="./images/mist.png";
    }
    else if(data.weather[0].main=="Haze")
    {
        document.querySelector(".weather-icon").src="./images/haze.png";
    }
    else
    {
        document.querySelector(".weather-icon").src="./images/all.png";
    }
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});