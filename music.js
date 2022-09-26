const music = document.querySelector('audio')
const image = document.querySelector('img')
const play = document.getElementById('Play')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const next = document.getElementById('Next')
const previous = document.getElementById('previous')
let Isplaying = false;

 const musicPlay = ()=>{
  Isplaying = true;
  music.play()
  play.classList.replace('fa-play', 'fa-pause');
  image.classList.add('animate')
 }
 const musicPaused= ()=>{
    Isplaying = false;
    music.pause()
    play.classList.replace('fa-pause', 'fa-play');
    image.classList.remove('animate')
   }
 
play.addEventListener('click', (e)=>{
    e.preventDefault()
    Isplaying ? musicPaused() : musicPlay()

})

const songs = [
    {
        name: 'chale-ana',
        title: 'chale ana',
        artist: 'arman malik',
        music: 'music-1'
        
    },

    {
        name: 'hi',
        title: 'rab kary tujh ko',
        artist: 'alka yadav',
        music: 'music-2'
       
    },


    {
        name: 'chal-waha',
        title: 'chal waha jaty',
        artist: 'arjit sing',
        music: 'music-3'
       
    },

    
    {
        name: 'galia-song',
        title: 'gallian',
        artist: 'Ankit tiwari',
        music: 'music-4'
       
    },
    {
        name: 'teri-yaad',
        title: 'teri yad',
        artist: 'b prank',
        music: 'music-5'
       
    },
    {
        name: 'chahu-mea',
        title: 'tu he yeh mujh',
        artist: 'arjit singh',
        music: 'music-6'
       
    },

    

]
const loadsongs = (songs)=>{
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = 'music/' + songs.music + '.mp3';
  image.src = 'images/'+ songs.name + '.jpg'
}

songIndex= 0;
  const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadsongs(songs[songIndex])
    music.play()
  }

  songIndex= 0;
  const preSong = ()=>{
    songIndex = (songIndex -  1 + songs.length) %songs.length
    loadsongs(songs[songIndex])
    music.play()
  }










next.addEventListener('click', nextSong)
previous.addEventListener('click', preSong)









   




   
   
  
