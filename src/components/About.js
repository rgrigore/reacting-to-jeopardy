import React from "react";
import YouTube from 'react-youtube';
import anchor from "../img/presentor.png";
import {makeStyles} from "@material-ui/core/styles";

function About() {
    const classes = useStyles();

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return(
        <div>
            <YouTube videoId="9p8NGKLEHuE" opts={opts} onReady={(event) => _onReady} className={classes.root} />
            <div>
                <img src={anchor} alt={"anchor"}/>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        position: 'absolute',
        left: '70%',
        top: '70%',
        transform: 'translate(-50%, -50%)',
    }
})

export default About;