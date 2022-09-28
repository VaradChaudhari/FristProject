console.log("Welcome to sangit");
// alert('This is not secure wabsit do ti on own resk');
let songIndex = 0;
let audioElement = new Audio('music/kesariya.mp3');
let masterplay = document.getElementById('masterplay');
let myprograssbar = document.getElementById('myProgressBar');
let gift = document.getElementById('gift');

let songs= [

    {songName: "Kesriya", FilePath:"music/kesariya.mp3" , coverpath:"back1.png"}
      
]


masterplay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gift.style.opacity = 1;

    }

    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gift.style.opacity = 0;

        
    }

})
// audioElement.play();
audioElement.addEventListener('timeupdate', ()=>{

    console.log('timupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprograssbar.value = progress;


})

