// 로그인창 기능

$('.nickForm').submit(function(e){
    e.preventDefault();
    let nickVal = $('.nickInput').val();

    $('.nickInput').val('');

    $('.nickDiv').addClass('hidden')

    $('.welcDiv').removeClass('hidden')
    console.log(nickVal.length);
    
    if (nickVal.length >= 3){
        $('.welcDiv').html(`환영합니다 <br> ${nickVal}님`)
    } else {
        $('.welcDiv').text(`환영합니다 ${nickVal}님`)

    } 
})

// 네비게이션 마우스 호버시 나타나는 효과

$('.naviBoss').mouseover(function(){
    $('.naviHid').removeClass('hidden')
})

$('.naviBoss').mouseout(function(){  
   
    $('.naviHid').addClass('hidden')

})

// 네비바 좁은화면 버튼 클릭시
$('.navMQBtn').click(function () {

        
        $('.navMQmaster').toggleClass('hidden')


    
})

$('.navMQtag').click(function() {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
    $(this).next('.navMQSub').removeClass('hidden')
})  

$('.navMQLogo').click(function() {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
})  

//환율창에 대한 js
const money = document.querySelector(".money");

money.addEventListener('click', function(){
    function openCenter(doc, win, w, h){
        var left = (screen.availWidth - w) / 2;
        var top = (screen.availHeight - h) / 2;

        var opt = "left=" + left + ",top=" + top + ",width=" + w + ",height=" + h;
        window.open(doc, win, opt); 
    }
    openCenter("/Popup", "pop", 450, 350);
})