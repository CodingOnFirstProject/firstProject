console.log($('.nickForm'))
$('.nickForm').submit(function(e){
    e.preventDefault();
    let nickVal = $('.nickInput').val();

    $('.nickInput').val('');

    $('.nickDiv').addClass('hidden')

    $('.welcDiv').removeClass('hidden')

    $('.welcDiv').text(`환영합니다 ${nickVal}님`)
    console.log(nickVal);
})