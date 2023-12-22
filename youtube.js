// Загружаем API YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    // Создаем новый объект проигрывателя
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'x9Dy4uiEgns', // Замените VIDEO_ID на ID вашего видео на YouTube
        playerVars: {
            autoplay: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // Автоматически проигрываем видео при загрузке
}

