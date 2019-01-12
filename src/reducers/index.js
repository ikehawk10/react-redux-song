import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'I want it that way', duration: '4:30' },
    { title: 'No Scrubs', duration: '3:30' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

