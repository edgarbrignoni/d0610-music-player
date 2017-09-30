(function(musicPlayer){
    
    musicPlayer.init = function(){
        //document.getElementById('hiddenPlayer').play();
    }
    
    musicPlayer.loadSongs = function(songsArray, songsSelector){
        if(!Array.isArray(songsArray)) 
        {
            console.log('loadSongs is expecting an array');
        }
        else
        {
            var myParentDiv = document.querySelector(songsSelector);
            myParentDiv.innerHTML = generateListOfSongsHTML(songsArray);
            addAllSongsEventListeners();
        }
    }
    
    function addAllSongsEventListeners()
    {
        var allThetrackDomElements = document.querySelectorAll('.track');
        for(var i = 0; i<allThetrackDomElements.length;i++)
        {
            allThetrackDomElements[i].addEventListener('click',musicPlayer.playSong);
        }
    }
    
    function generateListOfSongsHTML(songsList){
        
        var content = '';
        for(var i =0;i<songsList.length;i++)
        {
            content += generateSongHTML(songsList[i]);
        }
        return content;
    }
    
    function generateSongHTML(song){
        var content = '';
        content += '        <div id="song0" class="track" audiourl="'+song.url+'">';
        content += '        	<div class="track__number">##</div>';
        content += '        	<div class="track__title featured">';
        content += '        		<span class="title">'+song.name+'</span>';
        content += '        		<span class="feature">FEATURE</span>';
        content += '        	</div>';
        content += '        	<div class="track__length">MM:SS</div>	';
        content += '        </div>';
        return content;
    }
    
    musicPlayer.playSong = function(event){

        var clickdSongElement = event.target;
        var currentURL = clickdSongElement.getAttribute('audiourl');
        var audioSource = document.getElementById('sourcePlayer');
        audioSource.src = currentURL;
        
        var audtag = document.getElementById('hiddenPlayer');
        audtag.load();
        audtag.play();
    }
    
})(musicPlayer = this.MusicPlayer || {});