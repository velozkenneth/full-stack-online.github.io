import { weather_data } from './data.js';


let loadDayForecastData = () => {
	let data = weather_data[0]
        let data_city = data.city
        let data_date = data.date
        let data_maxtemperature = data.maxtemperature
        let data_mintemperature = data.mintemperature
        let data_cloudiness = data.cloudiness
        let data_wind = data.wind
        let data_rainfall = data.rainfall
        
        document.getElementById("city").innerHTML = data_city
        document.getElementById("date").innerHTML = data_date
        document.getElementById("maxtemperature").innerHTML = data_maxtemperature
        document.getElementById("mintemperature").innerHTML = data_mintemperature
        document.getElementById("cloudiness").innerHTML = data_cloudiness
        document.getElementById("wind").innerHTML = data_wind
        document.getElementById("rainfall").innerHTML = data_rainfall

        //Forecast day
        for (let forecast of data.forecast_today){
            let data_lapse = forecast.lapse
            if (data_lapse === "late"){
                document.getElementById("late_icon").innerHTML = forecast.icon
                console.log(document.getElementById("late_icon").innerHTML)
                document.getElementById("late_temperature").innerHTML = forecast.temperature
                document.getElementById("late_forecast").innerHTML = forecast.forecast
                document.getElementById("late_text").innerHTML = forecast.text
            }
            else {
                document.getElementById("night_icon").innerHTML = forecast.icon
                document.getElementById("night_temperature").innerHTML = forecast.temperature
                document.getElementById("night_forecast").innerHTML = forecast.forecast
                document.getElementById("night_text").innerHTML = forecast.text               
            }
        }
}

let loadWeekForecastData = () => {
	let data = weather_data[0]
    for (let forecast of data.forecast_week){
        let {day, text, date, temperature, icon} = forecast 
        document.getElementsByClassName("list-group")[0].innerHTML += `
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
          <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${temperature.max}</span> |  <span class="text-dark mx-2">${temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
      </li>`
    }
	
}

let eventManage  = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    //Código a ejecutar
    loadDayForecastData();
  });
  
  let element = document.getElementById("loadinfo");
  
  element.addEventListener('click', (event) => {
      //Código a ejecutar
      loadWeekForecastData();
  });
}

eventManage()