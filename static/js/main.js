// 검색기능 만들기

$('#search-form').submit(function(e){
    e.preventDefault();
    let searBar = $('.searchInput').val();

    if (searBar == '관광지A'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '관광지B'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '관광지B'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '관광지C'){
        window.open('./sights');
        $('.searchInput').val('');
    } else if (searBar == '관광지D'){
        window.open('./sights');
        $('.searchInput').val('');
    } else {
        $('.searchInput').val('');
    }  
})



$('#search-form').mouseover(function() {
    $('.keywordBox').removeClass('hidden')
})


$('#search-form').mouseout(function() {
    $('.keywordBox').addClass('hidden')
})











// 서브 사진테마 효과

function changeThema() {
    $('.themaFoods').addClass('hidden')
    $('.themaGrims').removeClass('hidden')
    $('.themBtn').addClass('cliBtn')
    $('.foodBtn').removeClass('cliBtn')

    $('.foodBtn').addClass('unCliBtn')
    $('.themBtn').removeClass('unCliBtn')

}

function changeFood() {
    $('.themaGrims').addClass('hidden')
    $('.themaFoods').removeClass('hidden')
    $('.foodBtn').addClass('cliBtn')
    $('.themBtn').removeClass('cliBtn')

    $('.themBtn').addClass('unCliBtn')
    $('.foodBtn').removeClass('unCliBtn')
}

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
    
    let thisBtn = thisFstv.next('.fstvBtn')
    $('.fstvBack-1').addClass('fstvBackHover');

    $('.fstvEvt').off('click', fstvEvtFunc);

    setTimeout(function () {
        thisFstv.removeClass('fstvAni');
        $('.fstvDiv').addClass('fstvCli')
        $('.fstvBtn').removeClass('hidden');
        thisBtn.addClass('fstvBtnClr')

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


    // $(this).prev('.fstvDiv').addClass('fstvCli');

    $('.fstvDesc').removeClass('hidden');
    $('.fstvDesc').addClass('hidden');

    $('.fstvBtn').removeClass('fstvBtnClr');
    $('.fstvBtn').addClass('hidden');
    
    $('.fstvBack-1').removeClass('hidden');
    $('.fstvBack-2').addClass('hidden');

    $('.fstvBack').removeClass('fstvBackHover')


});

