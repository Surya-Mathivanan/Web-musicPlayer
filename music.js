
const tracks = [
    {
        title: "Song",
        src: "Azadi-MassTamilan.dev.mp3"
    },
    {
        title: "Song",
        src: "Gangstaa-MassTamilan.dev.mp3"
    },
    {
        title: "Song",
        src: "Hukum---Thalaivar-Alappara-MassTamilan.dev.mp3"
    },
    {
        title: "Song",
        src: "Saitji-Saitji-MassTamilan.com.mp3" 
    },
    {
        title: "Song",
        src: "Sachin-Sachin.mp3" 
    },
    {
        title: "Song",
        src: "Nallai-Allai.mp3"
    },
    {
        title: "Song",
        src: "Hey-Minnale-MassTamilan.dev.mp3" 
    }
];
let currentTrackIndex = 0;
const audio = document.getElementById('audio');
const trackTitle = document.getElementById('track-title');
const musicGif = document.getElementById('music-gif');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeControl = document.getElementById('volume');
const seekControl = document.getElementById('seek');
loadTrack(currentTrackIndex);


function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
}
playButton.addEventListener('click', () => {
    if (audio.paused || audio.currentTime === 0) {
        audio.play();
        musicGif.style.display = 'block'; // Show GIF when playing
        playButton.textContent = 'Pause';
        document.body.classList.add('blink-effect'); // Add the blink effect class when playing
    } else {
        audio.pause();
        musicGif.style.display = 'none'; // Hide GIF when paused
        playButton.textContent = 'Play';
        document.body.classList.remove('blink-effect'); // Remove the blink effect class when paused
    }
});



prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; // Loop back to last track
    loadTrack(currentTrackIndex);
    audio.play();
    musicGif.style.display = 'block';
    playButton.textContent = 'Pause';
});


nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Loop back to first track
    loadTrack(currentTrackIndex);
    audio.play();
    musicGif.style.display = 'block';
    playButton.textContent = 'Pause';

});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Loop back to the first track if it's the last track
    loadTrack(currentTrackIndex);
    audio.play();
    musicGif.style.display = 'block';
    playButton.textContent = 'Pause';
});




// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value / 100; // Volume control as percentage
});

// Seek control
audio.addEventListener('timeupdate', () => {
    seekControl.value = (audio.currentTime / audio.duration) * 100;
});

seekControl.addEventListener('input', () => {
    audio.currentTime = (seekControl.value / 100) * audio.duration; // Seek to selected time
});
