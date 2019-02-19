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
        	"https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/WTFEDMpic.jpg",
        	"http://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2016/05/12/Radio%20Mirchi.jpg?itok=d-QBu3Ee",
        	"https://pbs.twimg.com/media/DmuQ4qmXsAAtlt7.jpg",
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
        
