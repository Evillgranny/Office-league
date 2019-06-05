let btnSearch = document.querySelector('.search-shop');
let inputSearch = document.querySelector('.search-input');
let btnSearchMobile = document.querySelector('.mobile-search-shop');
let inputSearchMobile = document.querySelector('.mobile-search-input');
let basketMobile = document.querySelector('.shop-basket-mobile');
let downNavMobile = document.querySelector('.down-nav-mobile');
let hamburgerCheckbox = document.getElementById('hambr');
let navigationBlock = document.querySelector('.mobile-navigation-buttons');
let cross = document.querySelector('.cross');
let defaultMenu = document.querySelector('.default-menu');
let catalogMenu = document.querySelector('.catalog-menu');
let bossFurniture = document.querySelector('.boss-furniture')
let warehouses = document.querySelector('.warehouses');
let warehousesMobile = document.querySelector('.warehouses-mobile');
let addresses = document.querySelector('.addresses');
let addressesMobile = document.querySelector('.addressesMobile');
let phones = document.querySelector('.phones');
let phonesMobile = document.querySelector('.phones-mobile');
let modalInputsBlock = document.querySelector('.modal-city-inputs');
let choiseCity = document.querySelector('.choiseCity');
let cityList = document.querySelector('.city-list');
let cartCounter = 1;
let cardBonusBtn = document.querySelectorAll('.card-bonus');
let filterBtn = document.querySelector('.show-filter-btn');
let filterCloseBtn = document.querySelector('.filter-close-btn');


function showCatalog() {
    $(defaultMenu).hide();
    $(catalogMenu).show();
};

function showBossFurniture() {
    $(catalogMenu).hide();
    $(bossFurniture).show();
}
//выбор склада
$('#warehouseChoice').click(function () {
    if ($(warehouses).is(":visible")) {
        $('#warehouseChoice').removeClass('nav-check');
        $(warehouses).hide();
    } else {
        $('#warehouseChoice').addClass('nav-check');
        $(warehouses).show();
    }
});

$(warehouses).click(function (e) {
    warehouseChoice.textContent = e.target.textContent;
    $(warehouses).hide();
});

// Выбор склада мобайл
$('#warehouseChoiceMobile').click(function () {
    if ($(warehousesMobile).is(":visible")) {
        $(warehousesMobile).hide();
    } else {
        $(warehousesMobile).show();
    }
});

$(warehousesMobile).click(function (e) {
    warehouseChoiceMobile.textContent = e.target.textContent;
    $(warehousesMobile).hide();
});
//Смена адреса
$('#changeAddress').click(function () {
    if ($(addresses).is(":visible")) {
        $(addresses).hide();
    } else {
        $(addresses).show();
    }
});

$(addresses).click(function (e) {
    changeAddress.textContent = e.target.textContent;
    $(addresses).hide();
});

//Смена адреса мобайл
$('#changeAddressMobile').click(function () {
    if ($(addressesMobile).is(":visible")) {
        $(addressesMobile).hide();
    } else {
        $(addressesMobile).show();
    }
});

$(addressesMobile).click(function (e) {
    changeAddressMobile.textContent = e.target.textContent;
    $(addressesMobile).hide();
});

//смена телефона
$('#changePhones').click(function () {
    if ($(phones).is(":visible")) {
        $(phones).hide();
    } else {
        $(phones).show();
    }
});

$(phones).click(function (e) {
    changePhones.textContent = e.target.textContent;
    $(phones).hide();
});

//смена телефона мобайл
$('#changeMobilePhone').click(function () {
    if ($(phonesMobile).is(":visible")) {
        $(phonesMobile).hide();
    } else {
        $(phonesMobile).show();
    }
});

$(phonesMobile).click(function (e) {
    changeMobilePhone.textContent = e.target.textContent;
    $(phonesMobile).hide();
});

//поиск
$(btnSearch).click(function () {
    $(inputSearch).toggleClass('d-block');
});

// поиск
$(btnSearchMobile).click(function () {
    $(inputSearchMobile).toggleClass('d-block');
    if ($(window).width() <= '450'){
        $(downNavMobile).toggleClass('justify-content-end');
        $(basketMobile).toggleClass('d-none');
    }
});

hamburgerCheckbox.addEventListener('click', function () {
    $(hamburgerCheckbox).change(function(){
        if ($(this).prop('checked')) {
            $(navigationBlock).show();
        } else {
            $(navigationBlock).hide();
        }
    });
});

function closeMenu() {
    $(hamburgerCheckbox).prop('checked', false);

    $(catalogMenu).hide();
    $(bossFurniture).hide();

    $(defaultMenu).show();
    $(defaultMenu).hide();
}

// меню в закреп
jQuery(window).scroll(function() {
        var theTop = $(window).scrollTop();
        if(theTop > 160){
            $(downNavMobile).addClass('fixed');
        }
        else{
            $(downNavMobile).removeClass('fixed');
        }
});

jQuery(window).scroll(function() {
    var theTop = $(window).scrollTop();
    if(theTop > 120){
        $('#downNav').addClass('fixed');
    }
    else{
        $('#downNav').removeClass('fixed');
    }
});

$(function(){
    $('#phoneInput').inputmask("+375 (99) 999 -99 -99");
});

$(function(){
    $('#phoneInput2').inputmask("+375 (99) 999 -99 -99");
});

$(function(){
    $('#modalPhoneInput').inputmask("+375 (99) 999 -99 -99");
});
$(function(){
    $('#contactsInput').inputmask("+375 (99) 999 -99 -99");
});
$(function(){
    $('#priceResultPhone').inputmask("+375 (99) 999 -99 -99");
});

function modalClose(elem){
    elem.hide();
}
function modalShow(elem){
    elem.show();
}

