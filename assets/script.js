// get city name from text area
var fetchButton = document.getElementById('fetch-button');

function getCityCurrent(){
    var city = document.getElementById('cityName').value;
    var state = document.getElementById('stateCode').value;
    console.log(city);
   
    var requestCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + ",US&appid=dfff74363215fd3bf8e8259c31526b0b&units=imperial";
    
    
    fetch(requestCurrent)
    .then(function (response) {
          return response.json();
          })
    .then(function (data) {
         console.log(data)

        var currentCityEl = document.createElement('p');
        currentCityEl.innerHTML = data.name;
        document.body.appendChild(currentCityEl);

        var cityIcon = document.createElement('img');
        cityIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        document.body.appendChild(cityIcon);

        var currentTempEl = document.createElement('p');
        currentTempEl.innerHTML = "Temp: " + data.main.temp + "°F";
        document.body.appendChild(currentTempEl);

        var currentWindEl = document.createElement('p');
        currentWindEl.innerHTML = "Wind: " + data.wind.speed + " MPH";
        document.body.appendChild(currentWindEl);

        var currentHumidityEl = document.createElement('p');
        currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
        document.body.appendChild(currentHumidityEl);

            });
        }

        
        function getCityForecast(){
            var cityFor = document.getElementById('cityName').value;
            var stateFor = document.getElementById('stateCode').value;
            console.log(cityFor);
           
            var requestCurrent = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityFor + "," + stateFor + ",US&appid=dfff74363215fd3bf8e8259c31526b0b&units=imperial";
            
            fetch(requestCurrent)
            .then(function (response) {
                  return response.json();
                  })
            .then(function (data) {
                 console.log(data)
        
                var forecastCityEl = document.createElement('p');
                forecastCityEl.innerHTML = data.city.name;
                document.body.appendChild(forecastCityEl);


    
        
// For loop for 5 return values

for (let index = 0; index < data.list.length; index++) {

    let dateTest = data.list[index].dt_txt.includes("18:00:00", 0);
    console.log(dateTest);

    console.log(data.list.length);
if (dateTest) {
                var forecastDate = document.createElement('p');
                forecastDate.innerHTML = data.list[index].dt_txt;
                document.body.appendChild(forecastDate);

                var forecastIcon = document.createElement('img');
                forecastIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[index].weather[0].icon + ".png");
                document.body.appendChild(forecastIcon);
        
                var forecastTempEl = document.createElement('p');
                forecastTempEl.innerHTML = "Temp: " + data.list[index].main.temp + "°F";
                document.body.appendChild(forecastTempEl);
        
                var forecastWindEl = document.createElement('p');
                forecastWindEl.innerHTML = "Wind: " + data.list[index].wind.speed + " MPH";
                document.body.appendChild(forecastWindEl);
        
                var forecastHumidityEl = document.createElement('p');
                forecastHumidityEl.innerHTML = "Humidity: " + data.list[index].main.humidity + "%";
                document.body.appendChild(forecastHumidityEl);
            }

            }

                    });
                }






fetchButton.addEventListener('click', getCityCurrent);
fetchButton.addEventListener('click', getCityForecast);
