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
    $(this).addClass('fstvCliSt')
    
    $(this).removeClass('hidden');
    let test = $(this);
    setTimeout(function () {
        // console.log($(this))
        // $(this).removeClass('fstvAni');
        // $(this).addClass('fstvCli')
        // $(this).next('.fstvDesc').removeClass('hidden');
   
        test.removeClass('fstvAni');
        test.addClass('fstvCli')
        test.next('.fstvDesc').removeClass('hidden');
    }, 2000);

    $('.fstvDiv').addClass('hidden');
    $(this).removeClass('hidden');
    
    // $(this).removeClass('fstvAni');
    // $(this).addClass('fstvCli')
    // $(this).next('.fstvDesc').removeClass('hidden');
})


