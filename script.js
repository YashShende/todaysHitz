var songs = [
		'http://rfcmedia.streamguys1.com/MusicPulse.mp3',//internation hitz
	    'http://streams.bigfm.de/bigfm-nitroxedm-128-mp3?usid=0-0-H-A-D-02',//EDM
		'http://51.15.208.163:8081/radio/mt20live_11/icecast.audio',//R MIRCHI
		'http://185.52.127.159/de/33019/mp3_128.mp3',//ALAN WALKWER
		'http://media-ice.musicradio.com/HeartLondonMP3'//Love FM
		];



        
        var poster = ["https://assets.rjvan-1a.com/static/playlist/5883691/af8c5adf6b21d6f.jpg",
        			"https://d49r1np2lhhxv.cloudfront.net/www/admin/uploads/images/WTFEDMpic.jpg",
        			"http://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2016/05/12/Radio%20Mirchi.jpg?itok=d-QBu3Ee",
        			"https://pbs.twimg.com/media/DmuQ4qmXsAAtlt7.jpg",
        			"https://pbs.twimg.com/media/Dp9jBWKWkAEtNyr.jpg"];
        
        // var songTitle = document.getElementById("songTitle");
        
        
        var song = new Audio();
        var currentSong = 0;    // it point to the current song
        
        window.onload = playSong;   // it will call the function playSong when window is load
        
        function playSong(){
            
            song.src = songs[currentSong];  //set the source of 0th song 
            
            // songTitle.textContent = songs[currentSong]; // set the title of song
            
            song.play();    // play the song
        }
        
        function playOrPauseSong(){
            
            if(song.paused){
                song.play();
                
            }
            else{
                song.pause();
               
            }
        }
        
        // song.addEventListener('timeupdate',function(){ 
            
        //     var position = song.currentTime / song.duration;
            
        //     fillBar.style.width = position * 100 +'%';
        // });
        
    
        function next(){
            
            currentSong++;
            if(currentSong > 4){
                currentSong = 0;
            }
            playSong();
            
            $('#bg').css('background-image','url(poster[currentSong])');
            
            
        }// End of Next function
    
        function pre(){
            
            currentSong--;
            if(currentSong < 0){
                currentSong = 2;
            }
            playSong();
            $('#bg').css('background-image', `url(${poster[currentSong]})`);
            
            
        } // END Of Pre Function
        
    
    
    
    
    
    
    
    
    
