import React, { useState, useEffect } from 'react';
import { fetchPlaylists } from './youtubeAPI';
import Playlist from './components/Playlist';

const App = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylistsData = async () => {
      const fetchedPlaylists = await fetchPlaylists();
      setPlaylists(fetchedPlaylists);
    };
    fetchPlaylistsData();
  }, []);

  return (
    <div>
      <h1>My YouTube Playlists</h1>
      {playlists.map((playlist) => (
        <Playlist key={playlist.id} playlistId={playlist.id} />
      ))}
    </div>
  );
};

export default App;
