import React, { useEffect } from 'react'
import './login.css'

import { authURL, sendbackURL } from './spotify.js'


function Login() {

    useEffect(() => {
        console.log(sendbackURL())
        window.location.hash = ""
    }, [])

    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>
            <a href={authURL}>Login with spotify</a>

        </div>
    )
}

export default Login
