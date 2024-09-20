document.addEventListener('DOMContentLoaded', function() {
    // Navigation between Home, Calendar, Music Player, To-Do List, Notes, Image Gallery, Weather, Quote, Stopwatch, Pomodoro, and Currency sections
    const homeLink = document.getElementById('home-link');
    const calendarLink = document.getElementById('calendar-link');
    const musicLink = document.getElementById('music-link');
    const todoLink = document.getElementById('todo-link');

    const homeSection = document.getElementById('home');
    const calendarSection = document.getElementById('calendar-section');
    const musicSection = document.getElementById('music');
    const todoSection = document.getElementById('todo');

    // Event listeners for navigation
    homeLink.addEventListener('click', function() {
        showSection(homeSection);
    });

    calendarLink.addEventListener('click', function() {
        showSection(calendarSection);
    });

    musicLink.addEventListener('click', function() {
        showSection(musicSection);
    });

    todoLink.addEventListener('click', function() {
        showSection(todoSection);
    });

    // Function to display the clicked section and hide others
    function showSection(section) {
        homeSection.style.display = 'none';
        calendarSection.style.display = 'none';
        musicSection.style.display = 'none';
        todoSection.style.display = 'none';
        section.style.display = 'block';
    }

    // Music Player Logic
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-btn');
    const nextTrackButton = document.getElementById('next-track-btn');
    const prevTrackButton = document.getElementById('prev-track-btn');
    const volumeControl = document.getElementById('volume-control');
    const fileUpload = document.getElementById('file-upload');
    const playlistElement = document.getElementById('playlist');
    let currentTrackIndex = 0;
    let playlist = [];

    // Play/Pause Logic
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Volume Control
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;
    });

    // File Upload Logic
    fileUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        playlist = [];
        playlistElement.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            playlistElement.appendChild(listItem);
            playlist.push(file);

            // Add event listener to playlist item
            listItem.addEventListener('click', () => {
                playTrack(i);
            });
        }
        if (playlist.length > 0) {
            playTrack(0);
        }
    });

    // Play track by index
    function playTrack(index) {
        const file = playlist[index];
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        audioPlayer.play();
        currentTrackIndex = index;
        playPauseButton.textContent = 'Pause';
    }

    // Next Track Logic
    nextTrackButton.addEventListener('click', () => {
        if (playlist.length > 0) {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            playTrack(currentTrackIndex);
        }
    });

    // Previous Track Logic
    prevTrackButton.addEventListener('click', () => {
        if (playlist.length > 0) {
            currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            playTrack(currentTrackIndex);
        }
    });


});