const tracks = document.querySelectorAll("audio");
let audio;

function playTrack(){
    console.log(sessionStorage.getItem("status"));

    if(!sessionStorage.getItem("status")){
        audio = document.querySelector(".def");
    }
    else{
        let status = sessionStorage.getItem("status");
        let identifier = sessionStorage.getItem("identifier");
        console.log(identifier);

        audio = document.getElementsByClassName(identifier)[0];
        audio.classList.add(status);

    }
}
playTrack();

const audiobar = document.getElementById("audiobar");
const volumebar = document.getElementById("volumebar");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const muteBtn = document.getElementById("mute");

const playlist = document.querySelectorAll(".playlist div h2");
const tracksURLs = ["./quranmp3/050.mp3", "./quranmp3/053.mp3",
                    "./quranmp3/055.mp3", "./quranmp3/094.mp3"];

function pick_track(){
    playlist.forEach(e => {
        e.addEventListener("click", () => {
            let track = document.getElementsByClassName(e.className + " " + "track")[0];

            if(audio.classList.contains("playing")){
                audio.classList.remove("playing");
                console.log("playing deleted");
            }
            console.log(e.className);

            sessionStorage.setItem("status", "playing");
            sessionStorage.setItem("identifier", e.className + " track");
            location.reload();
        });
    });
}
pick_track();

window.addEventListener("load", () => {
    audiobar.setAttribute("max", audio.duration);
});

audio.addEventListener("input", () => {
    audiobar.valueAsNumber = audio.currentTime;
    console.log(audio.currentTime);
});

audiobar.addEventListener("input", () => {
    audio.currentTime = audiobar.valueAsNumber;
});

volumebar.addEventListener("input", () => {
    audio.volume = volumebar.valueAsNumber;
});

function play(){
    playBtn.addEventListener("click", () => {
        audiobar.setAttribute("max", audio.duration);
        audio.play();
    })
}
play();

function pause(){
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });
}
pause();

function stop(){
    stopBtn.addEventListener("click", () => {
        audio.load();
        audio.pause();
        audiobar.valueAsNumber = 0;
    });
}
stop();

function mute(){
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
    });
}
mute();
