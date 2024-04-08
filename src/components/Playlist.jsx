import React from 'react';
import YouTube from 'react-youtube';

const Playlist = ({ playlistId }) => {
  return (
    <div>
      <h2>Playlist Name</h2>
      <YouTube videoId={playlistId} />
    </div>
  );
};

export default Playlist;
