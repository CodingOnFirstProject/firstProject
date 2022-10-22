const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '7f59daeedf7035efe7544f4ec617e143';
// const API_KEY = '3aa3f27483a6d0c00cdcf947123163df';

const city = document.querySelector("#city"); //select 태그

let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

const cityName = document.querySelector("#cityName"); // 도시 이름을 저장한 변수
const resultbtn = document.querySelector('#resultbtn');

resultbtn.addEventListener("click", apply); // "날씨보기" 버튼을 누르면 showResult()함수가 실행

function apply(){
    //cityurax = `'${cityValue}'`; // 버튼을 누르면 그 해당 도시의 날씨정보가 보이게
    //cityurax의 값을 기본값(seoul)에서 사용자가 고른 값(해당 도시)으로 바꿔준다.


    const cityValue = city.value; // city 변수의 value값을 cityValue에 대입.

    cityName.innerHTML = cityValue;
    console.log("cityvalue 확인 : " + cityValue); 
    console.log("다시확인: " + `'${cityValue}'`);
    // console.log("cityName 확인: " + cityName);
}



let nowTemp = document.querySelector('#nowTemp');
let nowHumidity = document.querySelector('#nowHumidity')
let weather = document.querySelector('#weather');
// let wind = document.querySelector('#wind');
let country = document.querySelector('#country');
// let city = document.querySelector('#city');
let weatherimg = document.querySelector('img');
cityurax = 'seoul'; //서울은 기본값
// cityurax = `'${cityValue}'`;

let url = API_URL + cityurax + '&appid=' + API_KEY;
$.ajax({
  url: url,
  dataType: 'json',
  type: 'GET',
  async: 'false',
  success: function (response) {
    console.log(response);
    console.log('원래 현재온도 : ' + (response.main.temp - 273.15));
    console.log('최고온도 : ' + (response.main.temp_max - 273.15));
    console.log('최저 온도: ' + (response.main.temp_min - 273.15));
    console.log('현재습도 : ' + response.main.humidity);
    console.log('날씨 : ' + response.weather[0].main);
    console.log('상세날씨설명 : ' + response.weather[0].description);
    console.log('날씨 이미지 : ' + response.weather[0].icon);
    console.log('바람   : ' + response.wind.speed);
    console.log('나라   : ' + response.sys.country);
    console.log('도시이름  : ' + response.name);
    console.log('구름  : ' + response.clouds.all + '%');

    temp.innerHTML = `${Math.floor(response.main.temp - 273.15)}°C`;
    humidity.innerHTML = response.main.humidity;
    wind.innerHTML = response.wind.speed;

    
  },
});
