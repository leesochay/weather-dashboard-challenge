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
    
fetchButton.addEventListener('click', getCityCurrent);

