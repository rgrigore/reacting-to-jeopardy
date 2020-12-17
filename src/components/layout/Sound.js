import React from "react";
import useSound from "use-sound";
import Button from "@material-ui/core/Button";
import song from '../../sound/Never Gonna Give You Up Original.mp3'
import {makeStyles} from "@material-ui/core/styles";

const Sound = () => {
    const classes = useStyles();
    
    const volume = 0.50;
    const [play, { stop }] = useSound(song, {volume});
    return (
        <Button onClick={play} onMouseEnter={() => stop()} variant={"contained"} className={classes.RandomButton}>Play with Style!</Button>
    )
};

const useStyles = makeStyles((theme) => ({
    RandomButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 20,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));

export default Sound