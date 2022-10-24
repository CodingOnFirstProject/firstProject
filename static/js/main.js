// 검색기능 만들기

$('#search-form').submit(function(e){
    e.preventDefault();
    let searBar = $('.searchInput').val();

    if (searBar == '이탈리아'){
        window.open('/sights2');
        $('.searchInput').val('');
    } else if (searBar == '대표 음식'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '피렌체 대성당'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '밀라노 대성당'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '성베드로 성당'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '콜로세움'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '판테온'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '포로로마노'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '카프리섬'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '친퀘테레'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '베네치아'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '날씨'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '환율'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '리뷰'){
        window.open('./sights');
        $('.searchInput').val('');
    } else {
        alert('올바른 키워드를 입력해라')
    }  
})



$('#search-form input').mouseover(function() {
    $('.keywordBox').removeClass('hidden')
})


$('#search-form input').mouseout(function() {
    $('.keywordBox').addClass('hidden')
})





$('.search-btn').mouseover(function() {
    $('.fa-search').addClass('search-icon')
})

$('.search-btn').mouseout(function() {
    $('.fa-search').removeClass('search-icon')
})



// 서브 사진테마 효과

$('.spotBtn').click(function(){
    $('.ranBtn').removeClass('cliBtn')
    $('.ranBtn').addClass('unCliBtn')
    $('.spotBtn').removeClass('unCliBtn')
    $('.spotBtn').addClass('cliBtn')
    
    
    $('.grimsTab').addClass('hidden')
    $('.spotGrims').removeClass('hidden')
})

$('.celebBtn').click(function(){
    $('.ranBtn').removeClass('cliBtn')
    $('.ranBtn').addClass('unCliBtn')
    $('.celebBtn').removeClass('unCliBtn')
    $('.celebBtn').addClass('cliBtn')
    
    
    $('.grimsTab').addClass('hidden')
    $('.celebGrims').removeClass('hidden')
})

$('.artBtn').click(function(){
    $('.ranBtn').removeClass('cliBtn')
    $('.ranBtn').addClass('unCliBtn')
    $('.artBtn').removeClass('unCliBtn')
    $('.artBtn').addClass('cliBtn')
    
    
    $('.grimsTab').addClass('hidden')
    $('.artGrims').removeClass('hidden')
})


// 심볼 클릭시

$('.ticketSimbol').click(function(){
    window.open(
        "/ticket",
        "ticket",
        "width=450px, height=400px, top=50, left=50"
    );
})


$('.reviewSimbol').click(function(){
    window.open(
        "./review"
    );
})


// $('.moneySimbol').click(function(){
//     window.open(
//         "/",
//         "money",
//         "width=450px, height=400px, top=50, left=50"
//     );
// })

// $('.weatherSimbol').click(function(){
//     window.open(
//         "/pageWeather",
//         "weather",
//         "width=450px, height=400px, top=50, left=50"
//     );
// })






// 페스티벌 사진 호버시 아이콘 효과

$('.fstvAni').mouseover(function () {
    let festIcon = $(this).find('.icons');
    festIcon.addClass('transIcon');
})

$('.fstvAni').mouseout(function () {
    let festIcon = $(this).find('.icons');
    festIcon.removeClass('transIcon');
})

// 페스티벌 사진 클릭시 효과


$('.fstvEvt').click(fstvEvtFunc)


function fstvEvtFunc() {
    let thisFstv = $(this);
    


    // $('.fstvDiv').addClass('hidden');
    thisFstv.removeClass('hidden');
    $('.fstvDiv').addClass('opaciZero');
    thisFstv.removeClass('opaciZero');
    
    thisFstv.removeClass('hidden');
    let thisBtn = thisFstv.next('.fstvBtn');
    $('.fstvBack-1').addClass('fstvBackHover');

    $('.fstvEvt').off('click', fstvEvtFunc);

    setTimeout(function () {

        thisFstv.removeClass('fstvAni');
        $('.fstvDiv').addClass('fstvCli')
        $('.fstvBtn').removeClass('hidden');
        thisBtn.addClass('fstvBtnClr')
        $('.fstvImg').addClass('width')
        thisBtn.next('.fstvDesc').removeClass('hidden');
        $('.fstvDiv').addClass('hidden');
        $('.fstvDiv').removeClass('fstvAni');
        thisFstv.removeClass('hidden');
        $('.fstvBack-1').addClass('hidden');
        $('.fstvBack-2').removeClass('hidden');
        $('.fstvEvt').click(fstvEvtFunc);

    }, 2000);

}


// 페스티벌 상단 동그란 버튼 클릭시 변경

$('.fstvBtn').click(function () {
    
    // $('.fstvDiv').addClass('hidden');
    $('.fstvDiv').removeClass('hidden');
    $('.fstvDiv').removeClass('opaciZero');

    $('.fstvDiv').addClass('hidden');
    $(this).prev('.fstvDiv').removeClass('hidden');


    // $(this).prev('.fstvDiv').addClass('fstvCli');

    $('.fstvDesc').removeClass('hidden');
    $('.fstvDesc').addClass('hidden');
    $(this).next('.fstvDesc').removeClass('hidden');

    $('.fstvBtn').removeClass('fstvBtnClr');

    $(this).addClass('fstvBtnClr');

})



// 상단 돌아가기 버튼

$('.fstvBack-2').click(function () {
    
    $('.fstvDiv').removeClass('hidden');
    $('.fstvDiv').removeClass('opaciZero');
    $('.fstvDiv').addClass('fstvAni');
    $('.fstvImg').removeClass('width')

    // $(this).prev('.fstvDiv').addClass('fstvCli');

    $('.fstvDesc').removeClass('hidden');
    $('.fstvDesc').addClass('hidden');

    $('.fstvBtn').removeClass('fstvBtnClr');
    $('.fstvBtn').addClass('hidden');
    
    $('.fstvBack-1').removeClass('hidden');
    $('.fstvBack-2').addClass('hidden');

    $('.fstvBack').removeClass('fstvBackHover')


});

