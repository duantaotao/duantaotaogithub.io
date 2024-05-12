const audioPlayer = document.getElementById('audio-player');
const songs = ['music/song1.mp3', 'music/song2.mp3', 'music/song3.mp3']; // 音乐库
let currentSongIndex = 0;

function play() {
    audioPlayer.play();
}

function pause() {
    audioPlayer.pause();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    play();
}

function playNextSong() {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[nextIndex];
    play();
    currentSongIndex = nextIndex;
}
