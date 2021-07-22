
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



