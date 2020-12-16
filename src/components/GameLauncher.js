import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import play from '../img/play.jpg';
import anchor from '../img/presentor.png';


function GameLauncher() {
    const classes = useStyles();
    const [start, setStart] = useState(false);

    if(start===false) {
        return(
            <div>
                <Card className={classes.card} onClick={() => setStart(true)}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Play"
                            height="200"
                            image={play}
                            title="PLAY"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Start Quiz
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div>
                    <img src={anchor} alt={"anchor"}/>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <ButtonGroup disableElevation variant="contained" color="primary" className={classes.card}>
                    <Link to={"/random"}>
                        <Button variant={"contained"} className={classes.RandomButton} >Random generated</Button>
                    </Link>
                    <Link to={"/categories"}>
                        <Button variant={"contained"} className={classes.CategoryButton} >Choose Category</Button>
                    </Link>
                </ButtonGroup>
                <div>
                    <img src={anchor} alt={"anchor"}/>
                </div>
            </div>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    card: {
        background: '#5F9EA0',
        maxWidth: 345,
        textAlign: "center",
        position: 'absolute',
        left: '50%',
        top: '80%',
        transform: 'translate(-50%, -50%)',
    },
    RandomButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 70,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    CategoryButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 70,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
}));

export default GameLauncher;