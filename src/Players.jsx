import React from 'react'

// Import CSS
import './player.css'

// Import Components
import Player_body from './Player_body'
import Sidebar from './Sidebar';
import Footer from './Footer'

function Players() {

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Player_body />
            </div>
                <Footer />
        </div>
    )
}

export default Players
