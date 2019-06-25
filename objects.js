var playlist = {snailMail: 'Thinning', arethaFranklin: 'Think'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  var newPlaylist = delete playlist.artistName;
  return playlist;
}

