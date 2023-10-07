const apikey="517a594a9432bbd0a160f549a5d1c8aa";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const backgroundColor=document.querySelector(".card");


async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    var data =await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity + '%';
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".search input").value='';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png"
        document.querySelector(".card").style.background="linear-gradient(135deg,  purple, rgb(83, 52, 83))"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="Clear.png"
        document.querySelector(".card").style.background="linear-gradient(135deg, yellow,white)"

    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="Rain.png"
        document.querySelector(".card").style.background="linear-gradient(155deg, purple,blue)"

    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="Drizzle.png"
        document.querySelector(".card").style.background="linear-gradient(135deg, cyan,blue)"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="Mist.png"
        document.querySelector(".card").style.background="linear-gradient(135deg, cyan,blue)"
        document.querySelector(".card").style.opacity="0.3";
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
    
})
