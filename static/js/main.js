function changeThema (){
    $('.themaFoods').addClass('hidden')
    $('.themaGrims').removeClass('hidden')
    $('.themBtn').addClass('cliBtn')
    $('.foodBtn').removeClass('cliBtn')

    $('.foodBtn').addClass('unCliBtn')
    $('.themBtn').removeClass('unCliBtn')
}

function changeFood (){
    $('.themaGrims').addClass('hidden')
    $('.themaFoods').removeClass('hidden')
    $('.foodBtn').addClass('cliBtn')
    $('.themBtn').removeClass('cliBtn')

    $('.themBtn').addClass('unCliBtn')
    $('.foodBtn').removeClass('unCliBtn')
    
}


