$('#burger').click(function () {
    $('#menu').addClass('open');
    $('body').css('overflow', 'hidden');
});

$('#menu *').each(function () {
    $(this).click(function () {
        $('#menu').removeClass('open');
        $('body').css('overflow', 'auto');
    });
});

$(document).ready(function(){
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.slider').slick({
        nextArrow: '<div class="next"><img src="images/right-arrow.png" alt=""></div>',
        prevArrow: '<div class="prev"><img src="images/right-arrow.png" alt=""></div>',
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: true
                },

            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                },

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                },

            }
        ]
    });

    $('.multiple-items').slick({
        nextArrow: '<div class="next"><img src="images/right-arrow.png" alt=""></div>',
        prevArrow: '<div class="prev"><img src="images/right-arrow.png" alt=""></div>',
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ]
    });


    let serviceList = [
        { id: '#haircut', target: '#priceOne' },
        { id: '#shaving', target: '#priceTwo' },
        { id: '#complex', target: '#priceThree' },
        { id: '#additional', target: '#priceFour' }
    ];

    $.each(serviceList, function(index, service) {
        $(service.id).click(function(e) {
            e.preventDefault();

            $('#priceOne, #priceTwo, #priceThree, #priceFour').hide();

            $(service.target).show();
        });
    });

    let popupList = [
        { id: '#disc', target: '#popup', action: 'flex' },
        { id: '#popupClose', target: '#popup', action: 'hide' },
        { id: '#okButton', target: '#popup', action: 'hide' },
        { id: '#orderCall', target: '#call', action: 'flex' },
        { id: '#contactButton', target: '#call', action: 'flex' },
        { id: '#callClose', target: '#call', action: 'hide' },
        { id: '#successClose', target: '#success', action: 'hide' },
        { id: '#enroll', target: '#application', action: 'flex' },
        { id: '#serviceButton', target: '#application', action: 'flex' },
        { id: '#entryTitleOne', target: '#application', action: 'flex' },
        { id: '#entryTitleTwo', target: '#application', action: 'flex' },
        { id: '#entryTitleThree', target: '#application', action: 'flex' },
        { id: '#entryTitleFour', target: '#application', action: 'flex' },
        { id: '#entryTitleFive', target: '#application', action: 'flex' },
        { id: '#entryTitleSix', target: '#application', action: 'flex' },
        { id: '#applicationClose', target: '#application', action: 'hide' }
    ];
    $.each(popupList, function(index, popup) {
        $(popup.id).click(function(e) {
            e.preventDefault();

            switch(popup.action) {
                case 'flex':
                    $(popup.target).css('display', 'flex');
                    $('body').css('overflow', 'hidden');
                    break;
                case 'hide':
                    $(popup.target).hide();
                    $('body').css('overflow', 'auto');
                    break;
            }
        });
    });
});


$('#callButton').click(function () {
    let name = $('#name');
    let phone = $('#number');
    let hasError = false;

    $('.error-input').hide();
    name.css('border-color', '#FFFFFF')
    phone.css('border-color', '#FFFFFF')


    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {

        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                if(msg.success) {
                    $('#call').hide();
                    $('#success').css("display", "flex");
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
                console.log(msg)
            });
    }
});

$('#applicationButton').click(function () {
    let nameApp = $('#nameApp');
    let numberApp = $('#numberApp');
    let serviceApp = $('#serviceApp');
    let mastersApp = $('#mastersApp');
    let dateApp = $('#dateApp');
    let timeApp = $('#timeApp');
    let hasError = false;

    $('.error-inputs-one').hide();
    $('.error-inputs-two').hide();
    nameApp.css('border-color', '#FFFFFF')
    numberApp.css('border-color', '#FFFFFF')
    serviceApp.css('border-color', '#FFFFFF')
    mastersApp.css('border-color', '#FFFFFF')
    dateApp.css('border-color', '#FFFFFF')
    timeApp.css('border-color', '#FFFFFF')

    if (!nameApp.val()) {
        nameApp.next().show();
        nameApp.css('border-color', 'red');
        hasError = true;
    }
    if (!numberApp.val()) {
        numberApp.next().show();
        numberApp.css('border-color', 'red');
        hasError = true;
    }
    if (!serviceApp.val()) {
        serviceApp.next().show();
        serviceApp.css('border-color', 'red');
        hasError = true;
    }
    if (!mastersApp.val()) {
        mastersApp.next().show();
        mastersApp.css('border-color', 'red');
        hasError = true;
    }
    if (!dateApp.val()) {
        dateApp.next().show();
        dateApp.css('border-color', 'red');
        hasError = true;
    }
    if (!timeApp.val()) {
        timeApp.next().show();
        timeApp.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {

        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {
                name: nameApp.val(),
                numberApp: numberApp.val(),
                serviceApp: serviceApp.val(),
                mastersApp: mastersApp.val(),
                dateApp: dateApp.val(),
                timeApp: timeApp.val(),
            }
        })
            .done(function( msg ) {
                if(msg.success) {
                    $('#applicationForms').hide();
                    $('#applicationSuccess').show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
                console.log(msg)
            });
    }

});




