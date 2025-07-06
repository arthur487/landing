$(document).ready(function() {
    $('#Slide-down').click(function() {
        $('#success').slideDown()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})
