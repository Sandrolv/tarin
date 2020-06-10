

//crear 2 array
var songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

//se crea un objeto de clase audio

var song = new Audio();
var currentSong=0; //esto apunta a la cancion actual

//ahora yo tocare la musica cuando la ventana o body esta cargada

window.onload = playSong; //esto llamara a la funcion playSong cuando la ventana es cargada

function playSong (){
    song.src = songs[currentSong]; //establece la fuente de la cancion
    songTitle.textContent = songs[currentSong];//establece el titulo de la cancion
    song.play(); //play a la musica
}
//para cambiar el boton de pausa

function playOrPauseSong(){

    if(song.paused){
        song.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}

//ahora  llamare a la funcion dentro del boton click event

//ahora accederemos a seekbar

song.addEventListener('timeupdate',function(){
    var position = song.currentTime / song.duration;
    fillBar.style.width = position*100 + '%';
});

//ahora trabajamos en el next botton

function next(){
    
    currentSong++;
    if(currentSong>2){
        currentSong=0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    //ahora asignamos el poster
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

//cuando necesitemos llamar a this function on button click

function pre(){
            
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
    
}