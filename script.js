var apiKey = "892b4b6f3d3c699b11445dbe53813867";
var citySearch = document.getElementById("user-city-choice");
var searchButton = document.getElementById("searchbtn");
function getApi(event) {
    event.preventDefault();
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + citySearch.value + "&appid=" + apiKey;
    // Fetches information based on input from user.
    fetch(requestUrl) 
        .then(function (response) {
            return response.json();

            })
            .then(function(data) {
                console.log(data)
                // Creates content in the HTML based on data from the object created by JSON.
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
            // Began trying to grab the forescast but didn't have enough time before deadline.
            let cityId = data.id;
            let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + apiKey;
            fetch(forecastUrl) 
            .then(function (response) {
                return response.json();
    
                })
                .then(function(data) {
                    console.log(data)
                });
        }


searchButton.addEventListener("click", getApi);

