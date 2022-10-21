const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '7f59daeedf7035efe7544f4ec617e143';
// const API_KEY = '3aa3f27483a6d0c00cdcf947123163df';


let nowTemp = document.querySelector('#nowTemp');
let nowHumidity = document.querySelector('#nowHumidity')
let weather = document.querySelector('#weather');
let wind = document.querySelector('#wind');
let country = document.querySelector('#country');
let city = document.querySelector('#city');
let weatherimg = document.querySelector('img');
city = 'seoul';

let url = API_URL + city + '&appid=' + API_KEY;
$.ajax({
  url: url,
  dataType: 'json',
  type: 'GET',
  async: 'false',
  success: function (response) {
    console.log(response);
    console.log('현재온도 : ' + (response.main.temp - 273.15));
    console.log('현재습도 : ' + response.main.humidity);
    console.log('날씨 : ' + response.weather[0].main);
    console.log('상세날씨설명 : ' + response.weather[0].description);
    console.log('날씨 이미지 : ' + response.weather[0].icon);
    console.log('바람   : ' + response.wind.speed);
    console.log('나라   : ' + response.sys.country);
    console.log('도시이름  : ' + response.name);
    console.log('구름  : ' + response.clouds.all + '%');

    nowTemp.innerText = `${Math.floor(response.main.temp - 273.15)}°C`;
    nowHumidity.innerText = response.main.humidity;
    weather.innerText = response.weather[0].main;
    wind.innerText = response.wind.speed;
    country.innerText = 'korea';
    city.innerText = response.name;
    var iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    weatherimg.setAttribute('src', iconurl);
  },
});

let nowDay = document.querySelector('#nowDay');

var time = new Date();

var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var day = time.getDay();//0~6 (일~토)

switch(time.getDay()){
    case 0:
        day.innerText = "일";
        break;
    case 1:
        day.innerText = "월";
        break;
    case 2:
        day.innerText = "화";
        break;
    case 3:
        day.innerText = "수";
        break;
    case 4:
        day.innerText = "목";
        break;
    case 5:
        day.innerText = "금";
        break;
    case 6:
        day.innerText = "토";
        break;
}

nowDay.innerText = `${year}년 ${month}월 ${date}일`;
