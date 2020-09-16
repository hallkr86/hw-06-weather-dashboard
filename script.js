//console.log("Hello world");
//$(document).ready(function(){
//Create variables for search button, city name input, api key, and URL
var searchBtn = $(".searchBtn");
//var cityName = $(".cityDetails");
var APIKey = "a36a64d0f73c80cb5bce78af6ad6cb44";
var singleTruth = [];

$(".searchBtn").on("click", function (event) {
    event.preventDefault();
    var cityName = $("#searched-city").val();
    var rightNow = moment().format("dddd, MMMM-DD-YYYY hh:mm");
    //Run ajax call
   citySearch(cityName)
  });
//function for cityName
function citySearch(cityName) {
  
  console.log(cityName);
  var rightNow = moment().format("dddd, MMMM-DD-YYYY hh:mm");
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +
    cityName +
    "&appid=" +
    APIKey +  "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET",
      })
        //Ajax returns a promise to return the data we requested
        .then(function (response) {
          console.log(queryURL);
          console.log(response);
        
        //Save search in local storage
        var searchHistory = $("<ul>");

        singleTruth.push({
            name: searchBtn.value
        })

        localStorage.setItem("singleTruth", JSON.stringify(singleTruth));
        
        

          $(".city").html("<h1>" + response.name + " Weather Details</h1>" + rightNow);
          $(".temperature").text("Temperature: " + response.main.temp + "F");
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".wind-speed").text("Wind Speed: " + response.wind.speed);
          $(".uvIndex").text("UV Index: " + "");
          
        //console.log("Wind Speed:" + response.wind.speed);

        //Working to generate this
        var uvQueryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;

       
          $.ajax({
            url: uvQueryUrl,
            method: "GET"
          })
          .then(function(data){
            $(".uvIndex")
          })
          
        //   function forecast(cityName) {
        //     var fiveDayForecast = $("#searched-city").val();
        //     var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
        //     var weatherPic= $("<img>").attr("src","https://openweathermap.org/img/wn/" + dayIcon + "@2x.png");
        //     var singleTruth = [];
            
        //     $.ajax({
        //         url: forecastQueryURL,
        //         method: "GET"
        //     }).then(function(data){
        //         $("#ajax-section").empty();
        //     })
         
        //   });
           

        
        });
    
       


 
}


