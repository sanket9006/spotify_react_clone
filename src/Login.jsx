import React, { useEffect, useState } from 'react'
import './login.css'
import { authURL, sendbackURL } from './spotify.js'
import SpotifyWebApi from 'spotify-web-api-js'

function Login() {

    const [token,setToken] = useState(null)
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
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>
            <a href={authURL}>Login with spotify</a>

        </div>
    )
}

export default Login
