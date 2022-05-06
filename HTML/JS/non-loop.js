
// window.onload = function() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var lat = position.coords.latitude;
//         var lon = position.coords.longitude;
//         $.get("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"){
//             units: "imperial"
//         }

// test commit












    
$('#submit').click(function(e) {
    e.preventDefault();
    var city = document.getElementById('city').value;
    $('.cityName').text(city);
    
$.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city+ "&appid="+ OPEN_WEATHER_APPID, {
units: "imperial"
}).done(function(data) {    

var dateValueDay1 = data.list[0].dt;
var dateValueDay2 = data.list[5].dt;
var dateValueDay3 = data.list[10].dt;
var dateValueDay4 = data.list[15].dt;
var dateValueDay5 = data.list[20].dt;
$('#day1').html("Date: " + dateValueDay1);
$('#day2').html("Date: " + dateValueDay2);
$('#day3').html("Date: " + dateValueDay3);
$('#day4').html("Date: " + dateValueDay4);
$('#day5').html("Date: " + dateValueDay5);
const iconImg = 'http://openweathermap.org/img/w/[icon].png';
$('#icon1').attr('src', iconImg.replace('[icon]', data.list[0].weather[0].icon));
$('#icon2').attr('src', iconImg.replace('[icon]', data.list[5].weather[0].icon));
$('#icon3').attr('src', iconImg.replace('[icon]', data.list[10].weather[0].icon));
$('#icon4').attr('src', iconImg.replace('[icon]', data.list[15].weather[0].icon));
$('#icon5').attr('src', iconImg.replace('[icon]', data.list[20].weather[0].icon));
var temp1 = data.list[0].main.temp;
var temp2 = data.list[5].main.temp;
var temp3 = data.list[10].main.temp;
var temp4 = data.list[15].main.temp;
var temp5 = data.list[20].main.temp;
$('#temp1').html("Temp: " +temp1);
$('#temp2').html("Temp: " +temp2);
$('#temp3').html("Temp: " +temp3);
$('#temp4').html("Temp: " +temp4);
$('#temp5').html("Temp: " +temp5);
var humidity1 = data.list[0].main.humidity;
var humidity2 = data.list[5].main.humidity;
var humidity3 = data.list[10].main.humidity;
var humidity4 = data.list[15].main.humidity;
var humidity5 = data.list[20].main.humidity;
$('#humidity1').html("Humidity: " +humidity1);
$('#humidity2').html("Humidity: " +humidity2);
$('#humidity3').html("Humidity: " +humidity3);
$('#humidity4').html("Humidity: " +humidity4);
$('#humidity5').html("Humidity: " +humidity5);
var wind1 = data.list[0].wind.speed;
var wind2 = data.list[5].wind.speed;
var wind3 = data.list[10].wind.speed;
var wind4 = data.list[15].wind.speed;
var wind5 = data.list[20].wind.speed;
$('#wind1').html("Wind: " +wind1);
$('#wind2').html("Wind: " +wind2);
$('#wind3').html("Wind: " +wind3);
$('#wind4').html("Wind: " +wind4);
$('#wind5').html("Wind: " +wind5);


});

});


// mapboxgl.MAPBOX_KEY = MAPBOX_KEY;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-86.1934114, 39.741091], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });




