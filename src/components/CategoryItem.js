import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
      maxWidth: '20rem',
      borderRadius: '15px',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      fontFamily: 'Impact, Charcoal, sans-serif',
      background: 'rgba(224, 224, 224, 0.9)',
      marginBottom: "10px"
  },
});

const CategoryItem = props => {
    
    const classes = useStyles();

    return (
        <div className="col-4">
            <Link to={{ pathname: "/quiz", state: { category: { id: props.category.id, name: props.category.title } } }} style={{ textDecoration: "none" }}>
                <Card className={classes.root} border="dark">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{ minHeight: "70px" }}>
                                { props.category.title }
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span>No. of questions: </span>
                                <span className="badge badge-info" style={{ color: 'blue'}}>
                                    { props.category.clues_count }
                                </span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryItem