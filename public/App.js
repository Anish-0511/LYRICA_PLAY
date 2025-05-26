const music=new Audio('audio/1.mp3');
//music.play();

const songs=[
    {
        id:1,
        songName:`Milne hai <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/1.jpg"
    },
    {
        id:2,
        songName:`O Saathi <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"images/2.jpg"
    },
    {
        id:3,
        songName:`Ek Raat <br>
        <div class="subtitle">Vilen</div>`,
        poster:"images/3.jpg"
    },
    {
        id:4,
        songName:`Dil Ko Tumse Pyar Hua <br>
        <div class="subtitle">Roopkumar Rathod</div>`,
        poster:"images/4.jpg"
    },
    {
        id:5,
        songName:`Muskaanein Jhooti Hai <br>
        <div class="subtitle">Suman Sridhar</div>`,
        poster:"images/5.jpg"
    },
    {
        id:6,
        songName:`Jee Le Zaraa <br>
        <div class="subtitle">Vishal Dadlani</div>`,
        poster:"images/6.jpg"
    },
    {
        id:7,
        songName:`Tujhe Sochta Hoon <br>
        <div class="subtitle">Pritam,KK</div>`,
        poster:"images/7.jpg"
    },
    {
        id:8,
        songName:`Dil Ibaadat<br>
        <div class="subtitle">Pritam,KK</div>`,
        poster:"images/8.jpg"
    },
    {
        id:9,
        songName:`Lagdi Lahore Di <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"images/9.jpg"
    },
    {
        id:10,
        songName:`Jaavedaan Hai <br>
        <div class="subtitle">KK,Suzanne D'Mello</div>`,
        poster:"images/10.jpg"
    },
    {
        id:11,
        songName:`Hasi <br>
        <div class="subtitle">Ami Mishra,Kunaal Vermaa</div>`,
        poster:"images/11.jpg"
    },
    {
        id:12,
        songName:`Hale Dil <br>
        <div class="subtitle">Harshit Saxena</div>`,
        poster:"images/12.jpg"
    },
    {
        id:13,
        songName:`Saadi Galli Aaja<br>
        <div class="subtitle">Ayushmann Khurrana</div>`,
        poster:"images/13.jpg"
    },
    {
        id:14,
        songName:`Paisa Hai Toh <br>
        <div class="subtitle">Sachin-Jigar,Vishal Dadlani</div>`,
        poster:"images/14.jpg"
    },
    {
        id:15,
        songName:`Ishq Risk <br>
        <div class="subtitle">Rahat Fateh Ali Khan,Sohail Sen</div>`,
        poster:"images/15.jpg"
    },
    {
        id:16,
        songName:`Baatein Ye Kabhi Na <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/16.jpg"
    },
    {
        id:17,
        songName:`Piya Aaye Na <br>
        <div class="subtitle">Tulsi Kumar,KK</div>`,
        poster:"images/17.jpg"
    },
    {
        id:18,
        songName:`Tera Chehra <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/18.jpg"
    },
    {
        id:19,
        songName:`Tumhin Meri Mandir <br>
        <div class="subtitle">Lata Mangeshkar</div>`,
        poster:"images/19.jpg"
    },
    {
        id:20,
        songName:`Piya <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"images/20.jpg"
    },
    {
        id:21,
        songName:`Ve Kamleya <br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster:"images/21.jpg"
    },
    {
        id:22,
        songName:`Baaki Batein Pine Baad <br>
        <div class="subtitle">Arjun Kanungo</div>`,
        poster:"images/22.jpg"
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const{id,songName, poster} =element;
    let card= document.createElement('a');
    card.classList.add('card');
    card.href= "#" + id;
    card.innerHTML= `
    <img src="${poster}" alt="">
                            <div class="content">
                              ${songName} 
                            </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('content')[0];
       let text_value=as.textContent || as.innerHTML;

       if (text_value.toUpperCase().indexOf(input_value) > -1) {
        items[index].style.display="flex";
       } else{
        items[index].style.display="none";
       }
       if(input.value == 0){
        search_results.style.display = "none";
       } else {
        search_results.style.display= "";
       }
    }
});


let playing = document.getElementById('playing');
let wave=document.getElementById('wave');
playing.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        playing.classList.remove('bi-play-fill');
        playing.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        playing.classList.add('bi-play-fill');
        playing.classList.remove('bi-pause-fill');
    }
    
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
       el.style.background ='rgb(105,105,105, .0)';
       el.classList.add('bi-play-circle-fill');
       el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
       el.style.background ='rgb(105,105,105, .0)';
    })
}


let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');

let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
      index=el.target.id;
      music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');
      download_music.href=`audio/${index}.mp3`;
      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
        download_music.setAttribute('download',songName);
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
    });
})  
let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }

    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;


    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;  
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill'); 
        vol_icon.classList.add('bi-volume-off-fill'); 
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill'); 
        vol_icon.classList.remove('bi-volume-off-fill'); 
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill'); 
        vol_icon.classList.remove('bi-volume-off-fill'); 
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});


let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
index=index-1;
if(index<1){
    index=Array.from(document.getElementsByClassName('songItem')).length;
}
music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
    
});

next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }

    music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
});


let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});


let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
            break;
        case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML='next';
                break;
    }
    
});



const next_music=()=>{
    if(index==songs.length){
        index=1;
    } else{
        index++;
    }
    music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}

const repeat_music =()=>{
    index;
    music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}

const random_music =()=>{
    if(index==songs.length){
        index=1;
    } else{
        index=Math.floor((Math.random()*songs.length)+1);
    }
    music.src=`audio/${index}.mp3`;
     // poster_master_play.src=`img/${index}.jpg`;
      music.play();
      playing.classList.remove('bi-play-fill');
      playing.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) =>{
        return els.id==index;
      });
      songTitles.forEach(elss =>{
        let{songName,poster}= elss;
        title.innerHTML=songName;
        poster_master_play.src=poster;
      });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)'; 
      makeAllPlays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;

    switch(b){
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})

document.getElementById('uploadLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('audioFileInput').click();
});

document.getElementById('audioFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioPlayer = document.getElementById('audioPlayer');
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    }
});
let audiplay = document.getElementById('audiplay');
audiplay.addEventListener('click',()=>{
    if(audioPlayer.paused){
        audioPlayer.play();
        wave.classList.add('active1');
        audiplay.classList.remove('bi-play-fill');
        audiplay.classList.add('bi-pause-fill');
        
    }else{
        audioPlayer.pause();
        wave.classList.remove('active1');
        audiplay.classList.add('bi-play-fill');
        audiplay.classList.remove('bi-pause-fill');
    }
    
});