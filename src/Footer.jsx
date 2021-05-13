// Import from React 
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from './DataLayer'

// Material UI
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

// CSS
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="album_cover" src="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1531202322/srch_adityamusic_INA091816158.jpg" alt=""></img>

                <div className="song__info">
                    <h4>Inkem Inkem Inkem Kaavaale</h4>
                    <p>Geetha Govindam</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item ><VolumeDownIcon /></Grid>
                    <Grid item><PlaylistPlayIcon /></Grid>
                    <Grid item xs> <Slider aria-labelledby="continuous-slider" /></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
