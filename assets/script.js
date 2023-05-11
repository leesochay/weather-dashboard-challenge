var today = dayjs();
var fetchButton = document.getElementById('fetch-button');

// function for the current weather conditions
function getCityCurrent(){
// clear any data for a fresh start  
    $("div").empty();
 
// The data from the search
    var city = document.getElementById('cityName').value;
    var state = document.getElementById('stateCode').value;

// Obtain the data from the openweathermap API for current weather conditions
    var requestCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + ",US&appid=dfff74363215fd3bf8e8259c31526b0b&units=imperial";
    
    fetch(requestCurrent)
    .then(function (response) {
          return response.json();
          })
    .then(function (data) {
         console.log(data)
// Day.js formatting for the current day
         $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

// Current weather conditions elements for html and display
        var currentCityEl = document.createElement('p');
        currentCityEl.setAttribute("style", "font-size:28px");
        currentCityEl.innerHTML = data.name;
        document.getElementById("current-conditions").appendChild(currentCityEl);

        var cityIcon = document.createElement('img');
        cityIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        document.getElementById("current-conditions").appendChild(cityIcon);

        var currentTempEl = document.createElement('p');
        currentTempEl.setAttribute("style", "font-size:20px");
        currentTempEl.innerHTML = "Temp: " + data.main.temp + "°F";
        document.getElementById("current-conditions").appendChild(currentTempEl);

        var currentWindEl = document.createElement('p');
        currentWindEl.setAttribute("style", "font-size:20px");
        currentWindEl.innerHTML = "Wind: " + data.wind.speed + " MPH";
        document.getElementById("current-conditions").appendChild(currentWindEl);

        var currentHumidityEl = document.createElement('p');
        currentHumidityEl.setAttribute("style", "font-size:20px");
        currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById("current-conditions").appendChild(currentHumidityEl);
            });
        }

//  Function for the forecast weather data
        function getCityForecast(){
            $("div").empty();
            var cityFor = document.getElementById('cityName').value;
            var stateFor = document.getElementById('stateCode').value;
// API request for forecast data
            var requestCurrent = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityFor + "," + stateFor + ",US&appid=dfff74363215fd3bf8e8259c31526b0b&units=imperial";
            
            fetch(requestCurrent)
            .then(function (response) {
                  return response.json();
                  })
            .then(function (data) {
                 console.log(data)
        
// For loop for 5 return values
for (let index = 0; index < data.list.length; index++) {
// obtain consistent forecast based on time of day    
    let dateTest = data.list[index].dt_txt.includes("18:00:00", 0);
if (dateTest) {
                var dayForecast = document.createElement('div');
                dayForecast.setAttribute("id", index);
                dayForecast.setAttribute("class", "forecast-box");
                document.getElementById("forecast-conditions").appendChild(dayForecast);
    
                var forecastDate = document.createElement('p');
                forecastDate.setAttribute("style", "font-size:20px");
                forecastDate.innerHTML = data.list[index].dt_txt;
                document.getElementById(index).appendChild(forecastDate);

                var forecastIcon = document.createElement('img');
                forecastIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[index].weather[0].icon + ".png");
                document.getElementById(index).appendChild(forecastIcon);
        
                var forecastTempEl = document.createElement('p');
                forecastTempEl.setAttribute("style", "font-size:20px");
                forecastTempEl.innerHTML = "Temp: " + data.list[index].main.temp + "°F";
                document.getElementById(index).appendChild(forecastTempEl);
        
                var forecastWindEl = document.createElement('p');
                forecastWindEl.setAttribute("style", "font-size:20px");
                forecastWindEl.innerHTML = "Wind: " + data.list[index].wind.speed + " MPH";
                document.getElementById(index).appendChild(forecastWindEl);
        
                var forecastHumidityEl = document.createElement('p');
                forecastHumidityEl.setAttribute("style", "font-size:20px");
                forecastHumidityEl.innerHTML = "Humidity: " + data.list[index].main.humidity + "%";
                document.getElementById(index).appendChild(forecastHumidityEl);
            }
            }
                    });
                }

// Event lsiteners to call the API functions upon the search button click
fetchButton.addEventListener('click', getCityCurrent);
fetchButton.addEventListener('click', getCityForecast);
