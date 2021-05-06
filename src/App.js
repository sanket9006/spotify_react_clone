// Import Components
import Players from './Players'
import Login from './Login'

// Import CSS
import './App.css';

// Import Scripts - Other Files
import { sendbackURL } from './spotify.js'
 
// Import Packages
import SpotifyWebApi from 'spotify-web-api-js'
import React, { useEffect, useState } from 'react'

function App() {

  const [token, setToken] = useState(null)
  const spotify = new SpotifyWebApi()

  useEffect(() => {
    const _token = sendbackURL()
    console.log(_token)
    window.location.hash = ""

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        console.log(user);
      })
    }
  }, [])

  return (
    <div className="App">
      {token ? <Players /> : <Login />}
    </div>
  );
}

export default App;
