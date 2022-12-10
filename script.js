const audio = document.querySelector("audio");

const audiobar = document.getElementById("audiobar");
const volumebar = document.getElementById("volumebar");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const muteBtn = document.getElementById("mute");

window.addEventListener("load", () => {
    console.log("page fully loaded");
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

function pause(){
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });
}

function stop(){
    stopBtn.addEventListener("click", () => {
        audio.load();
        audio.pause();
        audiobar.valueAsNumber = 0;
    });
}

function mute(){
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
    });
}

play();
pause();
stop();
mute();