// action creator
export const createSong = song => {
  // return an action
  return {
    type: "Song_Selected",
    payload: song
  }
};

