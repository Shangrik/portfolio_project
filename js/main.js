// burger nav menu
// const navIcon = document.querySelector('.navburger');
// const fade = document.querySelector('.fade');
// const navMenu = document.querySelector('.nav-menu');

// navIcon.addEventListener('click', function () {
//     console.log('click');
//     this.classList.toggle('navburger--active');
//     fade.classList.toggle('fade--active');
//     navMenu.classList.toggle('nav-menu--active');
// });

$(document).ready(function () {
    const navIcon = $('.navburger');
    const fade = $('.fade');
    const pagination = $('.pagination__item');
    const mobileNav = $('[data-mobile-nav]');
    const header = $('#header');
    const portfolio = $('#portfolio');
    const workstyle = $('#workstyle');
    const contacts = $('#contacts');
    // burger menu-icon
    navIcon.on('click', function () {
        if (!(navIcon.hasClass('navburger--active'))) {
            $(this).addClass('navburger--active');
            fade.fadeIn();
        } else {
            $(this).removeClass('navburger--active');
            fade.fadeOut();
        }
    });

    mobileNav.on('click', function () {
        navIcon.removeClass('navburger--active');
        fade.fadeOut();
    });



    // pagination
    $('.pagination').onePageNav({
        currentClass: 'pagination__item--active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () { },
        end: function () { },
        scrollChange: function ($currentListItem) { }
    });




    // mixitup
    // const elem = document.querySelector('#portfolio-works');
    // const mixer = mixitup(elem, {
    //     classNames: {
    //         block: ""
    //     }
    // });


    // const el = document.querySelectorAll('[data-clear]');
    // const small = document.querySelectorAll('[data-nobig]');
    // const big = document.querySelectorAll('[data-big]');
    // const seeAll = document.querySelector('[data-filter="all"]');
    // el.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //         small.forEach(function (item) {
    //             item.classList.remove('project-card--big');
    //         });
    //     });
    // });
    // seeAll.addEventListener('click', function () {
    //     big.forEach(function (item) {
    //         item.classList.add('project-card--big');
    //     });
    // });

    // form validate
    $('#mail-form').validate({
        rules: {
            userEmail: {
                required: true,
                email: true,
                minlength: 3
            },
            userSubject: {
                required: true,
                minlength: 2
            },
            userMessage: {
                required: true,
                minlength: 2
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }

    });

    // Ajax mail
    function ajaxFormSubmit() {
        let string = $('#mail-form').serialize();  //Сохраняем данные формы в строку

        // Формируем запрос
        $.ajax({
            type: 'POST', //Тип запроса - POST
            url: 'php/mail.php', //куда отправляем запрос
            data: string, //какие данные отправляем, вданном случае строка с данными формы

            // Если все прошло успешно
            success: function (html) {
                $('#mail-form').slideUp(800);
                $('#answer').html(html);
            }


        });
        // Чтоб по Submit больше ничего не выполнялось делаем возврат False чтобы прервать цепочку выполнения
        return false;
    }






});

// form inputs focused
const formFields = document.querySelectorAll('.form-item__form-field');
for (let item of formFields) {
    const thisParent = item.closest('.form-item');
    const thisPlaceholder = thisParent.querySelector('.form-item__fake-placeholder');
    // Если инпут в фокусе
    item.addEventListener('focus', function () {
        thisPlaceholder.classList.add('active');
    });
    // Если инпут теряет фокус
    item.addEventListener('blur', function () {
        if (this.value.length > 0) {
            thisPlaceholder.classList.add('active');
        } else {
            thisPlaceholder.classList.remove('active');
        }
    });

}



// Убираем анимацию AOS на экранах меньше 1200 px
const aosElements = document.querySelectorAll('.timeline-item__descr');
aosElements.forEach(function (item) {
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1200) {
            item.dataset.aos = item.getAttribute('id');
        } else {
            item.dataset.aos = "";
        }
    });
    if (window.innerWidth > 1200) {
        item.dataset.aos = item.getAttribute('id');
    } else {
        item.dataset.aos = "";
    }
});

// Убираем меню навигации и оверлей на экранах больше 1200px 
const fade = document.querySelector('#fade');
const navMenu = document.querySelector('#nav-menu');
const navBurger = document.querySelector('.navburger');
window.addEventListener('resize', function () {
    if (window.innerWidth > 1199) {
        fade.style.display = 'none';
        if (navBurger.classList.contains('navburger--active')) {
            navBurger.classList.remove('navburger--active');
        }
    } else if (window.innerWidth <= 1199 && navBurger.classList.contains('navburger--active')) {
        fade.style.display = 'block';
    }

});



