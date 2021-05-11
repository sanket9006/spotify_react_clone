import React from 'react'
import './body.css'
import Header from './Header'

function Player_body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_text">
                <img src="https://newjams-images.scdn.co/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default" ></img>
                <div className="body_text_info">
                    <strong>PLAYLIST</strong>
                    <h4>South / Tamil / Telugu </h4>
                    <p>Description.....</p>
                </div>
            </div>
        </div>
    )
}

export default Player_body