$(modalInputsBlock).change(function () {
   if ($("#currentCity").prop("checked")) {
       $('#currentCityModal').hide();
   }
   if ($("#notCurrentCity").prop("checked")) {
        $(choiseCity).show();
   } else {
       $(choiseCity).hide();
   }
});




$('#getCallBack').click(function () {
    $('#callBack').show();
});

$(cityList).click(function () {
    $('#currentCityModal').hide();
});

$('#sendCb').click(function () {
        $('#goodCallBack').show(1000, function(){
            setTimeout(function(){
                $('#goodCallBack').hide(500);
            }, 3000);
        });
    }
);
//Счётчик в корзине
$('.inc').on('click', function() {
    const $input = $(this).closest('div').find('input');
    $input.val(parseInt($input.val(), 10) + 1);
});
$('.dec').on('click', function() {
    const $input = $(this).closest('div').find('input');
    parseInt($input.val(), 10) > 1 && $input.val(parseInt($input.val(), 10) - 1);
});

// choise login-reg
    $('.enter-reg-block').change(function () {
       if ($('#loginCheck').prop('checked')) {
           $('#enterBlock').show();
           $('#registrationBlock').hide();
       } else if ($('#regCheck').prop('checked')) {
           $('#enterBlock').hide();
           $('#registrationBlock').show();
       }
    });



window.onload = function () {
    $('.modal__button-close').click(function () {
        modalClose($('.modal-call'))
    });

    if (document.querySelector('.slider-four')) {
        let fourSlider = document.querySelector('.slider-four');
        let bigSlider = document.querySelector('.open-project-content__slider-block_big-slide');
        let fourSliderItem = fourSlider.querySelectorAll('.slider-four__item_image');
        console.log()
        bigSlider.src = fourSliderItem[0].src;
        fourSlider.onclick = function (e) {
            if (e.target.className === "slider-four__item_image") {
                bigSlider.src =  e.target.src
            }
        };
    }

    if (document.querySelector('.slider-five')) {
        let fiveSlider = document.querySelector('.slider-five');
        let fiveSliderItem = fiveSlider.querySelectorAll('.slider-five__item');
        fiveSlider.onclick = function (e) {
            if (e.target.className === "slider-five__item") {
                let currentTaget = e.target;
                for (var i = 0; i < fiveSliderItem.length;i++) {
                    fiveSliderItem[i].classList.remove('selected-color');
                }
                currentTaget.classList.add('selected-color')
            }
        }
    }

    if (document.querySelector('.js-range-slider')) {
        let myFromSpan = document.querySelector('.range-numbers__from_span');
        let myToSpan = document.querySelector('.range-numbers__to_span');
        let ionFrom = document.querySelector('.irs-from');
        let ionTo = document.querySelector('.irs-to');

        myFromSpan.textContent = 'От: ' + ionFrom.textContent;
        myToSpan.textContent = 'До: ' + ionTo.textContent;

        $(ionFrom).bind("DOMSubtreeModified",function(){
            myFromSpan.textContent = 'От: ' + this.textContent;
        });

        $(ionTo).bind("DOMSubtreeModified",function(){
            myToSpan.textContent = 'До: ' + this.textContent;
        });

    }
};
// owl carousel

$('.slider-one').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items: 1
        }
    }
});

$('.slider-two').owlCarousel({
    loop:true,
    nav: true,
    autoplay:  true,
    responsive:{
        0:{
            items:1,
        },
        480: {
            items:2
        }
    }
});

$('.thrid-slider').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    autoplay:  true,
    responsive:{
        0:{
            items:  1
        }
    }
});

$('.slider-four').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    autoplay:  false,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        0:{
            items:  2
        },
        500: {
            items: 3
        },
        720: {
            items: 4
        }
    }
});

$('.slider-five').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    autoplay:  false,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        0:{
            items:  4
        },
        600: {
            items: 5
        },
        720: {
            items: 7
        }
    }
});

// Галерея проекты

$('#project-1').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});
$('#project-2').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});
$('#project-3').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});
$('#project-4').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});
$('#project-5').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});
$('#project-6').on('click', function() {
    $(this).lightGallery({
        thumbnail:true,
        animateThumb: true,
        dynamic: true,
        downloadUrl: false,
        dynamicEl: [{
            "src": 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2250394/pexels-photo-2250394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2248526/pexels-photo-2248526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }, {
            'src': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'thumb': 'https://images.pexels.com/photos/2324272/pexels-photo-2324272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }],
    })

});

$('#series').change(function () {
    if($('#series').prop("checked")) {
        $('.series-content').removeClass('d-none')
    } else {
        $('.series-content').addClass('d-none');
    }
});

$('#price').change(function () {
    if($('#price').prop("checked")) {
        $('.price-content').removeClass('d-none')
    } else {
        $('.price-content').addClass('d-none');
    }
});
$('#made').change(function () {
    if($('#made').prop("checked")) {
        $('.made-content').removeClass('d-none')
    } else {
        $('.made-content').addClass('d-none');
    }
});
$('.catalog-choose').change(function () {
    if ($('#showBlock').prop("checked")) {
        $('.catalog-block-content').removeClass('d-none');
        $('.catalog-list').addClass('d-none');
    } else {
        $('.catalog-block-content').addClass('d-none');
        $('.catalog-list').removeClass('d-none');
    }
});

filterBtn.onclick = function () {
    showFilter()
};
function showFilter () {
    let filterBlock = document.querySelector('.catalog-block__filter');
     filterBlock.classList.add('r-0')
}

filterCloseBtn.onclick = function () {
    let filterBlock = document.querySelector('.catalog-block__filter');
    filterBlock.classList.remove('r-0');
};