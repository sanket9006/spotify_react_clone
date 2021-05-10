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
                <ShuffleIcon className="footer__green" />
                <ShuffleIcon className="footer__green" />
                <ShuffleIcon className="footer__green" />
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
