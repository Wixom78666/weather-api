var apiKey = "892b4b6f3d3c699b11445dbe53813867";
var citySearch = document.getElementById("user-city-choice");
var searchButton = document.getElementById("searchbtn");
function getApi(event) {
    event.preventDefault();
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + citySearch.value + "&appid=" + apiKey;

    fetch(requestUrl) 
        .then(function (response) {
            return response.json();

            })
            .then(function(data) {
                console.log(data)
                var currentTemp = data.main.temp;
                var currentWind = data.wind.speed;
                var currentHumidity = data.main.humidity;
                var cityName = data.name
                console.log(currentTemp)
                var tempHtml = document.getElementById("temp");
                var windHtml = document.getElementById("wind");
                var humidityHtml = document.getElementById("humidity");
                var cityTitile = document.getElementById("cityHead");
                tempHtml.innerHTML = "Current Temperature: " + Math.floor((currentTemp - 273.15) * (9/5) + 32) + " ºF";
                windHtml.textContent = "Wind Speed: " + currentWind + " MPH";
                humidityHtml.textContent = "Humidity: " + currentHumidity + " %";
                cityTitile.innerHTML = cityName

            });
        }



searchButton.addEventListener("click", getApi);

