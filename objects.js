var playlist = {
  artistName1: 'songTitle1',
  artistName2: 'songTitle2'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = 'songTitle';
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
