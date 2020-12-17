// import React from 'react';

// const CategoryItem = ({ categories, loading}) => {
//     if (loading) {
//         return <h2>Loading...</h2>;
//     }

//     return (
//         <div className='row mb-4'>
//             {categories.map(category => (
//                 <div key={category.id} className="card">
//                     <div className="card-body">
//                         <h5 className="card-title"><a href="/#" style={linkStyle}>{category.title}</a></h5>
//                             <p className="card-text">No. of questions: 
//                                 <span className="badge badge-info" style={{ color: 'blue'}}>
//                                 {category.clues_count}
//                                 </span>
//                             </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const linkStyle = {
//     color: '#f2222',
//     textDecoration: 'none'
// }

// export default CategoryItem;


import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CategoryItem = props => {
    
    const classes = useStyles();

    return (
        <div className="col-4">
            <Link to={{ pathname: "/quiz", state: { category: { id: props.category.id, name: props.category.title } } }} style={{ textDecoration: "none" }}>
                <Card className={classes.root}>
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