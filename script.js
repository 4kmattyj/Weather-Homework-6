var APIKey = "d118af48e2c840083cd954156f94d357"
//document.getElementById("citySearch").value;
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
var searchButton = document.getElementById("searchButton")
var displayDat = document.getElementById("displayData")
var latitude;
var

function getApi() {
    var city = document.getElementById("citySearch").value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
    console.log(city.value)
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.main.temp)
            console.log(data)
            var time = data.dt
            var dateConverter = moment.unix(time).format("MM/DD/YYYY")
            var icon = data.weather[0].icon
            var url = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("weather").innerHTML = data.name + " " + dataConverter + " " + "<img src = " + url + " >"
            document.getElementById("temperature").innerHTML = "Temperature: " + data.main.temp
            document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed
            document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity
        })
    }
searchButton.addEventListener("click", getApi)