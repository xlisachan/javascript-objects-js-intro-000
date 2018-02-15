var playlist = {
  {Drake: "God's Plan"},
  {Ed Sheeran: "Perfect"},
  {Bruno Mars & Cardi B: "Finesse"}
};

function updatePlaylist(playlist, artistName, songTitle){
  var playlist = {artistName: songTitle};
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
