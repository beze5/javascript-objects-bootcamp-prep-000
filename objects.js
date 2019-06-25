var playlist = { snailMail: 'Thinning', arethaFranklin: 'Think'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}