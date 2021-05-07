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
import React, { useEffect, useState } from 'react'

function App() {

  const spotify = new SpotifyWebApi();
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = sendbackURL()
    // console.log(_token)
    window.location.hash = ""

    if (_token) {  

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
    }
  }, [])

  console.log("🤷‍♀️  => ", user);
  console.log("🤷‍♀️  => ", token);

  return (
    <div className="App">
      {token ? <Players /> : <Login />}
    </div>
  );
}

export default App;
