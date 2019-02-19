var radio = document.getElementById("rad");
var cover = document.getElementById("albumCover");
var rn=document.getElementById('radText');


var songs = [
		'http://rfcmedia.streamguys1.com/MusicPulse.mp3',//internation hitz
	    'http://streams.bigfm.de/bigfm-nitroxedm-128-mp3?usid=0-0-H-A-D-02',//EDM
		'http://51.15.208.163:8081/radio/mt20live_11/icecast.audio',//R MIRCHI
		'http://185.52.127.159/de/33019/mp3_128.mp3',//ALAN WALKWER
		'http://media-ice.musicradio.com/HeartLondonMP3'//Love FM
		];



        
        var poster = ["https://images.music-worx.com/covers/Hello-Hiren-Whyte-Label-musicworx.jpg",
		"http://lh3.googleusercontent.com/y4B_SVLZplALZ474KKsVCrqL3ACE_5bSrm7tH3lEjhIGSpv47vWRTN9GcN6NxlbbLA=w300",
        	"http://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2016/05/12/Radio%20Mirchi.jpg?itok=d-QBu3Ee",
        	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6_0NA15PmhzTQW1ucKgUZEI-TyGZdRRtC8S8OvaFksj-Hhk6",
        	"https://pbs.twimg.com/media/Dp9jBWKWkAEtNyr.jpg"
        	];

		var title =['Today\'s HitZ','Nitro EDM','Radio MIRCHI','Alan Walker','Love Radio' ];

        
        
       $(document).on('click', '.fa-play', function(e){
	$(e.target).addClass("fa-pause");
	$(e.target).removeClass("fa-play");
});

$(document).on('click', '.fa-pause', function(e){
	$(e.target).addClass("fa-play");
	$(e.target).removeClass("fa-pause");
});

 var song = new Audio();
 var currentSong = 0;



        
        function playSong(){
            if(song.paused){
            song.src = songs[currentSong];
            song.play();// play the song
            }
            else{
            	song.pause();
            }
        }
        function next(){
        	if(currentSong==4){
        		currentSong=-1;
        	}
        	currentSong++;
        	song.src=songs[currentSong];
        	rn.textContent=title[currentSong];
        	cover.src=poster[currentSong];
        	song.play();
        }
        function prev(){
        	if(currentSong==0){
        		currentSong=5;
        	}
        	currentSong--;
        	song.src=songs[currentSong];
        	rn.textContent=title[currentSong];
        	cover.src=poster[currentSong];

        	song.play();
        }
        
