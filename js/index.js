$(function () {
    $('.popup').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 600
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});