var blocked = false;

const colorbtn = document.querySelector(".colorbtn");

colorbtn.addEventListener('click', function(){
    var newWin = window.open("Popup.ejs", "pop", "width = 500, height = 400, left = 100, top = 100");

    if(newWin == null){
        alert('팝업이 차단되어 있습니다. 팝업 차단을 해제해주세요.');
    }
})