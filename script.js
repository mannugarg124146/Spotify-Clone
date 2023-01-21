console.log("Welcome to spotify");
let audioElement= new Audio('songs/1.mp3');
let SongIndex=0;
let masterPlay=document.getElementById("masterPlay");
let Mastersongname=document.getElementById("Mastersongname");
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let SongItem=Array.from(document.getElementsByClassName('SongItem'));

let songs=[
    {songname:"Dhoka",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Doobey",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Fortuner",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Kesariya",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Maan Meri Jaan",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Mera Balam Thanedar",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Mera Dil Ye Pukare Aaja",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Meri Zindagi Hai Tu",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Raatan Lambiyan",filepath:"9.mp3",coverpath:"covers/9.jpg"},
    {songname:"Ram Siya Ram",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
]
SongItem.forEach((element,i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText =songs[i].songname;
    
});

//audioElement.play();
masterPlay.addEventListener('click',(e)=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
}

)
audioElement.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
        //timeupdate

        //update seekbar
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        console.log('progress');
        myprogressbar.value=progress;

}
)
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
}

)
const makeAllplays=()=>{
   
    Array.from(document.getElementsByClassName('Itemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }
    ) 
}
Array.from(document.getElementsByClassName('Itemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplays();
      
        SongIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${SongIndex+1}.mp3`;
        Mastersongname.innerText=songs[SongIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    )
}

)
document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=9)
    {
        SongIndex=0;
    }
    else{
        SongIndex+=1;
    }
    audioElement.src=`songs/${SongIndex+1}.mp3`;
    Mastersongname.innerText=songs[SongIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

)
document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0)
    {
        SongIndex=0;
    }
    else{
        SongIndex-=1;
    }
    audioElement.src=`songs/${SongIndex+1}.mp3`;
    Mastersongname.innerText=songs[SongIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

)

