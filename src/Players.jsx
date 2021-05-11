import React from 'react'

// Import CSS
import './player.css'

// Import Components
import Player_body from './Player_body'
import Sidebar from './Sidebar';
import Footer from './Footer'

function Players({spotify}) {

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Player_body spotify={spotify}/>
            </div>
                <Footer />
        </div>
    )
}

export default Players
