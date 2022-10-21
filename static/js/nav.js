// 로그인창 기능

$('.nickForm').submit(function(e){
    e.preventDefault();
    let nickVal = $('.nickInput').val();

    $('.nickInput').val('');

    $('.nickDiv').addClass('hidden')
    
    $('.ticket').removeClass('hidden')
    $('.welcDiv').removeClass('hidden')

    $('.welcDiv').html(`환영합니다 <br> ${nickVal}님`)
   
})

$('.logout').click(function(){
    $('.welcDiv').addClass('hidden')
    $('.welcDiv').html('')
    $('.nickDiv').removeClass('hidden')
    
    $('.ticket').addClass('hidden')


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

        $('.navMQmaster').toggleClass('hidden');

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

$('.navMQBack').click(function() {
    $('.navMQSub').removeClass('hidden')
    $('.navMQSub').addClass('hidden')
    $('.navMQmaster').toggleClass('hidden')
})