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

// 페스티벌 사진 호버시 효과

$('.fstvAni').mouseover(function () {
    let festIcon = $(this).find('.icons');
    festIcon.addClass('transIcon');
})

$('.fstvAni').mouseout(function () {
    let festIcon = $(this).find('.icons');
    festIcon.removeClass('transIcon');
})

// 페스티벌 사진 클릭시 효과


$('.fstvDiv').click(function () {
    
    // $('.fstvDiv').addClass('hidden');
    $(this).removeClass('hidden');
    $('.fstvDiv').addClass('opaciZero');
    $(this).removeClass('opaciZero');
    
    $(this).removeClass('hidden');
    let thisFstv = $(this);
    let thisBtn = thisFstv.next('.fstvBtn')
    setTimeout(function () {
        thisFstv.removeClass('fstvAni');
        $('.fstvDiv').addClass('fstvCli')
        $('.fstvBtn').removeClass('hidden');
        thisBtn.addClass('fstvBtnClr')

        thisBtn.next('.fstvDesc').removeClass('hidden');
        $('.fstvDiv').addClass('hidden');
        $('.fstvDiv').removeClass('fstvAni');
        thisFstv.removeClass('hidden');
    }, 2000);

})





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





$('.fstvBack').click(function () {
    
    $('.fstvDiv').removeClass('hidden');
    $('.fstvDiv').removeClass('opaciZero');
    $('.fstvDiv').addClass('fstvAni');


    // $(this).prev('.fstvDiv').addClass('fstvCli');

    $('.fstvDesc').removeClass('hidden');
    $('.fstvDesc').addClass('hidden');

    $('.fstvBtn').removeClass('fstvBtnClr');
    $('.fstvBtn').addClass('hidden');



})


