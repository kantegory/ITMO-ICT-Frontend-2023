let mainAudio = document.getElementById("audio");    // Берём элемент audio // Берём аудио дорожку
let playPauseBtn = document.querySelector(".play-pause");   // Берём кнопку проигрывания // Берём кнопку паузы
let prevBtn = document.getElementById("prev");   // Берём кнопку переключения предыдущего трека
let nextBtn = document.getElementById("next");   // Берём кнопку переключение следующего трека
let musicName = document.getElementById("current-song-name");
let musicArtist = document.getElementById("current-autor");
let musicImg = document.getElementById("current-img");
let wrapper = document.querySelector(".wrapper");
let progressArea = document.querySelector(".progress-area");
let progressBar = document.querySelector(".progress-bar");
let volumeScale = document.getElementById("volume");
let allMusic = {};
// В браузере
fetch('../json/musicData.json')
    .then(response => response.json())
    .then(data => {allMusic = data;
    })
    .catch(error => console.error('Ошибка загрузки файла:', error));


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    // playingSong();
});

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = allMusic[indexNumb - 1].img;
    mainAudio.src = `../../src/music/${allMusic[indexNumb - 1].filename}`;
}
// function loadMusic(indexNumb){
//     musicName.innerText = allMusic[indexNumb - 1].name;
//     musicArtist.innerText = allMusic[indexNumb - 1].artist;
//     musicImg.src = `../../src/img/${allMusic[indexNumb - 1].src}.png`;
//     mainAudio.src = `../../src/music/${allMusic[indexNumb - 1].src}.mp3`;
// }

//play music function
function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.innerText = "pause";
    mainAudio.play();
}

//pause music function
function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.innerText = "play_arrow";
    mainAudio.pause();
}

//prev music function
function prevMusic(){
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    // playingSong();
}

//next music function
function nextMusic(){
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// play or pause button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = wrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    // playingSong();
});


//prev music button event
prevBtn.addEventListener("click", ()=>{
    prevMusic();
});

//next music button event
nextBtn.addEventListener("click", ()=>{
    nextMusic();
});
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if(totalSec < 10){ //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    // playingSong();
});


mainAudio.addEventListener("ended", ()=>{
    // we'll do according to the icon means if user has set icon to
    // loop song then we'll repeat the current song and will do accordingly
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch(getText){
        case "repeat":
            nextMusic(); //calling nextMusic function
            break;
        case "repeat_one":
            mainAudio.currentTime = 0; //setting audio current time to 0
            loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
            playMusic(); //calling playMusic function
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
            do{
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            }
            while(musicIndex === randIndex); //this loop run until the next random number won't be the same of current musicIndex
            musicIndex = randIndex; //passing randomIndex to musicIndex
            loadMusic(musicIndex);
            playMusic();
            // playingSong();
            break;
    }
});

function ChangeVolume() { //Меняем громкость
    var volume=  volumeScale.value / 100;
    mainAudio.volume = parseFloat(volume.toString());
}
volumeScale.addEventListener('change',ChangeVolume);