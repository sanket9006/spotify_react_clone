import React from 'react'
import './body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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

            <div className="player_body_icons">
                <PlayCircleFilledIcon />
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>


        </div>


    )
}

export default Player_body
