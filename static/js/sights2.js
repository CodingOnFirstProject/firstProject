// var slides = document.querySelectorAll("#exhibitImg > img");
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");


// var before = 0;
// var current = 1;
// var after = 2;

// var temp = 0;


// //showSlides(current); //현재 이미지 표시/
// prev.onclick = function () {
//     prevSlide('hi')
// }; //이전 이미지 표시
// next.onclick = nextSlide(current, before, after); //다음 이미지 표시


// function prevSlide(test){ //이전버튼을 누르면
//     console.log(test);
//     slides[0].setAttribute('src', '/static/image/nature2.jpg');
//     slides[1].setAttribute('src', '/static/image/nature3.jpg');
//     slides[2].setAttribute('src', '/static/image/nature4.jpg');
// }

// function nextSlide(current){ //다음버튼을 누르면

// }

console.log("!");

const slides = document.querySelector("#exhibitImg > img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const current = 1; // 배열 인덱스 번호로 1번 사진위치를 저장하는 변수

showSlides(current); // 현재 이미지 위치 표시
prev.onclick = prevSlide; // 이전 이미지 표시
next.onclick = nextSlide; // 다음 이미지 표시

function showSlides(n){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "block"; // 모든 이미지를 화면에 표시
    }
}

function prevSlide(){
    if(current > 1) current -= 1; // 값이 1보다 크면 이전 위치로
    else currnet = slides.length - 1; // 그렇지 않으면 첫번째 이미지이므로 마지막 위치로 이동
    showSlides(current); // 이동한 위치의 이미지 표시
}

function nextSlide(){
    if(current < slides.length - 1) current += 1; // current값이 slides.legnth-1보다 작으면 다음 위치로
    else current = 0;
    showSlides(current); // 이동한 위치의 이미지 표시
}
