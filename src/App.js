// Import Components
import Players from './Players'
import Login from './Login'

// Import CSS
import './App.css';

// Import Scripts - Other Files
import { sendbackURL } from './spotify.js'
import { useDataLayerValue } from './DataLayer'

// Import Packages
import SpotifyWebApi from 'spotify-web-api-js'
import React, { useEffect } from 'react'

function App() {

  const spotify = new SpotifyWebApi();
  const [{ user, token }, dispatch] = useDataLayerValue();
  const _id = null;

  useEffect(() => {
    const _token = sendbackURL()
    window.location.hash = ""

    if (_token) {
      console.log(_token)
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists insidde app.js")
        console.log(playlists)

        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [])

  return (
    <div className="App">
      {token ? <Players spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
