// 로그인창 기능

$('.nickForm').submit(function(e){
    e.preventDefault();
    let nickVal = $('.nickInput').val();

    $('.nickInput').val('');

    $('.nickDiv').addClass('hidden')

    $('.welcDiv').removeClass('hidden')

    $('.welcDiv').text(`환영합니다 ${nickVal}님`)
    console.log(nickVal);
})

// 네비게이션 마우스 호버시 나타나는 효과

$('.navDiv').mouseover(function(){
    $('.navDiv').removeClass('navHidDiv')
})

$('.navDiv').mouseout(function(){
    $('.navDiv').addClass('navHidDiv')
})

