let song = document.getElementById('song');
let volume = document.getElementById('slider');

volume.addEventListener("change", function (e) {
    song.volume = e.currentTarget.value / 100;
})

$(".bgm-button").click(function () {
    $("#slider").slideToggle();
})