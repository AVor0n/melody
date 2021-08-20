$(document).ready(function () {

    //---------------------Обработка действий по выбору этажа
    let currentFloor = 2;
    const counterUp = $('.counter-up')
    const counterDown = $('.counter-down')
    const floorPath = $('.home-image path') //svg-контуры для подсветки выбранного этажа

    function setCurrentFloor(floor) {
        currentFloor = floor

        usCurrentFloor = String(floor).padStart(2, '0')
        $('.counter').text(usCurrentFloor)

        floorPath.removeClass('current-floor')
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
    }

    //Изменение счетчика при наведении на картику этажа
    floorPath.on('mouseover', function () {
        setCurrentFloor($(this).attr('data-floor'))
    })
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            setCurrentFloor(++currentFloor)
        }
    })
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            setCurrentFloor(--currentFloor)
        }
    })


    //-------------------Обработка действий с модальным окном по выбору квартиры
    const modal = $('.modal') //модальное окно
    const modalCloseButton = $('.modal-close-button')
    const modalOpenButton = $('.button-primary')
    const flatPath = $('.floor-image path') //svg-контуры для подсветки доступных квартир
    const flatLink = $('.flat-link') //список с ссылками доступных квартир

    function toggleModal() {
        modal.toggleClass('is-open')
    }

    function selectCurrentFlat() {
        let currentFlat = $(this).attr('data-flat');
        flatPath.removeClass('current-flat')
        flatLink.removeClass('current-flat')
        $(`[data-flat=${currentFlat}]`).toggleClass('current-flat')
    }

    //Открытие модального окна с выбором квартиры
    floorPath.on('click', toggleModal) //при клике на картинку этажа
    modalOpenButton.on('click', toggleModal) //при нажатии на кнопку "Посмотреть квартиры"

    //Закрытие модального окна
    modalCloseButton.on('click', toggleModal)

    //Подсвечивание выбранной квартиры
    flatLink.on('mouseover', selectCurrentFlat) //при выборе в списке
    flatPath.on('mouseover', selectCurrentFlat) //при выборе на картинке
});
