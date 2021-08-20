$(document).ready(function () {
    let currentFloor = 2;
    const counterUp = $('.counter-up')
    const counterDown = $('.counter-down')
    const floorPath = $('.home-image path')
    const modal = $('.modal')
    const modalCloseButton = $('.modal-close-button')
    const modalOpenButton = $('.button-primary')
    const toggleModal = () => modal.toggleClass('is-open')

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        $(this).toggleClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    })

    floorPath.on('click', toggleModal)
    modalOpenButton.on('click', toggleModal)
    modalCloseButton.on('click', toggleModal)

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

    const flatPath = $('.floor-image path')
    const flatLink = $('.flat-link')

    flatLink.on('mouseover', function () {
        let idxFlat = $(this).attr('data-flat');
        flatPath.removeClass('current-flat')
        flatLink.removeClass('current-flat')
        $(`[data-flat=${idxFlat}]`).toggleClass('current-flat')
    })
    flatPath.on('mouseover', function () {
        let idxFlat = $(this).attr('data-flat');
        flatPath.removeClass('current-flat')
        flatLink.removeClass('current-flat')
        $(`[data-flat=${idxFlat}]`).toggleClass('current-flat')
    })
});
