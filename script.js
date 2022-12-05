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
            
            });
        }



searchButton.addEventListener("click", getApi);

