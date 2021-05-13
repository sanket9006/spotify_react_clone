import React from 'react'
import './body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'

function Player_body({ spotify }) {

    const [{ discoverweekly }, dispatch] = useDataLayerValue();
    console.log(discoverweekly);

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_text">
                <img src={discoverweekly?.images[0]?.url} ></img>
                <div className="body_text_info">
                    <strong>PLAYLIST</strong>
                    <h4>{discoverweekly?.name}</h4>
                    <p>{discoverweekly?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Player_body
