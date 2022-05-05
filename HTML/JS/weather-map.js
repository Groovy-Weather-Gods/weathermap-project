var date = document.querySelector('.date');
// var name = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');
// var humidity = document.querySelector('.humidity');
// var wind = document.querySelector('.wind');
// var pressure = document.querySelector('.pressure');


// const OPEN_WEATHER_APPID = '3567515707a7e75d45fb9334c9856c89'

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

$.get("http://api.openweathermap.org/data/2.5/forecast?q=london&appid="+ OPEN_WEATHER_APPID, {
    // APPID: OPEN_WEATHER_APPID,
    // q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
    var dateValue = data['dt'];
    // var nameValue = data['name'];
    // var tempValue = data['main']['temp'].toFixed(0);
    // var descValue = data['weather'][0]['description'];
    // var humidityValue = data['main']['humidity'];
    // var windValue = data['wind']['speed'].toFixed(1);
    // var pressureValue = data['main']['pressure'];

    for (var i = 0; i < 6; i++) {
        console.log(document.getElementById('day' + (i+1)).innerHTML =  String(data.list[i].dt));
        // console.log(typeof [i])
    }

    // Object.values(data).forEach(function (value) {
        // console.log(document.getElementById('day1').innerHTML =  data.list[i].dt);

    //     console.log("this value",value)
    // })

    date.innerHTML = dateValue;
    // name.innerHTML = nameValue;
    // desc.innerHTML = descValue;
    // temp.innerHTML = (tempValue + "°F");
    // humidity.innerHTML = (humidityValue + "%");
    // wind.innerHTML = (windValue +"mph")
    // pressure.innerHTML = (pressureValue +"Pa");

    // function convertUTC() {
    //     return new Date(data.list[i].dt).toLocaleDateString();
    // }

});




// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');
//
//
//
//
//
//
//
//
//
//
// button.addEventListener('click', function() {
//     fetch("api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=3567515707a7e75d45fb9334c9856c89")
//         .then(response => response.json())
//         .then(data => console.log(data))
//
//         .catch(err => alert("Wrong city name"))
//
//
//
// });









//

//
// });

// var mapData = '';
// $.each(data, function (key, value) {
//     mapData += '<tr>';
//     mapData += '<td>' + value.title + '</td>';
//     mapData += '<td>' + value.quantity + '</td>';
//     mapData += '<td>' + value.price + '</td>';
//     mapData += '<td>' + value.categories + '</td>';
//     mapData += '</tr>';
// });
// $('#forecast').append(mapData);









