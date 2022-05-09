$(function() {
    $('.popup-link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: false,
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
});